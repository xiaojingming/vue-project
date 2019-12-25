<template>
  <div>
    <van-nav-bar title="商品" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-card
      v-for="item in collectionList "  
      :key= "item.id"
      :price="item.price"
      :desc="item.quality"
      :title="item.title"
      :thumb="item.imgurl"
    >
      <div slot="tags">
        <van-tag plain>{{item.shopname}}</van-tag>

      </div>
      <div slot="footer">
          <van-icon name="shopping-cart-o" style="font-size:16px;" />
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/mine");

    }
  },
  computed:{
    collectionList(){
    return this.$store.state.cart.collectionList;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>