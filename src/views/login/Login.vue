<template>
  <div id="login">
    <div class="loginBox" @click="changeImage(3)">
      <div class="auth-form">
        <div class="panfish">
          <img :src="imageURL" alt="" />
        </div>
        <!-- 关闭按钮 -->
        <van-icon name="close" class="closeButton" @click="close" size="0.6rem" />
        <van-tabs v-model="active">
          <van-tab title="登录">
            <!-- 账号密码登录 -->
            <van-cell-group>
              <van-field
                required
                clearable
                label="邮箱"
                maxlength="11"
                label-width="5em"
                @click.stop="changeImage(0)"
                :error-message="true ? '' : '手机号格式不正确'"
                placeholder="请输入邮箱"
              />
              <van-field
                type="password"
                label="密码"
                placeholder="请输入密码"
                label-width="5em"
                required
                @click.stop="changeImage(1)"
              />
              <van-field
                center
                clearable
                maxlength="4"
                placeholder="请输入验证码"
                label-width="5em"
              >
                <img
                  class="verificationImage"
                  src="http://demo.itlike.com/web/xlmc/api/captcha"
                  alt="captcha"
                  @click.prevent="getCaptcha"
                  ref="imgCaptcha"
                  slot="button"
                />
              </van-field>
              <!-- 手机号快捷登录 -->
            </van-cell-group>
            <van-button
              type="info"
              size="large"
              style="margin-top: 1rem"
              >登录</van-button
            >
          </van-tab>
          <!-- 注册 -->
          <van-tab title="注册">
            <van-cell-group>
              <van-field
                clearable
                label="邮箱"
                placeholder="请输入邮箱"
                label-width="5em"
                required
              />
              <van-field
                center
                clearable
                label="验证码"
                placeholder="请输入验证码"
                label-width="5em"
                required
              >
                <template #button>
                  <van-button
                    size="mini"
                    type="primary"
                    v-show="show"
                    @click="getCode"
                    >发送验证码</van-button
                  >
                  <van-button size="mini" type="primary" v-show="!show"
                    >{{ countDown }} s</van-button
                  >
                </template>
              </van-field>
              <van-field
                type="password"
                label="密码"
                placeholder="请输入密码(不少于6位)"
                label-width="5em"
                required
              />
            </van-cell-group>
            <van-button
              type="info"
              size="large"
              style="margin-top: 1rem"
              >注册</van-button
            >
          </van-tab>
        </van-tabs>

        <!-- 第三方登录 -->
        <van-divider
          :style="{
            color: '#1989fa',
            borderColor: '#1989fa',
            padding: '0 5px',
          }"
        >
          其他登录方式
        </van-divider>

        <van-grid :column-num="2" :border="false">
          <van-grid-item @click="thirdLogin(0)">
            <svg-icon icon-class="wechat" style="width:25px"/>
            <div class="title">微信登录</div>
          </van-grid-item>
          <van-grid-item @click="thirdLogin(1)">
            <svg-icon icon-class="QQ" style="width:25px" />
            <div class="title">QQ登录</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "login",
  data() {
    return {
      active: 0,
      imageURL: require("@/assets/images/login/normal.png"),
      show: true, //发送验证码按钮显示
      countDown: '', //倒计时
      timer: null, //验证码计时器
    };
  },
  computed: {
  
  },
  methods: {
    //发送验证码
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.countDown = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.countDown > 0 && this.countDown <= TIME_COUNT) {
            this.countDown--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    // 2.切换萌猫图片
    changeImage(index) {
      if (index == 0) {
        this.imageURL = require("@/assets/images/login/greeting.png");
      } else if (index == 1) {
        this.imageURL = require("@/assets/images/login/blindfold.png");
      } else {
        this.imageURL = require("@/assets/images/login/normal.png");
      }
    },


    // 3.账号密码登录切换图片验证码
    getCaptcha() {
      // 获取验证码的标签
      let captchaEle = this.$refs.imgCaptcha;
      this.$set(
        captchaEle,
        "src",
        "http://demo.itlike.com/web/xlmc/api/captcha?time=" + new Date()
      );
    },


    // 8.关闭
    close() {
      this.$router.back();
    },

    // 9.第三方登录
    thirdLogin(value) {
      if (value == 0) {
        this.$toast({
          type: "fail",
          message: "QQ登录暂未实现",
          duration: 800,
        });
      } else {
        this.$toast({
          type: "fail",
          message: "微信登录暂未实现",
          duration: 800,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("~assets/images/login/back2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .loginBox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    opacity: 0.95;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    .auth-form {
      position: relative;
      padding: 1rem;
      width: 26.5rem;
      max-width: 90%;
      font-size: 1.167rem;
      background-color: #fff;
      border-radius: 8px;
      box-sizing: border-box;
    }
    img {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      width: 2rem;
      transform: translate(-50%, -70%);
      z-index: 1;
    }
    .closeButton {
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
    }
    .verificationImage {
      position: absolute;
      right: 0;
      width: 4rem;
      height: 1.5rem;
      margin-left: 2rem;
    }
    .switchLogin {
      margin-top: 1rem;
      font-size: 0.78rem;
    }
  }
}
.title {
  padding: 0.1rem;
  font-size: 0.3rem;
  color: grey;
}
</style>
