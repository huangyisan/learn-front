<template>
    <div class="login">
      <el-form class="login-form" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">
        <el-form-item label="用户名"  prop="username">
          <el-input type="text" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"  prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="btn-login" @click="submitForm('ruleForm')">登陆</el-button>
      </el-form>
    </div>
</template>

<script>

  import {loginIn} from "../network/login";


  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名',
              trigger: 'blur'

            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur',
              min: 5,
              max: 18
            }
          ]
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('发送登陆请求')
            loginIn(this.ruleForm.username, this.ruleForm.password).then(res => {
              if(res.data.resopnseCode === 200){
                console.log(res.data.access_token)
                let token = res.data.access_token
                this.setToken(token)
                this.$router.push('/homepage')
              }else {
                console.log('登陆失败')
              }
            })
          }else {
            console.log('error')
            return false
          }
        })
      },
      setToken(token) {
        this.$store.commit('setToken', token)
      },
      clearToken(){
        this.$store.commit('clearToken')
      }
    }
  }
</script>

<style scoped>
  .login-form {
    margin: 20px;
  }

  .login {
    width: 30%;
    border: solid 2px #DCDFE6;
    border-radius: 20px;
    text-align: center;
    margin: 180px auto;
  }



</style>

