<template>
  <div v-if="menu.length">
    <div class="search_bar">
      <div class="logo" @click="goto('home')">
        <img src="https://m.kongfz.com//search/template/mobile2/common/images/logo.png" alt />
      </div>
      <div class="inner">
        <van-icon name="search" />
        <div>请输入书名或作者</div>
      </div>
      <van-icon name="ellipsis" />
    </div>
    <van-dropdown-menu :overlay="false">
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item title="所在地" ref="item">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 16" :key="value" icon="smile-o" text="xx" />
        </van-grid>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="item">
        <van-grid :column-num="4">
          <van-grid-item v-for="value in 16" :key="value" icon="smile" text="xx" />
        </van-grid>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="height_8_gray"></div>
    <van-grid :column-num="1" :center="false">
      <van-grid-item v-for="item in menu" :key="item.id">
        <div class="book_item" :id="item.id" @click="goto('detail',item.id)">
          <div class="book_item_img">
            <img class="imglazy ng-isolate-scope" :src="item.img" />
          </div>
          <div class="book-box-con flex_box_item">
            <p class="book-box-con-name">{{item.name}}</p>
            <p class="m_t10 clearfix">
              <span class="book-box-con-grey quality">{{item.quality}}</span>
              <span class="book-box-con-grey shopname right">
                <em class="shop_name">{{item.shop_name}}</em>
                <em class="levelbox">
                  (
                  <span class="level">{{item.level}}</span>)
                </em>
              </span>
            </p>
            <p class="m_t10 clearfix">
              <em class="f_left price_red">￥</em>
              <span class="book-box-con-red price f_left">{{item.price}}</span>
              <span class="book-box-con-grey date right">{{item.date}}</span>
            </p>
          </div>
        </div>
      </van-grid-item>
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
    </van-grid>
    <van-pagination v-model="currentPage" :page-count="100" mode="simple" @change="next" />
  </div>
  <div v-else v-loading.fullscreen.lock="true" element-loading-text="拼命加载中"></div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      currentPage: 1,
      page:1,
      menu: [],
      option: [
        { text: "默认排序", value: 0 },
        { text: "价格升序", value: 1 },
        { text: "价格降序", value: 2 },
        { text: "出版时间升序", value: 3 },
        { text: "出版时间降序", value: 4 },
        { text: "上书时间升序", value: 5 },
        { text: "上书时间降序", value: 6 },
        { text: "书店等级降序", value: 7 }
      ]
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://114.215.146.121:1911/goods", {
      params: {
        page: 1,
        num: 50,
        sort: 1
      }
    });
    this.menu = data;
  },
  methods:{
    async next(){
      let {
        data: { data }
      } = await this.$axios.get("http://114.215.146.121:1911/goods", {
        params: {
          page: this.currentPage,
          num: 50,
          sort: 1
        }
      })
      this.menu = data;
    },
  goto(path,id){
    this.$router.push({path,query:{id}})
  }
  }
};
</script>
<style scoped>
.search_bar {
  padding: 0.24rem 0.55rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
}
.search_bar .logo {
  width: 1.6rem;
  font-size: 0;
  margin-right: 0.3rem;
}
.search_bar .logo img {
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
.search_bar .inner {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 6.2rem;
  height: 0.88rem;
  background: #f5f5f5;
  font-size: 0.3rem;
  color: #aaa;
}
.search_bar .inner img {
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.16rem;
  margin-left: 0.3rem;
}
.van-icon {
  margin-left: 0.3rem;
  font-size: 16px;
}
.height_8_gray {
  height: 0.1rem;
  background: #f8f8f8;
}
.book_item {
  display: flex;
}
.book_item .book_item_img {
  width: 30%;
  height: 2.5rem;
  line-height: 2.5rem;
  display: block;
  margin: 0.3rem 0 0.3rem 0.3rem;
  text-align: center;
}
.book_item .book_item_img img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.book_item .book-box-con {
  width: 70%;
  font-size: 0.3rem;
  border-bottom: 1px solid #eee;
  padding: 0.3rem 0.3rem 0.3rem 0px;
  margin-left: 0.3rem;
}
.book_item .book-box-con .book-box-con-name {
  color: #333;
  min-height: 20px;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
  font-weight: normal;
  font-size: 15px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
}

.m_t10 {
  margin-top: 0.15rem;
}

.book_item .book-box-con .book-box-con-grey {
  color: #999999;
  width: 40%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  float: left;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
  display: block;
}
.book_item .book-box-con .book-box-con-grey.right {
  text-align: right;
  width: 60%;
}
.book_item .book-box-con .book-box-con-grey .levelbox span {
  width: 40%;
  max-width: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333333;
}
.book_item .book-box-con .price_red {
  color: #d00000;
  font-size: 17px;
  width: 14px;
  margin-top: 2px;
  float: left;
}
.book_item .book-box-con .book-box-con-red {
  width: 32%;
  color: #d00000;
  font-size: 19px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
}
.book_item .book-box-con .book-box-con-grey {
  color: #999999;
  width: 40%;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  float: left;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  word-break: break-all;
  display: block;
}
</style>