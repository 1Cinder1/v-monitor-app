<!--
 * 实现功能：忘记密码功能
 * 创    建：陈飞羽   2022年04月18日
 * 相关说明：
 * 附注说明：
-->
<template>  
  <view>
    <view class="background1"></view>
    <view class="background2"></view>
    <view class="background3"></view>
    <view class="background4"></view>
    <view class="background5"></view>
    <view class="back_button">
      <image src="../../../static/image/login/left_arrow.png" @click="back()">
      </image> 
    </view>
    <view class="content">
      <view class="title">
        <text>忘记密码</text>
      </view>
    </view>
   <view class="content-input">
    <!-- 账号输入 -->
    <view class="phone-input">
      <view class="icon-input">
        <image src="/static/image/login/user.svg"></image>
      </view>
      <input class="placeholder" v-model="phone" type="number" placeholder="请输入手机号" />
    </view>
    <!-- 密码输入 -->
    <view class="message-send">
        <view class="message-input">
          <view class="icon-input">
            <image src="/static/image/login/mail.svg"></image>
          </view>
          <input class="placeholder-message" v-model="captcha" placeholder="请输入验证码" />
        </view>
        <view class="message-btn">
          <button class="message-sender" @click="getVerify()" :disabled="disabled">{{send}}</button>
        </view>
      </view>
<!--    验证码输入 -->
    <view  class="password-input">
      <view class="icon-input-lock">
        <image src="/static/image/login/lock.svg"></image>
      </view>
      <input class="placeholder" :password="showPassword" v-model="password" placeholder="请输入您的新密码" />
      <image class="icon-eye" :src="showEye"  @click="changePassword">
      </image>
    </view>    <view  class="password-input">
      <view class="icon-input-lock">
        <image src="/static/image/login/lock.svg"></image>
      </view>
      <input class="placeholder" :password="showPassword" v-model="renew" placeholder="请再次输入您的新密码" />
      <image class="icon-eye" :src="showEye"  @click="changePassword">
      </image>
    </view>
    <view class="send-btn">
      <button class="message-sender" @click="toLogin()">确认</button>
    </view>
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
  
  export default{
    data(){
      return{
        smsId:'55896351646',
        
        send: '发送验证码',
        disabled: false,
        showPassword: true,
        //控制密码是否可见
        captcha: '',
        phone: '',
        password: '',
        renew: '',
        //输入内容
        showEye: '/static/image/login/eye.svg'
      }
    },
    
    methods: {
      back(){
        uni.navigateBack({})
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
        let that = this
        console.log(this.phone)
        let [res, err] = await UserApi.getCaptcha(this.phone)
        console.log(res)
        if(res)
        {
          if (res.data.success == 1) {
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
        }
        if(err){
          console.log(err)
          uni.showToast({
          	icon: 'none',
          	title: '网络错误'
          })
          return
        }
        
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
      }, //验证码
      
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
      async toLogin(){
        if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
          uni.showToast({
            icon: 'none',
            title: '手机号格式错误',
          })
          return
        }
        if (this.phone <= 0) {
          uni.showToast({
            icon: 'none',
            title: '请输入手机号'
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
        if(this.password <= 0){
        	uni.showToast({
        		icon: 'none',
        		title: '请输入新密码'
        	})
        	return
        }
        if(this.renew <= 0){
        	uni.showToast({
        		icon: 'none',
        		title: '请再次输入密码'
        	})
        	return
        }
       
        if(!(/^(?=.*[a-z])(?=.*[0-9])(?=.*[~!@&%#_])[a-zA-Z0-9~!@&%#_]{6,16}$/.test(this.$data.password)))
        {
        	uni.showToast({
        	 icon: 'none',
        	 title: '新密码必须包含特殊字符，数字和字母并且为6-16位'
        	})
        	return
        }
        if(this.$data.password != this.$data.renew)
        {
        	uni.showToast({
        	 icon: 'none',
        	 title: '两次输入密码不一致'
        	})
        	return
        }
        
        let that = this
        console.log(this.phone + '' + this.password + '' + this.captcha + '' + this.smsId)
        let [res, err] = await UserApi.forgetPassword(this.phone, this.password, this.captcha, this.smsId)
        console.log(res)
        if (res.data.success == 1) {
        			uni.showToast({
        				title: '密码已重置',
        				duration: 2000
        			})
        			setTimeout(function(){
        				uni.navigateBack({ delta: 1 })
        			},1000)
          }
        else {
          uni.showToast({
          	 icon: 'none',
          	title: '验证码错误',
          	duration: 2000
          })
        }
    }
    }
  }
</script>

<style lang="scss">
  page{
    overflow: hidden;
  }
  
  .content {
    margin-top: 140upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .title {
    font-size: 50rpx;
    color: #37364A;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: bolder;
    margin-bottom:37rpx;
    margin-left: 60rpx;
    margin-top:-32rpx;
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
    height: 50%;
    width: 50%;
  }
  
  .icon-input-lock {
    width: 100upx;
    height: 100upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 60upx;
    color: #747688;
    margin-left: 10upx;
  }
  
  .icon-input-lock image {
    height: 60%;
    width: 60%;
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
  
  .content-input {
    margin-top: 5upx;
    height: 900upx;
    margin-left: 60upx;
    margin-right: 60upx;
    display: flex;
    flex-direction: column;
  }
  
  .phone-input {
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
    .placeholder{
      font-family: 'PingFang SC';
      font-style: normal;
      font-weight: 400;
      font-size: 32upx;
      line-height: 42upx;
      margin-left: 12upx;
    }
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
    .icon-input{
      height: 70%;
      width: 70%;
    }
  }
  
  .message-btn {
    display: flex;
    width: 380upx;
    margin-left: 10upx;
    margin-top: 50upx;
    align-items: center;
  }
  
  .message-send {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  
  .message-sender {
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: bolder;
    line-height: 100upx;
    font-size: 32 upx;
    letter-spacing: 2upx;
    color: #FFFFFF;
    background: #5669FF;
    box-shadow: 0upx 20upx 70upx rgba(111, 126, 201, 0.25);
    border-radius: 30upx;
  }
  
  .send-btn{
    margin-top: 120upx;
    margin-left: 30rpx;
    margin-right: 30rpx;
    background-color: $uni-primary;
    height: 100rpx;
    color: white;
    box-shadow: 0upx 20upx 70upx rgba(111, 126, 201, 0.25);
    border-radius: 30upx;
    font-size: 30rpx;
    line-height: 100rpx;
  }
  
  .back_button image{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100upx;
    margin-left: 60upx;
    width: 60upx;
    height: 60upx;
    font-size: 30upx;
    color: #747688;
  }
</style>