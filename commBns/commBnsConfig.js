/************************************************************************************************************
 * 实现功能：针对系统中公共配置
 * 创    建：张洪波   2020年05月20日
 * 最近更新: 张洪波   2020年05月20日
 * 相关说明：
 * 附注说明：
 *************************************************************************************************************/

//针对业务的公共配置
var commBnsConfig = {
  // 当前环境基本配置
  baseCfg: {
    // 当前环境基本配置.环境类型:Product:生产环境,Dvlp:开发环境,Test:测试环境
    envirType: 'Product',
    // 当前环境中:默认strDefaultWebServerHost地址
    // strDefaultWebServerHost: 'api.pro.smartlab.vip',
    strDefaultWebServerHost: 'api.dev.smartlab.vip',
    
    //头像url
    // pictureUrl: 'https://dianzikancha-dev-user-avatar.obs.cn-south-1.myhuaweicloud.com/'
    pictureUrl: 'https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/'
  },
};

/**
 * 设置持久化数据到配置中，会自动保存到本地
 * @param {string} key 保存使用的键
 * @param {type} value 保存的值
 * @param {Boolean} override 如果原来有值，是否覆写原来的值，如果不覆写会返回失败
 * @return {Boolean} 保存是否成功
 */
commBnsConfig.FunSetPersistentData = function (key, value) {
  try {
    uni.setStorageSync(key, value);
  } catch (e) {
    return false;
  }
  return true;
}

/**
 * 获取持久化数据到配置中，先从配置中找，再从本地找并加到配置中
 * @param {string} key 键
 * @return {type} 对应的值，如果没有找到，模仿uni的，返回""
 */
commBnsConfig.FunGetPersistentData = function (key) {
  try {
    return uni.getStorageSync(key);
  } catch (e) {
    return "";
  }
}

/**
 * 移除一个持久化数据
 * @param {string} key 键
 */
commBnsConfig.FunRemovePersistentData = function (key) {
  try {
    uni.removeStorageSync(key);
  } catch (e) {
  }
}

commBnsConfig.funcGetCurEnvirCfg = function () {
  let envType = this.baseCfg.envirType;
  const config = {};
  envType = envType == null ? "Dvlp" : envType;
  // 当前Web请求配置
  const host = commBnsConfig.baseCfg.strDefaultWebServerHost || "localhost";
  switch (envType) {
    default:
    case "Dvlp":
      config.defaultUrl = `http://${host}:9036`;
      break;
    case "Product":
      config.defaultUrl = `https://${host}`;
      break;
    case "Test":
      config.defaultUrl = `http://${host}`;
      break;
  }
  return config;
};

export default commBnsConfig;
