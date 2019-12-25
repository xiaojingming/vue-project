<template>
  <div id="mine">
    <header>
      <!-- <i class="el-icon-s-comment"></i>
      <i class="el-icon-s-custom" @click="goto('/loginout')"></i>-->
      <van-nav-bar title="个人中心"></van-nav-bar>
      <van-icon name="arrow" class="ifot" @click="goto('/loginout')" />
    </header>
    <div class="title">
      <div class="title-l">
        <img src="http://user.kongfz.com/data/member_pic/6724/11516724.jpg" alt />
      </div>
      <div class="title-c">
        <p>书友_4369808</p>
        <span>买家好评0</span>
        <i class="line"></i>
        <span>信誉0</span>
      </div>
      <div class="title-r">
        <div class="buyb">
          <i class="el-icon-reading"></i>
          <span>我要买书</span>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="section_item">
        <div class="section_num">0</div>
        <div class="section_title">我的竞拍</div>
      </div>
      <div class="section_item">
        <div class="section_num">{{colLength}}</div>
        <div class="section_title" @click="goto('/collection')">收藏夹</div>
      </div>
      <div class="section_item">
        <div class="section_num">10</div>
        <div class="section_title">足迹</div>
      </div>
    </div>
    <div class="module_box">
      <div class="module_title clearfix">
        <div class="pull_left">我的订单</div>
        <div class="pull_right show_more">
          <span class="vert_m">查看更多</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <ul class="module_list clearfix">
        <li class="module_item">
          <!---->
          <i class="el-icon-folder-checked"></i>
          <div class="module_item_name">待确认</div>
        </li>
        <li class="module_item">
          <!---->
          <i class="el-icon-shopping-bag-1"></i>
          <div class="module_item_name">待付款</div>
        </li>
        <li class="module_item">
          <!---->
          <i class="el-icon-takeaway-box"></i>
          <div class="module_item_name">待发货</div>
        </li>
        <li class="module_item">
          <!---->
          <i class="el-icon-truck"></i>
          <div class="module_item_name">待收货</div>
        </li>
        <li class="module_item">
          <!---->
          <i class="el-icon-chat-line-square"></i>
          <div class="module_item_name">待评价</div>
        </li>
        <li class="module_item">
          <!---->
          <i class="el-icon-coin"></i>
          <div class="module_item_name">退货退款</div>
        </li>
      </ul>
    </div>
    <div class="module_box">
      <div class="module_title clearfix">
        <div class="pull_left">我的拍卖</div>
        <div class="pull_right show_more">
          <span class="vert_m">查看更多</span>
          <i class="icon icon_right"></i>
        </div>
      </div>
      <ul class="module_list clearfix">
        <li class="module_item mb_0">
          <!---->
          <i class="el-icon-suitcase"></i>
          <div class="module_item_name">待付款</div>
        </li>
        <li class="module_item mb_0">
          <!---->
          <i class="el-icon-takeaway-box"></i>
          <div class="module_item_name">待发货</div>
        </li>
        <li class="module_item mb_0">
          <!---->
          <i class="el-icon-truck"></i>
          <div class="module_item_name">待收货</div>
        </li>
        <li class="module_item mb_0">
          <!---->
          <i class="el-icon-chat-dot-square"></i>
          <div class="module_item_name">待评价</div>
        </li>
      </ul>
    </div>
    <div class="capital_box">
      <div class="pull_left capital_title">账户资金</div>
      <div class="pull_right capital_num">
        <span class="vert_m">￥0.00</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="module_box advert_box"></div>
    <div class="module_box">
      <div class="module_title clearfix">
        <div class="pull_left">我的服务</div>
      </div>
      <ul class="module_list clearfix last-list">
        <li class="module_item">
          <i class="el-icon-location-outline"></i>
          <div class="module_item_name">收货地址</div>
        </li>
        <li class="module_item">
          <i class="el-icon-news"></i>
          <div class="module_item_name">我的订阅</div>
        </li>
        <li class="module_item">
          <i class="el-icon-headset"></i>
          <div class="module_item_name">客服留言</div>
        </li>
        <li class="module_item">
          <i class="el-icon-trophy"></i>
          <div class="module_item_name">信誉档案</div>
        </li>
        <li class="module_item">
          <i class="el-icon-files"></i>
          <div class="module_item_name">监督与建议</div>
        </li>
        <li class="module_item">
          <i class="el-icon-notebook-2"></i>
          <div class="module_item_name">意见反馈</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },
  computed: {
    colLength() {
      return this.$store.getters.colLength;
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
#mine {
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 0.8rem;
  position: relative;
  .ifot {
    // float: right;
    // margin-left: 0.266667rem;
    // font-size: 0.5rem;
    position: absolute;
    top: 0.533333rem;
    right: 0.266667rem;
    z-index: 1000;
    font-size: 0.48rem;
  }
}
.title {
  //   padding-left: .266667rem;
  height: 1.3rem;
  position: relative;
  top: 0.533333rem;
  display: flex;
  width: 100%;
  .title-l {
    height: 1.3rem;
    width: 1.3rem;

    float: left;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .title-c {
    float: left;
    padding: 0.16rem 0;
    p {
      margin-bottom: 0.12rem;
      line-height: 0.52rem;
      font-size: 0.38rem;
      color: #262626;
    }
    span {
      line-height: 0.34rem;
      font-size: 0.24rem;
      color: #666;
    }
    .line {
      display: inline-block;
      width: 1px;
      height: 0.24rem;
      line-height: 0.24rem;
      margin: 0 0.1rem;
      font-size: 0;
      background: #c7c7c7;
      vertical-align: middle;
    }
  }
  .title-r {
    position: absolute;
    right: 0;
    top: 0.2rem;
    width: 2rem;
    height: 0.58rem;
    line-height: 0.56rem;
    padding-left: 0.18rem;
    border-radius: 0.29rem 0 0 0.29rem;
    border: 1px solid #365899;
    border-right: none;
    background: #fff;
  }
}
.list {
  display: flex;
  align-items: center;
  padding: 0.26rem 0.65rem;
  justify-content: space-between;
  margin-bottom: 0.26rem;
  border-radius: 0.24rem;
  background: #fff;
  .section_item {
    width: 1.1rem;
    text-align: center;
  }
  .section_num {
    line-height: 0.42rem;
    font-size: 0.3rem;
    color: #262626;
  }
  .section_title {
    line-height: 0.37rem;
    font-size: 0.26rem;
    color: #262626;
    text-align: center;
  }
}
.module_box {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.26rem;
  box-shadow: 0 0.06rem 0.16rem 0 hsla(0, 0%, 60%, 0.1);
  border-radius: 0.24rem;
  background: #fff;
  .module_title {
    // display: flex;
    height: 0.86rem;
    line-height: 0.84rem;
    padding: 0 0.3rem;
    border-bottom: 1px solid #eaeaea;
    font-size: 0.28rem;
    color: #262626;
    .pull_left {
      float: left;
      font-size: 0.26rem;
      color: #999;
    }
    .pull_right {
      font-size: 0.26rem;
      color: #999;
      float: right;
      .vert_m {
        vertical-align: middle;
        font-size: 0.266667rem;
      }
      .icon_right {
        width: 0.42rem;
        height: 0.42rem;
      }
    }
  }
  .module_list {
    display: flex;
    flex-flow: wrap;
    padding: 0.3rem 0.28rem;
    justify-content: space-between;
    .module_item {
      position: relative;
      float: left;
      width: 1.2rem;
      margin-right: 0.56rem;
      margin-bottom: 0.6rem;
      text-align: center;
      i {
        font-size: 0.666667rem;
      }
      .module_item_name {
        margin-top: 0.1rem;
        line-height: 0.33rem;
        font-size: 0.24rem;
        color: #262626;
      }
    }
  }
}
.capital_box {
  height: 1.2rem;
  line-height: 1.2rem;
  padding: 0 0.3rem;
  .capital_title {
    float: left;
    font-size: 0.28rem;
    color: #262626;
  }
  .capital_num {
    font-size: 0.3rem;
    color: #9e100e;
    float: right;
  }
}
.advert_box {
  width: 100%;
  height: 1.6rem;
  background: url(http://res2.kongfz.com/wx/shop/image/fanli-bg.jpg) no-repeat;
  background-size: cover;
}
.last-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.733333rem;
}
</style>