<template>
  <div style="margin:30px 40px">
    <el-input v-model="form.username" placeholder="请输入内容"></el-input>
    <el-input v-model="form.password" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="login()">确 定</el-button>
    <el-button type="primary" @click="getData">查询</el-button>
  </div>
</template>

<script>
import { login ,getUser} from "@/api/index";
// import {asd,obj1,obj2} from "@/test/indexa";

export default {
  name: "HelloWorld",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    login() {
      const params = {
        ...this.form
      };
      login(params)
        .then(res => {
          console.log(res);
          // this.loading = false;
          // this.tableData = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getData() {
      // this.loading = true;
      getUser({ HAHA: 123 })
        .then(res => {
          console.log(res);
          // this.loading = false;
          // this.tableData = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
