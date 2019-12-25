<template>
  <div>
    <van-nav-bar title="书店" />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          style="width:100%"
          src="../img/b.jpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          style="width:100%"
          src="../img/a.jpg"
        />
      </van-swipe-item>
    </van-swipe>
    <div>
      <van-grid>
        <van-grid-item v-for="item in list" :key="item.name" :icon="item.img" :text="item.name" />
      </van-grid>
    </div>
    <div>
      <van-cell style="font-weight:800;" title="为您推荐" size="large" />
      <div class="shop" >
        <div class="box" v-for="item in data" :key="item.id">
         <img :src="item.src" alt="">
          <p class="tit">{{item.title}}</p>
          <p class="des">
            <span class="fl">{{item.phase}}</span>
            <span class="fr">{{item.address}}</span>
          </p>
          
          <p >
            <span class="foot">{{item.price}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    
    return {
      data:[],
      list: [
        {
          img: require("../img/1.png"),
          name: "分类"
        },
        {
          img: require("../img/2.png"),
          name: "每日新书"
        },
        {
          img: require("../img/3.png"),
          name: "书店排行"
        },
        {
          img: require("../img/4.png"),
          name: "书摊排行"
        },
        {
          img: require("../img/5.png"),
          name: "新书广场"
        }
      ]
    };
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get(`http://114.215.146.121:1911/shoplist`);  //合并修改
    this.data = data
    // window.console.log(this.data);
  }
};
</script>
<style lang="scss" scoped>
.shop{
  display: flex;
  flex-flow: wrap;
  width: 100%;
  .box{
    display: inline-block;
    height:5.333333rem;
    width: 45%;
    margin: 2% 2%;
     img{
       height: 60%;
       width:100%;
     }
     .tit{
       font-size: .32rem;
       color: #aaa;
     }
     .des{
       height: .533333rem;
     }
     .fl{
       float: left;
     }
     .fr{
        float: right;
     }
     .foot{
       color: red;
     }
  }
}
</style>