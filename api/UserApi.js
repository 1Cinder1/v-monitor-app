/**
 * @description: 用户模块Api
 * @author     : orangeboy
 * @author     : 彭坤(修改接口3.1.10，3.1.12)
 * @date       : 2021/7/2 18:06
 */

import commBnsUniHttpRequest from "@/commBns/commBnsUniHttpRequest";
import commBnsConfig from "@/commBns/commBnsConfig.js"

import uuid from "uuid"
const Base64 = require("js-base64").Base64;

/**
 * 3.1.1.1 电话号码密码登陆
 * @param {string} phone 已注册手机号
 * @param {string} password 密码
 * @param {string} appKey appKey
 * @returns {Promise}
 */
function signInWithPassword(phone, password, appKey=uuid.v4()) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithPost(
            '/user/signin/password',
            {
                appKey,
                phone,
                password
            },
            {
                Authorization:
                    "Basic" + " " + Base64.encode('app' + ':' + 'password'),
            });
}

/**
 * 3.1.1.2 电话号码验证码登陆
 * @param {string} phone 已注册手机号
 * @param {string} captcha 验证码
 * @param {string} smsId 验证码id
 * @param {string} appKey appKey
 * @returns {Promise}
 */
function signInWithCaptcha(phone, captcha, smsId, appKey=uuid.v4()) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithPost(
            '/user/signin/captcha',
            {
                phone,
                captcha,
                smsId,
                appKey
            },
            {
                Authorization:
                    "Basic" + " " + Base64.encode('app' + ':' + 'password'),
            }
        );
}

/**
 * 3.1.1.3 使用refreshToken重新登陆
 * @param {string} refreshToken refresh_token
 * @param {string} appKey appKey
 * @returns {Promise}
 */
function signInWithRefreshToken(refreshToken, appKey) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/signin/refresh',
        {
            refreshToken,
            appKey
        }
    );
}

/**
 * 注册用户，不需要token
 * @param {*} name 
 * @param {*} phone 
 * @param {*} captcha 
 * @param {*} smsId 
 * @returns 
 */
function addUser(name, phone, captcha, smsId) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithPost('/user/signin/addUser', {
            name, phone, captcha, smsId
        });
}

/**
 * 3.1.2 重置密码
 * @param {string} phone 已注册手机号
 * @param {string} password 新密码
 * @param {string} captcha 验证码
 * @param {string} smsId 验证码ID
 * @returns {Promise}
 */
function forgetPassword(phone, password, captcha, smsId) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithPost('/user/signin/forget', {
            phone,
            password,
            captcha,
            smsId
        });
}

/**
 * 3.1.3 获取验证码
 * @param {string} phone 手机号
 * @returns {Promise}
 */
function getCaptcha(email) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithGet(
            "/uaa/signup/send/emailcode?email=${email}"
        );
}

/**
 * 3.1.3.1 新手机号获取验证码
 * @param {string} phone 手机号
 * @returns {Promise}
 */
 function getCaptchaToNewPhone(phone) {
    return commBnsUniHttpRequest
        .FuncBnsHttpRequestWithGet(
            "/sms/captchaToNewPhone",
            {
                phone
            },
            {
                'Content-Type': 'application/json',
                Authorization:
                    'Basic' + ' ' + Base64.encode('app' + ':' + 'password')
            }
        );
}

/**
 * 3.1.4 本人修改密码
 * @param {string} oldPassword 原始密码
 * @param {string} newPassword 新密码
 * @returns {Promise}
 */
function modifyPassword(oldPassword, newPassword){
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPut(
        '/user/info/password',
        {
            oldPassword,
            newPassword
        }
    );
}

/**
 * 3.1.4.1 超级管理员重置密码
 * @param {string} userId 用户id
 * @returns {Promise}
 */
 function forgetPsdByAdmin(userId){
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/info/forgetByAdmin',
        {
            userId
        }
    );
}
/**
 * 3.1.1.4 注销账号
 * @param {string} userId 用户id
 * @returns {Promise}
 */
 function deleteUser(userId){
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
         `/user/signin/logout/${userId}`
    );
}
/**
 * 3.1.5 本人修改手机号码
 * @param {string} password 密码
 * @param {string} newPhone 新手机号
 * @param {string} captcha 新手机号验证码
 * @param {string} smsId 验证码id
 * @returns {Promise}
 */
function modifyPhone(password, newPhone, captcha, smsId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/info/phoneChange',
        {
            password,
            newPhone,
            captcha,
            smsId
        }
    );
}

/**
 * 3.1.5.1 超级管理员修改手机号码
 * @param {number} userId 用户id
 * @param {string} newPhone 新手机号
 * @returns {Promise}
 */
 function modifyPhoneByAdmin(userId, newPhone) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/info/phoneByAdmin',
        {
            userId,
            newPhone
        }
    );
}

/**
 * 3.1.6 查询用户详细信息
 * @param {number} uid 查询的用户id
 * @returns {Promise}
 */
function getUserInfo(uid) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        `/user/${uid}/info`
    );
}

/**
 * 3.1.6.1 通过电话号码与姓名来查询用户详细信息
 * @param {string} phoneNum 查询的用户的电话号码
 * @param {string} name 查询用户的姓名
 * @param {number} projectId 项目id
 * @returns {Promise}
 */
function getInfoByPhone(phoneNum, name, projectId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/getInfoByPhone',
        {
            phone_num: phoneNum,
            name,
            project_id: projectId
        }
    );
}

/**
 * 3.1.7 查询用户拥有角色
 * @param {number} uid 查询的用户id
 * @returns {Promise}
 */
function getUserRoles(uid) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        `/user/${uid}/roles`
    );
}

/**
 * 3.1.9 禁用/启用成员
 * @param {number} uid 成员ID
 * @param {number} operation 0：禁用 1：启用
 * @returns {Promise}
 */
function enableOrDisableUser(uid, operation) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPut(
        `/user/${uid}/ban?operation=${operation}`
    );
}

/**
 * 3.1.10 增加用户
 * @param {string} name 姓名
 * @param {string} phone 电话
 * @param {number} role 角色id，不给默认为普通角色
 * @param {number} type 用户类型0：甲方 1：乙方 2:丙方
 * @param {string} affiliation 用户单位
 * @param {number} projectId 乙方用户创建用户必须携带当前项目id，用来判断交给谁审核用户
 * @returns {Promise}
 */
function createUser(name, phone, role, type, affiliation, projectId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/',
        {
            name,
            phone,
            role,
            type,
            affiliation,
            projectId
        },
        {},
        true
    );
}

/**
 * 3.1.11 本人修改姓名
 * @param {string} name 新的姓名
 * @returns {Promise}
 */
function modifyName(name) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPut(
        '/user/info/name',
        {
            name
        }
    );
}


/**
 * 3.1.12 条件查询用户
 * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)
 * @param {string} affiliation 用户单位，模糊查询
 * @param {number} type 用户类型 0：甲方1：乙方 2：丙方
 * @param {number} banned 用户是否离职 0：否1：是
 * @param {number} roleId 用户角色id，有值表示需要限制查询的用户的角色
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function queryUser(keyword, affiliation, type, banned, roleId, pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/query',
        {
            keyword,
            affiliation,
            type,
            banned,
            roleId,
            pageNum,
            pageSize
        }
    );
}

/**
 * 3.1.13 查询角色id和角色名字对应关系
 * @returns {Promise}
 */
function getRoleList() {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/rolelist'
    );
}

/**
 * 3.1.14 修改他人信息
 * @param {number} userId 被修改的用户的id
 * @param {string} name 新的姓名
 * @param {string} affiliation 新的单位
 * @param {number} type 新的用户类型0：甲方 1：乙方
 * @returns {Promise}
 */
function modifyOthersInfo(userId, name, affiliation, type) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPut(
        `/user/${userId}/info`,
        {
            name,
            affiliation,
            type
        },
        {},
        true
    );
}

/**
 * 3.1.15 获取用户头像
 * 用户头像会保存到华为云上，使用固定格式的url就可以获取到用户头像数据,图片都是在上传时后端转成了jpg格式。
 * @param {number} uid 用户id
 * @param {boolean} isOriginal 是否获取原图，选择false则返回缩略图地址
 * @returns {string} 对应的头像地址
 */
function getUserAvatarUrl(uid, isOriginal = true) {
    // return isOriginal ? `https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/${uid}.jpg` :
    //     `https://dianzikancha-user-avatar.obs.cn-south-1.myhuaweicloud.com/${uid}.jpg?x-image-process=style/thumbnail`;
    return isOriginal ? commBnsConfig.baseCfg.pictureUrl + `${uid}.jpg` : commBnsConfig.baseCfg.pictureUrl + `${uid}.jpg?x-image-process=style/thumbnail`;
}

/**
 * 3.1.16 设置用户头像
 * @param {number} userId 用户id
 * @param {Blob} avatar 头像二进制数据，如果不传值或者不设置这个参数，就会删除头像数据
 * @returns {Promise}
 */
function setUserAvatar(userId, avatar) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPostFormDataAndUrlParams(
        `/user/${userId}/avatar`,
        {},
        {
            avatar
        }
    );
}

/**
 * 3.1.17 移除用户角色
 * @param {number} userId 用户id
 * @param {number} role 新的角色的id
 * @returns {Promise}
 */
function removeUserRole(userId, role) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithDelete(
        `/user/${userId}/role`,
        {
            role
        }
    );
}

/**
 * 3.1.18 增加用户角色
 * @param {number} userId 用户id
 * @param {number} role 新的角色的id
 * @returns {Promise}
 */
function createUserRole(userId, role) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPut(
        `/user/${userId}/role`,
        {
            role
        }
    );
}

/**
 * 3.1.19 查询所有自己创建角色能分配的单位
 * @param {string} keyword 关键字，乙方用户查无效
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function getAffiliationList(keyword, pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/affiliationlist',
        {
            keyword,
            pageNum,
            pageSize
        }
    );
}

/**
 * 3.1.20 审核用户创建
 * @param {number} reviewId 用户审核id
 * @param {number} pass 是否通过0：不通过，删除用户，1：通过
 * @returns {Promise}
 */
function reviewNewUser(reviewId, pass) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/user/review',
        {
            reviewId,
            pass
        }
    );
}

/**
 * 3.1.21 查询等待审核的用户
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function getReviewList(pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/reviewlist',
        {
            pageNum,
            pageSize
        }
    );
}

/**
 * 3.1.22 获取通知详情
 * @param {number} noticeId 通知id
 * @returns {Promise}
 */
function getNoticeDetail(noticeId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        `/notice/${noticeId}/info`
    );
}

/**
 * 3.1.23 获取所有通知
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function getAllNotice(pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/notice/all',
        {
            pageNum,
            pageSize
        }
    );
}

/**
 * 删除通知
 * @param {number} noticeId  
 */
function deleteNotice(noticeId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
       '/notice/delete',
       {
         noticeId
       }
  );
}

/**
 * 3.1.24 获取没有看过的通知的数量
 * @returns {Promise}
 */
function getUnreadNoticeCount() {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/notice/count'
    );
}

/**
 * 3.1.24.1 一键读取所有通知(清除小红点)
 * @returns {Promise}
 */
function readAllNotice() {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPost(
        '/notice/readAll'
    );
}

/**
 * 3.1.25 查询用户的审核状态
 * @param {number} reviewId 用户审核id
 * @returns {Promise}
 */
function getReviewStatus(reviewId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        `/user/review/${reviewId}/status`
    );
}

/**
 * 3.1.26 查询可以被选择的项目成员/项目经理(甲方)
 * @param {number} projectId 项目id
 * @param {number} job 0:查询经理1:查询成员，默认为1
 * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function queryAlternativeProjectMember(projectId, job, keyword, pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/query/projectmember',
        {
            projectId,
            job,
            keyword,
            pageNum,
            pageSize
        }
    );
}

/**
 * 3.1.27 查询可以被选择的钻探编录/钻探负责人(乙方)
 * @param {number} drillId 钻孔id
 * @param {string} keyword 查询关键词，同时匹配 用户姓名(模糊匹配) 用户电话号码(模糊匹配)
 * @param {number} job 0:查询负责人1:查询编录，默认为1
 * @param {number} pageNum 要获取的页
 * @param {number} pageSize 每页最大个数
 * @returns {Promise}
 */
function queryAlternativeDrillMember(drillId, keyword, job, pageNum, pageSize) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/query/drillmember',
        {
            drillId,
            keyword,
            job,
            pageNum,
            pageSize
        }
    );
}

/**
 * 3.1.28 导入用户
 * @param {Blob} excel 导入信息，只有第一个sheet有效
 * @returns {Promise}
 */
function importUser(excel) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPostFormDataAndUrlParams(
        '/user/import',
        {},
        {
            excel
        }
    );
}

/**
 * 3.1.29 获取导入/创建结果
 * @param {string} resultCode 导入用户之后返回的结果码
 * @returns {Promise}
 */
function getImportResult(resultCode) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        '/user/import/result',
        {
            resultCode
        }
    )
}

/**
 * 3.1.30 设置用户个人电子签名
 * @param {Blob} image 电子签名图片
 * @returns {Promise}
 */
function setSignature(image) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithPostFormDataAndUrlParams(
        '/user/signature',
        {},
        {
            image
        }
    );
}

/**
 * 3.1.31 获取用户个人电子签名的url
 * @param {number} userId 用户id
 * @returns {Promise}
 */
function getSignatureUrl(userId) {
    return commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
        `/user/${userId}/signature`
    );
}


export default {
    signInWithPassword,
    signInWithCaptcha,
    signInWithRefreshToken,
    addUser,
    forgetPassword,
    getCaptcha,
    getCaptchaToNewPhone,
    modifyPassword,
    forgetPsdByAdmin,
    modifyPhone,
    modifyPhoneByAdmin,
    getUserInfo,
    getInfoByPhone,
    getUserRoles,
    enableOrDisableUser,
    createUser,
    modifyName,
    queryUser,
    getRoleList,
    modifyOthersInfo,
    getUserAvatarUrl,
    setUserAvatar,
    removeUserRole,
    createUserRole,
    getAffiliationList,
    reviewNewUser,
    getReviewList,
    getNoticeDetail,
    getAllNotice,
    getUnreadNoticeCount,
    readAllNotice,
    getReviewStatus,
    queryAlternativeProjectMember,
    queryAlternativeDrillMember,
    importUser,
    getImportResult,
    setSignature,
    getSignatureUrl,
    deleteNotice,
    deleteUser
}
