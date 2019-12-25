<template>
  <div id="detail-page" v-if="data.length">
    <header class>
      <a class="back-icon" @click="goto('goods')"></a>
      <span class="menu-icon"></span>
      <span class="cart-icon" id="goCart" @click="goto('cart')"></span>
    </header>
    <div id="product" v-for="item in data" :key="item.id">
      <div
        class="swiper-container slider-image swiper-container-horizontal swiper-container-ios"
        id="sliderImage"
      >
        <img class="swiper-lazy swiper-lazy-loaded" :src="item.img" />
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div class="title">
        <h1>
          <span class="vertic_mid">{{item.name}}</span>
        </h1>
      </div>
      <p class="price">
        <span class="price-now">
          <i class="price-now-icon">￥</i>
          <i class="price-now-txt">{{item.price}}</i>
        </span>
        <span class="adr-send">山西临汾尧都</span>
      </p>
      <p class="cns">
        <span class="cover">
          <span class="cover-txt">{{item.quality}}</span>
          <van-icon name="arrow" size=".21rem" />
        </span>
        <span class="stock">库存1件</span>
      </p>
      <div class="notes">
        <div class="notes-list">
          <p>
            <span class="note-title">作者</span>
            <span class="note-txt">华北新华书店</span>
          </p>
          <p>
            <span class="note-title">出版社</span>
            <span class="note-txt">华北新华书店</span>
          </p>
          <p>
            <span class="note-title">出版时间</span>
            <span class="note-txt">1949-02</span>
          </p>
          <p>
            <span class="note-title">版次</span>
            <span class="note-txt">2</span>
          </p>
          <p>
            <span class="note-title">装帧</span>
            <span class="note-txt">平装</span>
          </p>
          <p>
            <span class="note-title">开本</span>
            <span class="note-txt">32开</span>
          </p>
          <p>
            <span class="note-title">页数</span>
            <span class="note-txt">157页</span>
          </p>
          <p>
            <span class="note-title">上书时间</span>
            <span class="note-txt">2019-12-22</span>
          </p>
        </div>
      </div>
    </div>
    <div id="foot">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="comment-o" text="联系" />
        <van-goods-action-icon icon="like-o" text="收藏" /> 
        <van-goods-action-button color="#d48c68" type="warning" text="加入购物车" @click="addtocart"/>
        <van-goods-action-button color="#9e100e" type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
  <div v-else v-loading.fullscreen.lock="true" element-loading-text="拼命加载中"></div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  async created() {
    let id = this.$route.query.id;
    let {
      data: { data }
    } = await this.$axios.get(`http://114.215.146.121:1911/goods/${id}`);
    this.data = data;
  },
  
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    async addtocart(){
      this.$notify({ type: 'success', message: '加入购物车成功',duration: 1000 });
      let shopname=this.data[0].shop_name
      let id=this.data[0].id
      let selected=true
      let imgurl=this.data[0].img;
      let quality=this.data[0].quality;
      let title=this.data[0].name;
      let price=this.data[0].price;
      let {data:{data}}=await this.$axios.get(`http://114.215.146.121:1911/cart/${id}`)
      let num=data[0]?data[0].num:1
      let result=await this.$axios.post("http://114.215.146.121:1911/cart",{
          shopname,id,selected,num,imgurl,quality,title,price
      })
      window.console.log(result)
    
    }
  }
};
</script>
<style scoped>
header .back-icon,
header .cart-icon {
  position: absolute;
  top: 0.16rem;
  width: 0.56rem;
  height: 0.56rem;
}
header .back-icon {
  left: 0.16rem;
  background: url("../img/return.png") no-repeat 50%;
  background-size: 100%;
}
header .menu-icon {
  position: absolute;
  top: 0.16rem;
  right: 0.2rem;
  width: 0.56rem;
  height: 0.56rem;
  background: url("../img/more.png") no-repeat 50%;
  background-size: 100%;
}
header {
  width: 100%;
  padding: 0 0.3rem;
  height: 0.88rem;
  font-size: 0.34rem;
  line-height: 0.88rem;
  background: transparent;
}
header .cart-icon {
  right: 1.08rem;
  background: url("../img/cart.png") no-repeat 50%;
  background-size: 100%;
  position: absolute;
  top: 0.16rem;
  width: 0.56rem;
  height: 0.56rem;
}
.slider-image {
  width: 100%;
  height: 7.5rem;
  background: #f3f3f3;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.slider-image img {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
#product .title {
  overflow: hidden;
  margin: 0.24rem auto 0;
  padding: 0 0.3rem;
  color: #262626;
  letter-spacing: 0;
  line-height: 0.48rem;
  width: 100%;
}
#product .title h1 {
  font-size: 0.32rem;
  font-weight: 600;
  word-wrap: break-word;
}
.vertic_mid {
  vertical-align: middle;
}
#product .price,
#product .price .price-now {
  overflow: hidden;
  width: 8.9rem;
  margin-top: 0.16rem;
  margin-left: 0.28rem;
  line-height: 0.62rem;
}
#product .price .price-now-icon {
  float: left;
  margin-top: 2px;
  color: #9e100e;
  font-size: 0.28rem;
  letter-spacing: 0.89px;
}
#product .price .price-now-txt {
  float: left;
  font-size: 0.44rem;
  color: #9e100e;
  margin-left: -3px;
  letter-spacing: 1.4px;
}
#product .price .adr-send {
  float: right;
  height: 0.62rem;
  line-height: 0.77rem;
  font-size: 0.33rem;
  color: #999;
  letter-spacing: 0;
}
#product .cns {
  overflow: hidden;
  width: 8.9rem;
  margin-top: 0.1rem;
  margin-left: 0.28rem;
  height: 0.52rem;
  line-height: 0.52rem;
}
#product .cns .cover {
  float: left;
  padding: 0.02rem 0.18rem 0;
  height: 0.52rem;
  line-height: 0.5rem;
  font-size: 0;
  letter-spacing: 0;
  text-align: center;
  color: #666;
  background: #f7f7f7;
  border-radius: 0.08rem;
}
#product .cns .cover-txt {
  font-size: 0.33rem;
}
#product .cns .van-icon-arrow {
  display: inline-block;
  position: relative;
  top: 0.04rem;
  margin-left: 5px;
}
#product .cns .stock {
  float: right;
  letter-spacing: 0;
  height: 0.6rem;
  font-size: 0.33rem;
  line-height: 0.6rem;
  color: #999;
}
#product .notes {
  overflow: hidden;
  position: relative;
  width: 8.9rem;
  padding-bottom: 0.2rem;
  margin-top: 0.3rem;
  margin-left: 0.28rem;
}
#product .notes-list {
  overflow: hidden;
  border-top: 1px solid #f3f3f3;
  padding-top: 0.2rem;
}
#product .notes p {
  overflow: hidden;
  width: 100%;
  font-size: 0.33rem;
  letter-spacing: 0;
  line-height: 0.47rem;
}
#product .notes .note-title {
  float: left;
  width: 2.2rem;
  text-align: left;
  color: #c7c7c7;
}
#product .notes .note-txt {
  float: left;
  width: 5.3rem;
  text-align: left;
  color: #262626;
}
</style>