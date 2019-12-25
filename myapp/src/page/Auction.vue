<template>
  <div>
    <van-nav-bar title="拍卖" />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          style="width:100%"
          src="../img/c.png"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          style="width:100%"
          src="../img/d.png"
        />
      </van-swipe-item>
    </van-swipe>
    <div>
      <van-grid>
        <van-grid-item v-for="item in list" :key="item.name" :icon="item.img" :text="item.name" />
      </van-grid>
    </div>
    <div>
      <van-divider>今日热点</van-divider>
      <van-card
      v-for="item in data"
      :key="item.id"
        :price="item.price"
        :title="item.title"
        :thumb="item.src"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      list: [
        {
          img: "http://www.kongfz.cn/images/app/indexcaticon/xianzhuang.png",
          name: "线装古籍"
        },
        {
          img: "http://www.kongfz.cn/images/app/indexcaticon/moji.png",
          name: "名人墨迹"
        },
        {
          img: "http://www.kongfz.cn/images/app/indexcaticon/zihua.png",
          name: "名人字画"
        },
        {
          img: "http://www.kongfz.cn/images/app/indexcaticon/taoqiciqi.png",
          name: "陶器瓷器"
        },
        {
          img: "http://www.kongfz.cn/images/app/indexcaticon/quanbu.png",
          name: "全部分类"
        }
      ]
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get(`http://114.215.146.121:1911/paimai`);
    // window.console.log(data);
    this.data = data;
  }
};
</script>
<style scoped>
</style>