<template>
<!-- prevent 提交后不刷新页面 -->
<form @submit.prevent="submitForm">
  <div class="row q-mb-md">
    <q-banner class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle" color="primary" />
      </template>
      Register to access your todos anywhere
    </q-banner>
  </div>

  <div class="row q-mb-md">
    <q-input
      ref="email"
      class="col"
      outlined 
      v-model="formData.email" 
      label="Email"
      :rules="[ val => isValidEmailAddress(val) || 'Invaild email address']"
      stack-label
      lazy-rules
      />
  </div>

  <div class="row q-mb-md">
    <q-input
      ref="password"
      class="col"
      outlined 
      v-model="formData.password"
      label="Password"
      stack-label
      type="password"
      :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
      lazy-rules
      />
  </div>

  <div class="row">
    <!-- 靠右 -->
    <q-space></q-space>
    <!-- 指定submit属性 -->
    <q-btn 
      color="primary"
      label="Register"
      type="submit"
    />
  </div>

</form>
</template>

<script>
export default {
  // 父级传入tab
  props: ['tab'],
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.email.hasError) {
        // 根据父级传入的tab判断是注册还是登陆
        if (this.tab == 'register') {
          console.log("register user")
        } else {
          console.log("login user")

        }
      }
    },
    isValidEmailAddress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
};
</script>

<style>
</style>