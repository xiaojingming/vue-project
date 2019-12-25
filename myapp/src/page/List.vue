<template>
  <div>
    <header v-if="menu_1">
      <van-nav-bar title="全部分类-孔夫子旧书网" left-arrow @click-left="goto('/home')">
        <van-cell @click="showPopup" slot="right" icon="ellipsis"></van-cell>
        <van-popup
          :overlay="false"
          v-model="show"
          position="right,top "
          slot="right"
          :round='true'
          :style="{ width: '60%' }"
          closeable
        >
          <van-grid :border="false" :column-num="1">
            <van-grid-item>
              <div @click="goto('/login')">
                <van-icon name="chat-o" />
                <span>消息</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div @click="goto('/home')">
                <van-icon name="wap-home-o" />
                <span>首页</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div @click="goto('/login')">
                <van-icon name="search" />
                <span>搜索</span>
              </div>
            </van-grid-item>
            <van-grid-item>
              <div @click="goto('/login')">
                <van-icon name="shopping-cart-o" />
                <span>购物车</span>
              </div>
            </van-grid-item>
          </van-grid>
        </van-popup>
      </van-nav-bar>

      <van-tree-select height="auto" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <van-grid :border="false" :column-num="2">
            <van-grid-item v-show="activeIndex === 0" v-for="item in menu_1" :key="item.count" @click="goto('goods')">
              <van-image :src="item.img" />
              <div class="des">
                <h4>{{item.name}}</h4>
                <span>{{item.count}}</span>
              </div>
            </van-grid-item>
            <van-grid-item v-show="activeIndex === 1" v-for="item in menu_2" :key="item.count">
              <van-image :src="item.img" />
              <div class="des">
                <h4>{{item.name}}</h4>
                <span>{{item.count}}</span>
              </div>
            </van-grid-item>
            <van-grid-item v-show="activeIndex === 2" v-for="item in menu_3" :key="item.count">
              <van-image :src="item.img" />
              <div class="des">
                <h4>{{item.name}}</h4>
                <span>{{item.count}}</span>
              </div>
            </van-grid-item>
            <van-grid-item v-show="activeIndex === 3" v-for="item in menu_4" :key="item.count">
              <van-image :src="item.img" />
              <div class="des">
                <h4>{{item.name}}</h4>
                <span>{{item.count}}</span>
              </div>
            </van-grid-item>
          </van-grid>
          <el-backtop :bottom="100" :right="10">
            <div
              style="{
              height: 100%;
              width: 100%;
              background-color: #f2f5f6;
              box-shadow: 0 0 6px rgba(0,0,0, .12);
              border-radius:50%;
              font-size:14px;
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }"
            >顶部</div>
          </el-backtop>
        </template>
      </van-tree-select>
    </header>
    <div v-else v-loading.fullscreen.lock="true" element-loading-text="拼命加载中"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      activeKey: 0,
      items: [
        { text: "特色" },
        { text: "图书" },
        { text: "艺术收藏" },
        { text: "文创周边" }
      ],
      activeIndex: 0,
      menu_1: "",
      menu_2: "",
      menu_3: "",
      menu_4: ""
    };
  },
  computed: {},
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    showPopup() {
      this.show = true;
    }
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://114.215.146.121:1911/list");
    this.menu_1 = data[0].lists;
    this.menu_2 = data[1].lists;
    this.menu_3 = data[2].lists;
    this.menu_4 = data[3].lists;
  }
};
</script>
<style scoped>
.van-nav-bar {
  /* position: absolute; */
  top: 0;
  width: 100%;
}
.van-nav-bar .van-icon {
  font-size: 0.56rem;
  color: black;
}
.van-nav-bar__title {
  text-align: center;
  font-size: 0.45rem;
  color: #262626;
  font-weight: 800;
}
footer {
  opacity: 0;
}
.van-image {
  width: 1.4rem;
  height: 2rem;
  border-radius: 2px;
}
.des h4 {
  width: 1.2rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #555;
  letter-spacing: 0;
  line-height: 0.4rem;
}
.des span {
  font-size: 0.24rem;
  line-height: 0.4rem;
  font-family: PingFangSC-Regular;
  color: #999;
  letter-spacing: 0;
}
.van-popup{
  right: 0;
}
.van-icon{
  margin-right: 1rem
}
.van-nav-bar__right{
  right: 0
}
</style>