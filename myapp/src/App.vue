<template>
  <div class="container">
    <main>
      <router-view />
    </main>
    <footer>
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          v-show="status"
        >
          <el-menu-item
            :index="item.path"
            v-for="(item,idx) in menu"
            :key="item.name"
            @click="goto(idx)"
          >
            <div class="box">
              <i :class="item.icon"></i>
              <span>{{item.text}}</span>
            </div>
          </el-menu-item>
        </el-menu>
      </div>
    </footer>
  </div>
</template>

<script>
import "./js/rem.js";
export default {
  data() {
    return {
      activeIndex: "/home",
      menu: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "shop",
          path: "/shop",
          text: "书店",
          icon: "el-icon-notebook-2"
        },
        {
          name: "auction",
          path: "/auction",
          text: "拍卖",
          icon: "el-icon-money"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-user-solid"
        }
      ]
    };
  },
  methods: {
    goto(idx) {
      this.activeIndex = this.menu[idx].path;
      this.$router.push(this.activeIndex);
    }
  },
  computed: {
    status: {
      get() {
        if(this.$route.name=='cart'){
          return true
        }
        return !this.$route.meta.requiresAuth;
      }
    }
  },
  created(){
      this.activeIndex = this.$route.path;
    this.status=true
  }
};
</script>
  
<style scoped>
.container {
  overflow: hidden;
  height: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
footer .box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer .box span {
  height: auto;
}
footer .nav ul{
  width: auto;
}
footer i {
  margin: 0.24rem 0 0 0;
}
footer .nav ul > li {
  display: flex;
  justify-content: center;
  float: left;
  width: 20%;
  line-height: 1rem;
}
</style>
