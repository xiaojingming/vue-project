<template>
    <div id="cart">
    <div class="cart">
      <header>
        <div class="header_title">
          <span class="vert_m">购物车</span>
          <span class="vert_t">({{cartLength}})</span>
          <div class="edit_btn" v-if="isEdit" @click="edit()">编辑</div>
          <div class="edit_btn" v-else @click="edit()">完成</div>
          <i class="message_btn el-icon-chat-dot-round" style></i>
        </div>
      </header>
      <main>
        <div class="shop_card" v-for='(item,idx) in datalist' :key='item.shopname'>
          <div class="shop_bar clearfix">
            <div class="pull_left checkbox checked">
              <el-checkbox v-model="item.shopSelected" @change.self="shopSelect(idx)"></el-checkbox>
            </div>
            <div class="shop_title pull_left">
              <i class="el-icon-takeaway-box"></i>
              <span class="shop_name">{{item.shopname}}</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <!---->
          </div>
          <ul class="goods_list" v-for='list in item.msglist' :key='list.title'>
            <li class="goods_item clearfix" >
              <div class="pull_left checkbox checked" >
                <el-checkbox v-model="list.selected" @change.self='listselected(idx)'></el-checkbox>
              </div>
              <div class="pull_left item_img_box">
                <img
                  :src="list.imgurl"
                  alt
                  class="item_img"
                />
              </div>
              <div class="pull_left item_info_box">
                <div class="item_name">{{list.title}}</div>
                <div class="quality_name_box">
                  <span class="quality_name">{{list.quality}}</span>
                </div>
                <div class="item_bottom clearfix">
                  <div class="pull_left price_num">
                    <span class="sign">¥</span>
                    <span class="sign">{{list.price}}</span>
                  </div>
                  <div class="pull_right item_num">
                    <div class="item_num_input_box">
                      <el-input-number
                        v-model="list.num"
                        size="mini"
                        :min="1"
                        :max="10"
                        label="描述文字"
                      ></el-input-number>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!---->
        </div>
      </main>
      <div class="footer" v-if="cartLength">
        <el-row :gutter="20" style="width: 100%; display: flex; justify-content:space-between;">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-checkbox v-model="selectedAll" @change="selectAll()">全选</el-checkbox>
            </div>
          </el-col>
          <el-col :offset="2" :span="13">
            <div class="grid-content bg-purple" v-if="isdeleted">
              <span>不含运费 合计：</span>
              <span class="price">￥</span>
              <span class="price num">{{totalPrice.toFixed(2)}}</span>
            </div>
            <el-button v-else type="warning" @click="addToCellection()">移入收藏夹</el-button>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple ">
              <el-button size="medium" type="danger" v-if="isdeleted">
                结算
                <span>({{payLength}})</span>
              </el-button>
              <el-button v-else  size="medium" type="danger"  @click="removeItem()">删除</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
     data() {
      return {
        // data:[],

        num: 5,
        clickShop:0,
        isEdit:true,
        isdeleted:true
      }
    },
    
    // computed:{
    //   totalPrice(){
    //     let sum =0;
    //     this.datalist.forEach(item=> {
    //       item.msglist.forEach(ele=>{
    //        sum += ele.price*ele.num;
            
    //       })
    //     });
    //     return sum;
    //   }
    // }
    created(){
 
        this.$store.dispatch('created');
        // this.$store.dispatch('del');  
    },
    methods:{
      shopSelect(idx){    //商店全选，点击触发全选该商店下的商品
        // this.datalist[idx].shopSelected = !this.datalist[idx].shopSelected
        // window.console.log(idx);
        // window.console.log(this.datalist[idx].shopSelected);
        // window.console.log(this.datalist[idx].msglist);
        this.datalist[idx].msglist.forEach(item=>{
          item.selected = this.datalist[idx].shopSelected;
        })
      },
   
      listselected(idx){ //点击商店的商品控制该商店的全选
        // window.console.log(idx);
        let isfalse = this.datalist[idx].msglist.filter(item=>item.selected==false);  //获得该商店没有选到的商品
        // window.console.log(isfalse)
        if(isfalse.length){
          this.datalist[idx].shopSelected = false;
        }else{
          this.datalist[idx].shopSelected = true;
        }
      },
      selectAll(){  // 点击全选所有商品的时候，调用该函数主动触发所有商店的全选
        let datalLength = this.datalist.length
        for(var i=0;i<datalLength;i++){
          this.shopSelect(i);
        }
      },
      removeItem(){
        this.$store.commit('removeFromCart');
        this.$store.dispatch('del');
      },
      addToCellection(){
         
        this.$store.commit('addToCellection');
        this.$store.dispatch('del');
      },
      edit(){
        this.isEdit = !this.isEdit;
        this.isdeleted = !this.isdeleted;


      }

    },
    computed:{   //控制全选全部商品
      selectedAll:{
        get(){
          return  this.datalist.every(item=>item.shopSelected);
        },
        set(val){
          this.datalist.forEach(item=>{
            item.shopSelected = val;
          })
        }
      },
      datalist(){
        return this.$store.state.cart.datalist;
         
      },
      totalPrice(){
        return this.$store.getters.totalPrice
      },
      cartLength(){
          return this.$store.getters.cartLength
      },
      payLength(){
        return this.$store.getters.payLength
      }
    },
    
    
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#cart {
  height: 100%;
  background-color: #F3F3F3;
}
.cart {
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    z-index: 1000;
    position:fixed;
    width: 100%;
    top: 0;
    height: 0.86rem;
    line-height: 0.86rem;
    // position: relative;
    background-color: #fff;
    .header_title {
      font-size: 0.4rem;
      color: #000;
      text-align: center;
      .vert_m {
        vertical-align: middle;
      }
      .vert_t {
        vertical-align: top;
      }
    }
    .edit_btn {
      position: absolute;
      right: 1.17rem;
      top: 0.22rem;
      line-height: 0.42rem;
      font-size: 0.4rem;
      color: #262626;
    }
    .message_btn {
      font-size: 0.533333rem;
      position: absolute;
      right: 0.25rem;
      top: 0.18rem;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 1.4rem;
    padding: 1rem 0 1.2rem 0.2rem;
    .shop_card {
      width: 9.6rem;
      margin-bottom: 0.2rem;
      padding: 0.2rem 0.3rem;
      border-radius: 0.2rem;
      box-shadow: 0 0.06rem 0.16rem 0 hsla(0, 0%, 60%, 0.1);
      background: #fff;
      .shop_bar {
        height: 0.78rem;
        line-height: 0.78rem;
        .checkbox {
          margin-right: 0.3rem;
        }
        .pull_left {
          float: left;
        }
        .shop_name {
          display: inline-block;
          max-width: 4.8rem;
          height: 0.78rem;
          margin-left: 0.03rem;
          font-size: 0.36rem;
          color: #262626;
          vertical-align: middle;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .goods_list .goods_item {
        height: 2.3rem;
        padding: 0.3rem 0;
        line-height: 1.7rem;
        .checkbox {
          margin-right: 0.3rem;
        }
        .pull_left {
          float: left;
        }
        .item_img_box {
          width: 1.7rem;
          height: 1.7rem;
          line-height: 1.7rem;
          margin-right: 0.2rem;
          border-radius: 0.1rem;
          background-size: 100% 100%;
          text-align: center;
          overflow: hidden;
          .item_img {
            display: inline-block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .item_info_box {
          width: 5.5rem;
          line-height: 0.37rem;
          .item_name {
            height: 0.74rem;
            line-height: 0.37rem;
            margin-bottom: 0.1rem;
            font-size: 0.35rem;
            color: #262626;
            overflow: hidden;
          }
          .quality_name_box {
            margin-bottom: 0.1rem;
          }
          .item_bottom {
            height: 0.4rem;
            line-height: 0.4rem;
            .price_num {
              height: 0.4rem;
              line-height: 0.5rem;
              font-size: 0.38rem;
              color: #9e100e;
            }
            .pull_right {
                float: right;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    position: fixed;
    background:#fff;
    z-index: 1000;
    bottom: 1.48rem;
    height: 1.04rem;
    line-height: 0.8rem;
    padding: 0.12rem 0.3rem;
    background-color: #fff;
    span {
      font-size: 0.32rem;
    }
    .price {
      color: red;
    }
  }
}
</style>