<template>
  <div style="margin:30px 40px">
    <el-input v-model="form.username" placeholder="请输入内容"></el-input>
    <el-input v-model="form.password" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="login()">确 定</el-button>
    <el-button type="primary" @click="getData">查询</el-button>
    <el-button type="primary" @click="jump">login with github</el-button>
    <div id="haha" @click="refresh"></div>
  </div>
</template>

<script>
import { login, getUser } from "@/api/index";
import { setToken } from "@/utils/auth";
// import {asd,obj1,obj2} from "@/test/indexa";

export default {
  name: "HelloWorld",
  data() {
    return {
      clientId: "cafbac3150ce1951d339",
      clientSecret: "4778c8a8c733e931ebc597f968693b5bd21a3860",
      form: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    console.log("login~")
    var hiddenProperty =
      "hidden" in document
        ? "hidden"
        : "webkitHidden" in document
        ? "webkitHidden"
        : "mozHidden" in document
        ? "mozHidden"
        : null;
    var visibilityChangeEvent = hiddenProperty.replace(
      /hidden/i,
      "visibilitychange"
    );
    var onVisibilityChange = function() {
      if (!document[hiddenProperty]) {
        document.title = "激活状态！";
      } else {
        document.title = "未激活状态！";
      }
    };
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);
  },
  methods: {
    login() {
      const params = {
        ...this.form
      };
      login(params)
        .then(res => {
          console.log(res);
          const data = res.data;
          const token = data.access_token;
          setToken(token);
          this.$router.push({ path: "/HelloWorld" });
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
    },
    jump() {
      let wd = window.open(
        `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=http://localhost:4000/uaa/user/redirect`,
        "_blank",
        "width=600,height=400,menubar=no,toolbar=no,location=no"
      );
      // setTimeout(() => {
      //     console.log(wd)
      //     wd.close();
      //     window.location.reload();
      //   }, 5000);
    },
    refresh() {
      setTimeout(() => {
        // console.log(wd);
        // wd.close();
        // window.location.reload();
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
