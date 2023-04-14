<!--
 * 实现功能：登录页面优化
 * 创    建：陈韬宇   2022年04月01日
 * 相关说明：
 * 附注说明：
-->
<template>
  <view>
    <!-- 背景填充物 -->
    <view class="background1"></view>
    <view class="background2"></view>
    <view class="background3"></view>
    <view class="background4"></view>
    <view class="background5"></view>
    <view class="content">
      <view>
        <image mode="widthFix" class="logo" src="/static/image/login/logo.svg"></image>
      </view>
      <view class="title">
        <text>智能勘探管理系统</text>
      </view>
    </view>
    <view class="uni-row">
      <view class="bottom-right">
        <text :class="[wayOfLogin ? 'txt' : 'txt-active' ]" @click="toLogin()">密码登录</text>
      </view>
      <view class="bottom-left">
        <text :class="[wayOfLogin ? 'txt-active' : 'txt' ]" @click="toLoginCaptcha()">验证码登录</text>
      </view>
    </view>
    <view class="content-input">
      <!-- 账号输入 -->
      <view class="user-input">
        <view class="icon-input">
          <image src="/static/image/login/user.svg"></image>
        </view>
        <input class="placeholder" v-model="phone" type="number" placeholder="请输入账号" />
      </view>
      <!-- 密码输入 -->
      <view v-if="wayOfLogin==false" class="password-input">
        <view class="icon-input">
          <image src="/static/image/login/lock.svg"></image>
        </view>
        <input class="placeholder" cursor-spacing="10" :password="showPassword" v-model="password" placeholder="密码" />
        <image class="icon-eye" :src="showEye"  @click="changePassword">
        </image>
      </view>
      <!-- 验证码输入 -->
      <view v-else class="message-send">
        <view class="message-input">
          <view class="icon-input-message">
            <image src="/static/image/login/mail.svg"></image>
          </view>
          <input class="placeholder-message" v-model="captcha" placeholder="请输入验证码" />
        </view>
        <view class="message-btn">
          <button class="message-sender" @click="getVerify()" :disabled="disabled">{{send}}</button>
        </view>
      </view>
    </view>
    <view class="uni-row">
      <view class="bottom-right">
        <switch @change="switchChange" checked="true" color="#5669FF"></switch>
        <text>记住我</text>
      </view>
      <view class="bottom-left">
        <text class="txt2" @click="pswforget()">忘记密码</text>
        <!-- 注册 -->
        <text class="txt2" style="margin-left: 40rpx" @click="toRegister()">注册</text>
      </view>
    </view>
    <view>
      <button class="btn" @tap="bindLogin">登 录</button>
    </view>
    <view class="yinsi">
      <checkbox-group @change="checkboxChange">
        <label>
          <checkbox value="1" :checked="checkFlag" color="#FFCC33" style="transform:scale(0.7)"><span
              @click="goToPrivacy">我已同意智能勘探隐私政策</span></checkbox>
        </label>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
  //针对当前Http请求公共方法调用
  import commBnsUniHttpRequest from '@/commBns/commBnsUniHttpRequest.js'

  //环境配置变量
  import commBnsConfig from '@/commBns/commBnsConfig.js'

  // 引入登录api
  import UserApi from '@/api/UserApi.js'

  var curEnvirCfg = commBnsConfig.funcGetCurEnvirCfg()
  export default {
    data() {
      return {
        showPassword: true,
        wayOfLogin: false, //false:密码登录,true:验证码登录
        phone: '',
        password: '',
        captcha: '',
        //用于接收response信息
        code: 0,
        message: '',
        success: 0,
        successful: false,
        uid: 0,
        send: '发送验证码',
        smsId: '55896351646',
        disabled: false,
        rememberFlag: true,
        checkFlag: true,
        showEye: '../../../static/image/login/eye.svg'
      }
    },
    mounted() {
      let that = this
      const usertel = uni.getStorageSync('usertel')
      if (usertel) {
        that.phone = usertel
      } else {
        that.phone = ''
      }
    },
    methods: {
      async getuserinfo() {
        //localhost
        let that = this
        let strWebServicePath = '/user/' + that.uid + '/info'
        //采用简易的方式进行处理
        let [res, err] = await commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(strWebServicePath, {}, {})
        getApp().globalData.globaType = res.data.data.type
        console.log(getApp().globalData.globaType);
        commBnsConfig.FunSetPersistentData('userType', res.data.data.type) //保存用户角色信息
      },
      changePassword: function() {
        this.showPassword = !this.showPassword    
        if (!this.showPassword)
        {
          this.showEye = '/static/image/login/eye_open.svg'
        }
        else
        {
          this.showEye = '/static/image/login/eye.svg'
        }
      },
      async getVerify() {
        if (this.phone <= 0) {
          uni.showToast({
            icon: 'none',
            title: '请输入手机号'
          })
          return
        }
        if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
          uni.showToast({
            icon: 'none',
            title: '手机号格式错误'
          })
          return
        }
        //post获取验证码
        var that = this
        var strWebServicePath = '/sms/captcha?phone=' + this.phone + '&appKey=128safa12-1bs18w1c-12bd81js'
        let [res, err] = await commBnsUniHttpRequest.FuncBnsHttpRequestWithGet(
          strWebServicePath, {}, { 'Authorization': 'Basic YXBwOnBhc3N3b3Jk' }
        )
        console.log(res)
        if (res.data.success === 1) {
          that.smsId = res.data.data.smsId
          uni.showToast({
            icon: 'none',
            title: '已发送',
            duration: 2000
          })
        } else {
          uni.showToast({
            icon: 'none',
            title: res.data.message,
            duration: 2000
          })
        }
        //发送验证码
        let self = this
        //验证码
        self.disabled = true
        var time = 60 //时间为60s，可以按情况更改 
        var timer = setInterval(fun, 1000) //设置定时器 
        function fun() {
          time--
          if (time >= 0) {
            self.send = time + 's后重新发送'
          } else if (time < 0) {
            self.send = '重新发送验证码'
            self.disabled = false //倒计时结束能够重新点击发送的按钮 
            clearInterval(timer) //清除定时器 
            time = 60 //设置循环重新开始条件 
          }
        }
      },
      pswforget() {
        uni.navigateTo({ url: '../password/password' })
      },
      toLogin() {
        this.wayOfLogin = false
      },
      toLoginCaptcha() {
        this.wayOfLogin = true
        // uni.navigateTo({
        // 	url:'./login-captcha/login-captcha'
        // });
      },
      checkboxChange: function(e) {
        console.log(e.detail.value)
        if (e.detail.value == '') {
          this.checkFlag = false
        } else {
          this.checkFlag = true
        }
        console.log(this.checkFlag)
      },
      goToPrivacy() {
        console.log('跳转')
        plus.runtime.openURL('https://www.smartlab.vip/privacypolicy/index.html')
      },
      switchChange(e) {
        this.rememberFlag = e.detail.value
      },

      //登陆函数(验证码)
      async bindLoginWithCode() {
        if (this.phone <= 0) {
          uni.showToast({
            icon: 'none',
            title: '请输入手机号'
          })
          return
        }
        if (this.checkFlag !== true) {
          uni.showToast({
            icon: 'none',
            title: '未勾选隐私政策'
          })
          return
        }
        if (this.captcha <= 0) {
          uni.showToast({
            icon: 'none',
            title: '请输入验证码'
          })
          return
        }
        //post信息到后端
        var that = this
        console.log(this.phone + '' + this.captcha + '' + this.smsId)
        let [res, err] = await UserApi.signInWithCaptcha(this.phone, this.captcha, this.smsId)
        console.log(res)
        console.log(res.data.data.success)
        if (res.data.success == 1) {
          uni.showTabBar()
          console.log(res.data.data.uid)
          that.uid = res.data.data.uid
          commBnsConfig.FunSetPersistentData('signinData', res.data.data) //保存会话信息
          // 绑定uniapp cid和uid 用于消息推送
          console.log(plus.push.getClientInfo().clientid)
          commBnsUniHttpRequest.bindAlias(res.data.data.uid.toString());
          await that.getuserinfo()
          if (this.rememberFlag) {
            uni.setStorageSync('usertel', that.phone) //记住上次登录账号
          }
          uni.reLaunch({ url: '../../project-list/ProjectList' })
        } else {
          uni.showToast({
            icon: 'none',
            title: res.data.message
          })
        }
      },
      async bindLogin() {
        // plus.push.getClientInfoAsync((info) => {  
        //      let cid = info["clientid"];  
        //      console.log(cid)
        // });
        
        if (this.wayOfLogin) {
          this.bindLoginWithCode()
        } else {
          if (this.phone <= 0) {
            uni.showToast({
              icon: 'none',
              title: '请输入手机号'
            })
            return
          }
          if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
            uni.showToast({
              icon: 'none',
              title: '手机号格式错误',
            })
            flag = false
            return
          }
          if (this.password <= 0) {
            uni.showToast({
              icon: 'none',
              title: '请输入密码'
            })
            return
          }
          if (this.checkFlag !== true) {
            uni.showToast({
              icon: 'none',
              title: '未勾选隐私政策'
            })
            return
          }
          this.password = this.password.trim()
          //post 获取信息
          let that = this
          let [res, err] = await UserApi.signInWithPassword(
            that.phone,
            that.password)
          console.log(res)
          if (err) {
            console.log(err)
          }
          if (res.data.success === 0) {
            if (res.data.message === 'Bad credentials') {
              uni.showToast({
                icon: 'none',
                title: '用户名或密码错误'
              })
            } else if (res.data.message === 'User is disabled') {
              uni.showToast({
                icon: 'none',
                title: '用户被禁止'
              })
            } else {
              uni.showToast({
                icon: 'none',
                title: res.data.message
              })
            }
          } else if (res.data.success === 1) {
            console.log(res)
            commBnsConfig.FunSetPersistentData('signinData', res.data.data) //保存会话信息
            // 绑定uniapp cid和uid 用于消息推送
            commBnsUniHttpRequest.bindAlias(res.data.data.uid.toString())
            //记住我
            console.log(this.rememberFlag)
            if (this.rememberFlag) {
              uni.setStorageSync('usertel', that.phone) //记住上次登录账号
            }
            that.uid = res.data.data.uid
            await that.getuserinfo()
            uni.reLaunch({ url: '../../project-list/ProjectList' })
          }
        }
      },

      // 注册，暂时
      toRegister() {
        uni.navigateTo({ url: '../register/register' })
      }
    },
  }
</script>

<style lang="scss">
  page {
    overflow-x: auto;
  }

  .content {
    margin-top: 80upx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-input {
    margin-top: 5upx;
    height: 380upx;
    margin-left: 60upx;
    margin-right: 60upx;
    display: flex;
    flex-direction: column;
  }

  .background1 {
    position: fixed;
    z-index: -100;
    width: 400upx;
    height: 400upx;
    left: 400upx;
    top: -150upx;
    background: conic-gradient(from 180deg at 50% 50%, #B9DAFB 0deg, #9895EE 0.04deg, #C55492 0.07deg, #ECACAD 95.99deg, #B9DAFB 360deg);
    opacity: 0.7;
    filter: blur(200upx);
  }

  .background2 {
    position: fixed;
    z-index: -100;
    width: 380upx;
    height: 380upx;
    left: -108upx;
    top: 0upx;
    background: conic-gradient(from 180deg at 50% 50%, #B9DAFB 0deg, #9895EE 285deg, #ECACAD 359.96deg, #C55492 360deg);
    opacity: 0.5;
    filter: blur(200upx);
  }

  .background3 {
    position: fixed;
    z-index: -100;
    width: 480upx;
    height: 400upx;
    left: 340upx;
    top: 680upx;
    background: conic-gradient(from 180deg at 50% 50%, #B9DAFB 0deg, #9895EE 0.04deg, #C55492 0.07deg, #ECACAD 95.99deg, #B9DAFB 360deg);
    opacity: 0.7;
    filter: blur(200upx);
  }

  .background4 {
    position: fixed;
    z-index: -100;
    width: 700upx;
    height: 644upx;
    left: 720upx;
    top: 1000upx;
    background: conic-gradient(from 180deg at 50% 50%, #B9DAFB 0deg, #ECACAD 95.99deg, #9895EE 206.25deg, #90A2F8 292.5deg, #C55492 360deg);
    opacity: 0.5;
    filter: blur(200upx);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .background5 {
    position: fixed;
    z-index: -100;
    width: 360upx;
    height: 340upx;
    left: -200upx;
    top: 1400upx;
    background: conic-gradient(from 180deg at 50% 50%, #B9CBFB 0deg, #ECACAD 95.99deg, #9895EE 112.5deg, #C55492 196.87deg, #90A2F8 292.5deg, #B9CBFB 360deg);
    opacity: 0.4;
    filter: blur(200upx);
  }

  .txt-active {
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: bolder;
    font-size: 48upx;
    color: #120D26;
    color: #120D26;
    border-bottom: #5669FF 10upx solid;
  }

  .txt {
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: 400;
    font-size: 38upx;
  }

  .icon-input {
    width: 100upx;
    height: 100upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 60upx;
    color: #747688;
  }

  .icon-input image {
    height: 60%;
    width: 60%;
  }

  .icon-input-message {
    width: 80upx;
    height: 60upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 40upx;
    color: #747688;
  }

  .icon-input-message image {
    height: 70%;
    width: 90%;
  }


  .placeholder {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 32upx;
    line-height: 42upx;
  }

  .placeholder-message {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 30upx;
    padding-left: 10upx;
    line-height: 43upx;
  }

  .user-input {
    box-sizing: border-box;
    border-radius: 24upx;
    display: flex;
    align-items: center;
    padding-left: 20upx;
    margin-right: 10upx;
    margin-top: 40upx;
    height: 120upx;
    border: 4upx #E4DFDF solid;
  }

  .password-input {
    box-sizing: border-box;
    border-radius: 24upx;
    display: flex;
    align-items: center;
    padding-left: 20upx;
    margin-right: 10upx;
    margin-top: 50upx;
    height: 120upx;
    border: 4upx #E4DFDF solid;
  }

  .message-send {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .message-sender {
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: bolder;
    line-height: 100upx;
    font-size: 32upx;
    letter-spacing: 2upx;
    color: #FFFFFF;
    background: #5669FF;
    box-shadow: 0upx 20upx 70upx rgba(111, 126, 201, 0.25);
    border-radius: 30upx;
  }

  .message-input {
    box-sizing: border-box;
    border-radius: 24upx;
    display: flex;
    align-items: center;
    padding-left: 15upx;
    width: 400upx;
    margin-top: 50upx;
    height: 120upx;
    border: 4upx #E4DFDF solid;
  }

  .message-btn {
    display: flex;
    width: 380upx;
    margin-left: 10upx;
    margin-top: 50upx;
    align-items: center;
  }

  .icon-eye {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 30upx;
    width: 60upx;
    height: 60upx;
    font-size: 40upx;
    color: #747688;
  }

  .yinsi {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .logo {
    margin-top: 50upx;
    width: 240upx;
  }

  .title {
    font-size: 50rpx;
    color: #37364A;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: bolder;
    margin-bottom: 70rpx;
  }

  .uni-row {
    display: flex;
    flex-direction: row;
    margin-left: 60rpx;
    margin-right: 60rpx;
    height: 80rpx;
    /* margin-bottom: 80upx; */
  }

  .uni-eye-active {
    color: #007AFF;
  }

  .btn {
    margin-top: 80rpx;
    margin-bottom: 15rpx;
    background-color: $uni-primary;
    margin-left: 90rpx;
    margin-right: 90rpx;
    height: 100rpx;
    color: white;
    box-shadow: 0upx 20upx 70upx rgba(111, 126, 201, 0.25);
    border-radius: 30upx;
    font-size: 30rpx;
    line-height: 100rpx;
  }

  .txt2 {
    font-size: 30rpx;
    color: #5669FF;
  }

  .bottom-right {
    width: 50%;
    text-align: left;
  }

  .bottom-left {
    width: 50%;
    text-align: right;
  }
</style>
