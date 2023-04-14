/************************************************************************************************************
 * 实现功能：针对业务中Http的请求
 * 创    建：张洪波   2020年05月25日
 * 最近更新: 张洪波   2020年05月26日
 * 相关说明：
 * 附注说明：
 *************************************************************************************************************/

//导入系统环境
import commBnsConfig from "./commBnsConfig.js";

//导入UniHttpy请求的工具
import httpRequest from "../commFrmk/commApp/uniHttpRequestUtil/utilUniHttpRequest.js";

//针对Hash签名算法的工具类
import utilSignBaseSHA1 from "../commFrmk/commApp/commAppHashUtil/utilSignBaseSHA1.js";


// 随机数工具
import uuid from "uuid";
import qs from "qs";

var commBnsUniHttpRequest = {
  hasStartRefresh: false,
};

//获得当的环境配置
var curEnvirCfg = commBnsConfig.funcGetCurEnvirCfg();

/**
 * @param {Object}   objReqParam 业务请求的参数
 * @param {boolean}  isFirst     是否是第一次调用
 * @param {String}   objReqParam.strWebServiceUrl        提供Web服务站点地址(不提供则自动从环境中获取:仅用于非代理模式)
 * @param {String}   objReqParam.strWebServicePath        提供服务的路径
 * @param {String}   objReqParam.strHttpMethod            请求的方法（目前先考GET和POST两种方法,缺省为POST）
 * @param {Object}   objReqParam.objData              请求的数据(POST为请求Body，如果是GET由为网址参数)
 * @param {Object}   objReqParam.dictHeader            请求的头部数据(头部数据，可不提供)
 * @param {Object}   objReqParam.dictHeader.appid        请求的头部数据(头部数据，可不提供).AppID
 * @param {Object}   objReqParam.dictHeader.appkey        请求的头部数据(头部数据，可不提供).AppKey
 * @param {Object}   objReqParam.dictHeader.ticket        请求的头部数据(头部数据，可不提供).Token
 * @param {Object}   objReqParam.dictHeader.sign        请求的头部数据(头部数据，可不提供).API接口签名
 * @param {Object}   objReqParam.dictHeader.ts          请求的头部数据(头部数据，可不提供).时间戳
 */
commBnsUniHttpRequest.FuncBnsHttpRequest = function(objReqParam = {}, isFirst = true) {
  objReqParam.objData = objReqParam.objData || {};
  objReqParam.dictHeader = objReqParam.dictHeader || {};
  objReqParam.strWebServiceUrl = objReqParam.strWebServiceUrl || curEnvirCfg.defaultUrl;

  objReqParam.strHttpMethod = objReqParam.strHttpMethod.toUpperCase() || "POST";

  objReqParam.dictHeader = removeExtraContentType(objReqParam.dictHeader);
  // 根据请求方式对请求参数进行合并转化，同时提取出计算sign需要的参数
  objReqParam.objData = cleanObject(objReqParam.objData);
  let strUriPath = "";
  let strUriParams = "";
  let strSignBody = "";
  if (objReqParam.strHttpMethod.toUpperCase() === "GET") {
    // GET请求，把URL上的参数提取出来，和objData合并，如果有重复，以objData中的为准
    // uniapp不会在URL放数组参数，这是uniapp的问题，所以改为自己手动设置
    let uri = getUri(objReqParam.strWebServicePath);
    let newUrlParams = convertObjectToUrl({
      ...objReqParam.objData,
      ...uri.query
    });
    // 直接将参数拼接到url后面
    objReqParam.strWebServicePath = uri.path + newUrlParams;
    // 清除掉请求参数
    objReqParam.objData = {};
    strUriPath = uri.path;
    strUriParams = newUrlParams.substring(1);
    strSignBody = "";
  } else {
    // 其余请求，不做变化
    let uri = getUri(objReqParam.strWebServicePath);
    strUriPath = uri.path;
    strUriParams = uri.strQuery;
    strSignBody = signStringifyBodyParams(objReqParam.objData, objReqParam.dictHeader);
  }

  // 对请求头部公共处理
  // 主要是要做签名和认证，先获取登陆信息
  let signinData = commBnsConfig.FunGetPersistentData("signinData");
  let dictCurHeader = objReqParam.dictHeader;

  //设置TS
  dictCurHeader["ts"] = Date.now().toString();

  //设置sign
  if (signinData !== "") {
    let strAppKey = signinData.appKey;
    dictCurHeader["sign"] =
      utilSignBaseSHA1.FuncGetCurSignData(
        strAppKey,
        strUriPath,
        dictCurHeader["ts"],
        strUriParams,
        strSignBody);
  }
  objReqParam.dictHeader = dictCurHeader;

  if (!dictCurHeader.hasOwnProperty("Authorization") || !dictCurHeader["Authorization"].startsWith("Basic")) {
    dictCurHeader["Authorization"] = signinData.tokenType + " " + signinData.token;
  }

  function logout(message) {
    uni.showModal({
      title: '登录过期',
      content: message,
      showCancel: false,
      complete: function() {
        commBnsUniHttpRequest.FuncLogOut();
        uni.reLaunch({
          url: '/pages/login/login/login'
        });
      }
    });
  }

  // 尝试发出请求
  return new Promise(function(resove, reject) {
    httpRequest.FuncHttpRequest({
      strUrl: objReqParam.strWebServiceUrl + objReqParam.strWebServicePath,
      strHttpMethod: objReqParam.strHttpMethod,
      objData: objReqParam.objData,
      dictHeader: objReqParam.dictHeader
    }).then(function(res) {
      // token可能失效
      if (res.data.code === 40101 || res.data.code === 40103 || res.data.code === 40105) {
        if (isFirst) {
          // 如果已经有refresh的请求了，则这个请求无效
          if (commBnsUniHttpRequest.hasStartRefresh === false) {
            commBnsUniHttpRequest.hasStartRefresh = true;
              // 重新获取token 
              funcRefreshToken(signinData.refreshToken || "").then(
              function(res){
                if (res.data.success === 1) {
                  // 重新发起请求
                  return commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam, false);
                } else {
                  // 获取token失败，退出登陆
                  commBnsUniHttpRequest.hasStartRefresh = false;
                  logout("长时间未登录设备，登录失效");
                }
              }).catch(err=>{
                // 退出登陆
                commBnsUniHttpRequest.hasStartRefresh = false;
                logout("连接服务器异常");
              });
          }
        } else {
          // 退出登陆
          logout("用户在其他设备登录");
        }
      }
      // 请求成功，返回结果
      else {
        resove([res]);
      }
    }).catch(err => {
      resove([null, err]);
  });
});
}

/**
 * 登出执行的请求操作
 */
commBnsUniHttpRequest.FuncLogOut = function() {
  let signinData = commBnsConfig.FunGetPersistentData("signinData");
  unbindAlias(signinData.uid.toString());
  commBnsConfig.FunRemovePersistentData("signinData");
}



commBnsUniHttpRequest.FuncBnsHttpRequestWithGet = function(strWebServicePath, objData = {}, dictHeader = {}) {
  return this.FuncBnsHttpRequest({
    strWebServicePath,
    objData,
    dictHeader,
    strHttpMethod: 'GET',
  });
};

commBnsUniHttpRequest.FuncBnsHttpRequestWithPost = function(strWebServicePath, objData = {}, dictHeader = {}, isJson =
  false) {
  return this.FuncBnsHttpRequest({
    strWebServicePath,
    objData,
    dictHeader: {
      ...dictHeader,
      "Content-Type": isJson ? "application/json" : "application/x-www-form-urlencoded",
    },
    strHttpMethod: 'POST',
  });
};

commBnsUniHttpRequest.FuncBnsHttpRequestWithPut = function(strWebServicePath, objData = {}, dictHeader = {}, isJson =
  false) {
  return this.FuncBnsHttpRequest({
    strWebServicePath,
    objData,
    dictHeader: {
      ...dictHeader,
      "Content-Type": isJson ? "application/json" : "application/x-www-form-urlencoded",
    },
    strHttpMethod: 'PUT',
  });
};

commBnsUniHttpRequest.FuncBnsHttpRequestWithDelete = function(strWebServicePath, objData = {}, dictHeader = {}, isJson =
  false) {
  return this.FuncBnsHttpRequest({
    strWebServicePath,
    objData,
    dictHeader: {
      ...dictHeader,
      "Content-Type": isJson ? "application/json" : "application/x-www-form-urlencoded",
    },
    strHttpMethod: 'DELETE',
  });
};


/* 刷新token */
function funcRefreshToken(refreshToken) {
  let objReqParam = {
    strWebServicePath: '/user/signin/refresh',
    strHttpMethod: 'POST',
    objData: {
      refreshToken,
      appKey: uuid.v4(),
    },
    dictHeader: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic YXBwOnBhc3N3b3Jk"
    },
  };

  return commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam).then(function(res){
   if (res.data.success === 1) {
     commBnsConfig.FunSetPersistentData("signinData", res.data.data);
   } 
  });
}

/* 忘记密码 */
commBnsUniHttpRequest.FuncForgetPassword = async function(phone, password, captcha, smsId) {
  let objReqParam = {
    strWebServicePath: '/user/signin/forget',
    strHttpMethod: 'POST',
    objData: {
      phone,
      password,
      captcha,
      smsId,
    },
    dictHeader: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic YXBwOnBhc3N3b3Jk"
    },
  };
  return commBnsUniHttpRequest.FuncBnsHttpRequest(objReqParam);
}

/* 分离开请求路径和请求路径上的参数，参数如果键有重复的，取最后一个的值 */
function getUri(strPath) {
  let uri = {};
  strPath = strPath.trim();
  let lastPos = strPath.lastIndexOf("?");

  if (lastPos < 0) {
    uri.path = strPath;
    uri.strQuery = "";
    uri.query = {};
    return uri;
  }
  uri.path = strPath.substring(0, lastPos);
  let queryStr = lastPos === strPath.length ? "" : strPath.substring(lastPos + 1);
  uri.strQuery = queryStr;
  uri.query = {};
  while (queryStr.length !== 0) {
    let index = queryStr.indexOf("&");
    if (index < 0) {
      index = queryStr.length;
    }
    let oneQueryStr = queryStr.substring(0, index);
    let splitIndex = oneQueryStr.indexOf("=");
    if (splitIndex > 0 && splitIndex < oneQueryStr.length - 1) {
      let k = oneQueryStr.substring(0, splitIndex);
      let v = oneQueryStr.substring(splitIndex + 1);
      if (k.endsWith("[]") && k.length > 2) {
        let k1 = k.substring(0, k.length - 2);
        if (Object.prototype.toString.call(uri.query[k1]) === "[object Array]") {
          uri.query[k1].push(v);
        } else {
          uri.query[k1] = [v];
        }
      } else {
        uri.query[k] = v;
      }
    }
    queryStr = queryStr.substring(index + 1);
  }

  return uri;
}

/* 去除对象中值为null，undefined的属性 */
function cleanObject(objData) {
  objData = objData || {};
  let keys = Object.keys(objData);
  for (let key of keys) {
    if (objData[key] === null || typeof objData[key] === "undefined") {
      delete objData[key];
    }
  }
  return objData;
}

/* 将object类型转化为url字符串参数 */
function convertObjectToUrl(objParams) {
  let strParams = qs.stringify(objParams, {
    encode: true
  });
  if (strParams !== "") {
    return "?" + strParams;
  }
  return "";
}

/* 除去多余的Content-Type */
function removeExtraContentType(objHeader) {
  objHeader = objHeader || {};
  let keys = Object.keys(objHeader);
  let type = "";
  for (let key of keys) {
    if (key.toLowerCase() === "content-type") {
      if (type !== "") {
        // 协议规定，不能有多个Content-Type
        delete objHeader[key];
      } else {
        type = objHeader[key];
      }
    }
  }
  // 名称标准化
  if (type !== "") {
    objHeader["Content-Type"] = type;
  }
  return objHeader;
}

/**
 * 根据请求类型获取body中的需要加密的结果
 * @param {Object} objBodyParams    body的参数
 * @param {Object} objHeader        请求头
 * @return {String} 应该是请求中body的数据
 */
function signStringifyBodyParams(objBodyParams, objHeader) {
  objBodyParams = objBodyParams || {};
  objHeader = objHeader || {};
  let keys = Object.keys(objHeader);
  let type;
  for (let key of keys) {
    if (key.toLowerCase() === "content-type") {
      type = objHeader[key];
    }
  }
  keys = null;
  if (type === "application/json") {
    return JSON.stringify(objBodyParams, null, 0);
  } else if (type === "application/x-www-form-urlencoded") {
    return qs.stringify(objBodyParams, {
      encode: false
    });
  } else {
    return "";
  }
}

commBnsUniHttpRequest.bindAlias = function bindAlias(alias) {
  const isAndroid = plus && plus.os.name === 'Android';
  if (isAndroid) {
    const PushManager = plus.android.importClass("com.igexin.sdk.PushManager");
    const context = plus.android.runtimeMainActivity().getContext();
    const Instance = PushManager.getInstance();
    Instance.bindAlias(context, alias);
    console.log(context)
  } else {
    const GeTuiSdk = plus.ios.importClass("GeTuiSdk");
    GeTuiSdk.bindAliasandSequenceNum(alias, alias);
  }
}

function unbindAlias(alias) {
  const isAndroid = plus && plus.os.name === 'Android';
  if (isAndroid) {
    const PushManager = plus.android.importClass("com.igexin.sdk.PushManager");
    const context = plus.android.runtimeMainActivity().getContext();
    const Instance = PushManager.getInstance();
    Instance.unBindAlias(context, alias, true);
  } else {
    const GeTuiSdk = plus.ios.importClass("GeTuiSdk");
    GeTuiSdk.unbindAliasandSequenceNumandIsSelf(alias, alias, true);
  }
}

export default commBnsUniHttpRequest;
