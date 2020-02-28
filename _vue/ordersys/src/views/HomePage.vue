<template>
  <div>
    {{info}}
    <span>info</span>
    <div>
      <el-button type="primary" class="btn-login" @click="submitForm('logOut')">退出</el-button>
    </div>
  </div>
</template>

<script>

  import {homePage} from "../network/homepage";


  export default {
    name: "HomePage",
    data() {
      return {
        info: {
          type: String,
          default: 'abc'
        }
      }
    },
    created() {
      homePage().then((res) => {
        this.info = res.data
        console.log(res)
      })
      // console.log(this.$store.state.token)
    },
    methods: {
      logOut() {
        sessionStorage.removeItem('token')
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>