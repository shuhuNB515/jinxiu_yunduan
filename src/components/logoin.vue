<script>
import { ref } from 'vue';

export default {
  setup() {
    const isLoggedIn = ref(false);
    const showLoginModal = ref(false);
    const countryCode = ref('+86');
    const phoneNumber = ref('');
    const verificationCode = ref('');
    const countdown = ref(0);
    const userPhone = ref('');
    
    const sendVerificationCode = () => {
      if (!phoneNumber.value || phoneNumber.value.length !== 11) {
        alert('请输入有效的11位手机号码');
        return;
      }
      
      countdown.value = 60;
      const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
          clearInterval(timer);
        }
      }, 1000);
      
      alert(`验证码已发送至 ${phoneNumber.value}，请注意查收（演示模式）`);
    };
    
    const login = () => {
      if (!phoneNumber.value || phoneNumber.value.length !== 11) {
        alert('请输入有效的11位手机号码');
        return;
      }
      
      if (!verificationCode.value || verificationCode.value.length !== 6) {
        alert('请输入6位验证码');
        return;
      }
      
      isLoggedIn.value = true;
      showLoginModal.value = false;
      userPhone.value = phoneNumber.value;
      phoneNumber.value = '';
      verificationCode.value = '';
    };
    
    const logout = () => {
      isLoggedIn.value = false;
      userPhone.value = '';
    };
    
    const switchAccount = () => {
      isLoggedIn.value = false;
      showLoginModal.value = true;
      userPhone.value = '';
    };
    
    return {
      isLoggedIn,
      showLoginModal,
      countryCode,
      phoneNumber,
      verificationCode,
      countdown,
      userPhone,
      sendVerificationCode,
      login,
      logout,
      switchAccount
    };
  }
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="app-container">
        <div class="preview-section">
          <h2>登录</h2>
          <div class="login">
            <div class="login-logo">
              <i class="fas fa-cloud" style="font-size: 80px; color: #6a11cb;"></i>
              <h2>锦绣云端</h2>
              <img src="../assets/锦绣云端Logo.png" alt="">
            </div>
            
            <div v-if="!isLoggedIn">
              <button class="login-btn" @click="showLoginModal = true">
                <i class="fas fa-sign-in-alt"></i> 手机验证码登录
              </button>
            </div>
            
            <div v-else>
              <div class="user-info">
                <i class="fas fa-user-circle"></i>
                <h3>您好，{{ userPhone }}</h3>
                <p>已成功登录锦绣云端</p>
              </div>
              <div class="account">
                <button class="account-btn" @click="switchAccount">
                  <i class="fas fa-sync-alt"></i> 切换账号
                </button>
                <button class="account-btn" @click="logout">
                  <i class="fas fa-sign-out-alt"></i> 注销账号
                </button>
              </div>
            </div>
          </div>
        </div></div></div>
    
    <transition name="fade">
      <div class="login-modal" v-if="showLoginModal">
        <div class="modal-content">
          <button class="close-btn" @click="showLoginModal = false">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="modal-header">
            <h3>手机验证码登录</h3>
          </div>
          
          <div class="input-group">
            <label>手机号码</label>
            <div class="phone-input">
              <select v-model="countryCode">
                <option value="+86">+86</option>
                <option value="+852">+852</option>
                <option value="+853">+853</option>
                <option value="+886">+886</option>
              </select>
              <input 
                type="tel" 
                placeholder="请输入手机号码" 
                v-model="phoneNumber"
                maxlength="11"
              >
            </div>
          </div>
          
          <div class="input-group">
            <label>验证码</label>
            <div class="code-input">
              <input 
                type="text" 
                placeholder="请输入6位验证码" 
                v-model="verificationCode"
                maxlength="6"
              >
              <button 
                class="get-code-btn" 
                @click="sendVerificationCode"
                :disabled="countdown > 0"
              >
                <span v-if="countdown > 0">重新发送({{ countdown }})</span>
                <span v-else>获取验证码</span>
              </button>
            </div>
          </div>
          
          <button class="submit-btn" @click="login">
            <i class="fas fa-sign-in-alt"></i> 登录
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    body {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .container {
         position: absolute;
      top: 22%;
      left: 65%;
      /* transform: translate(-50%, -50%); */
      max-width: 400px;
      max-height: 400px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .app-container {
      display: flex;
      gap: 50px;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .preview-section {
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 450px;
    }
    
    .preview-section h2 {
      color: #2c3e50;
      margin-bottom: 20px;
      font-family: Arial;
      font-style: initial;
      text-align: center;
      font-size: 1.8rem;
    }
    
    /* 登录组件样式 */
    .login {
      width: 100%;
      max-width: 350px;
      height: 325px;
      padding: 30px 25px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      position: relative;
      overflow: hidden;
      margin: 0 auto;
    }
    
    .login-logo {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-style: oblique;
      margin-bottom: 25px;
    }
    
    .login-logo img {
      width: 125px;
      height: 125px;
      object-fit: contain;
      margin-bottom: 15px;
    }
    
    .login-btn {
      display: block;
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(37, 117, 252, 0.4);
    }
    
    .login-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(37, 117, 252, 0.6);
    }
    
    .login-btn:active {
      transform: translateY(1px);
    }
    
    .account {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #eee;
    }
    
    .account-btn {
      flex: 1;
      padding: 10px;
      background: #f8f9fa;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      color: #2c3e50;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0 5px;
    }
    
    .account-btn:hover {
      background: #e9ecef;
      transform: translateY(-2px);
    }
    
    /* 登录模态框样式 */
    .login-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(5px);
    }
    
    .modal-content {
      width: 100%;
      max-width: 400px;
      background: white;
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
      position: relative;
      animation: modalAppear 0.4s ease;
    }
    
    @keyframes modalAppear {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6c757d;
      transition: color 0.3s;
    }
    
    .close-btn:hover {
      color: #495057;
    }
    
    .modal-header {
      text-align: center;
      margin-bottom: 25px;
    }
    
    .modal-header h3 {
      font-size: 1.6rem;
      color: #2c3e50;
    }
    
    .input-group {
      margin-bottom: 20px;
    }
    
    .input-group label {
      display: block;
      margin-bottom: 8px;
      color: #495057;
      font-weight: 500;
    }
    
    .phone-input {
      display: flex;
    }
    
    .phone-input select {
      width: 80px;
      padding: 12px;
      border: 1px solid #ced4da;
      border-radius: 10px 0 0 10px;
      background: #f8f9fa;
      outline: none;
    }
    
    .phone-input input {
      flex: 1;
      padding: 12px;
      border: 1px solid #ced4da;
      border-left: none;
      border-radius: 0 10px 10px 0;
      outline: none;
    }
    
    .code-input {
      display: flex;
    }
    
    .code-input input {
      flex: 1;
      padding: 12px;
      border: 1px solid #ced4da;
      border-radius: 10px 0 0 10px;
      outline: none;
    }
    
    .get-code-btn {
      padding: 12px 20px;
      background: #e9ecef;
      border: 1px solid #ced4da;
      border-left: none;
      border-radius: 0 10px 10px 0;
      cursor: pointer;
      transition: background 0.3s;
      white-space: nowrap;
    }
    
    .get-code-btn:disabled {
      background: #f8f9fa;
      cursor: not-allowed;
    }
    
    .get-code-btn:not(:disabled):hover {
      background: #dee2e6;
    }
    
    .submit-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }
    
    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 176, 155, 0.4);
    }
    
    .user-info {
      text-align: center;
      padding: 20px 0;
    }
    
    .user-info i {
      font-size: 4rem;
      color: #6a11cb;
      margin-bottom: 15px;
    }
    
    .user-info h3 {
      font-size: 1.4rem;
      color: #2c3e50;
      margin-bottom: 5px;
    }
    
    .user-info p {
      color: #6c757d;
      margin-bottom: 20px;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
      .app-container {
        flex-direction: column;
        align-items: center;
      }
      
      .preview-section, .instructions {
        max-width: 100%;
      }
      
      header h1 {
        font-size: 2.2rem;
      }
    }
    
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.3s;
    }
    
    .fade-enter-from, .fade-leave-to {
      opacity: 0;
    }
</style>