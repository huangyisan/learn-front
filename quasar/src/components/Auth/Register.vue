<template>
<form>
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
      class="col"
      outlined 
      v-model="formData.email" 
      label="Email" 
      stack-label 
      />
  </div>

  <div class="row q-mb-md">
    <q-input
      class="col"
      outlined 
      v-model="formData.password" 
      label="Password" 
      stack-label
      type="password"
      />
  </div>

  <div class="row">
    <!-- 靠右 -->
    <q-space></q-space>
    <q-btn 
      color="primary"
      label="Register"
    />
  </div>

</form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    }
  }
};
</script>

<style>
</style>