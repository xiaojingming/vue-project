<template>
  <div v-if="data_3">
    <div class="search_bar">
      <div class="logo">
        <img :src="header_img1" alt />
      </div>
      <div class="inner">
        <img :src="header_img2" alt />
        <div>商品名称 作者 出版社 ISBN</div>
      </div>
    </div>
    <el-carousel indicator-position="none" class="banner" height="5.4rem">
      <el-carousel-item v-for="item in banner_img" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="nav">
      <ul class="inner">
        <li v-for="item in nav_menu" :key="item.text">
          <div class="img_box" @click="goto('list')">
            <img :src="item.img" />
            <p>{{item.text}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="module-two">
      <div class="inner">
        <div class="box" v-for="item in module_two_menu" :key="item.text">
          <div class="title">
            <p>{{item.text}}</p>
            <p>{{item.content}}</p>
          </div>
          <div class="img_box">
            <img :src="item.img" alt />
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <div class="line_gray">
      <div class="box"></div>
    </div>
    <title-con>拍卖</title-con>
    <div class="module-three">
      <div class="inner">
        <div class="l">
          <div class="title">
            <p>{{module_three_menu_left.text}}</p>
            <p>{{module_three_menu_left.content}}</p>
          </div>
          <div class="img_box">
            <img :src="module_three_menu_left.img" />
          </div>
        </div>
        <div class="r">
          <div class="box" v-for="item in module_three_menu_right" :key="item.text">
            <div class="title">
              <p>{{item.text}}</p>
              <p>{{item.content}}</p>
            </div>
            <div class="img_box">
              <img :src="item.img" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="module-two">
      <div class="inner">
        <div class="box" v-for="item in module_two_menu_2" :key="item.text">
          <div class="title">
            <p>{{item.text}}</p>
            <p>{{item.content}}</p>
          </div>
          <div class="img_box">
            <img :src="item.img" alt />
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <div class="line_gray">
      <div class="box"></div>
    </div>
    <title-con>好书推荐</title-con>
    <div class="free_mode">
      <div class="swiper-slide swiper-slide-active" v-for="item in data_1" :key="item.title">
        <div class="box">
          <div class="img_box">
            <img :src="item.img" />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="author">{{item.author}}</div>
          <div class="price">
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <title-con>书单推荐</title-con>
    <div class="tuijina_list">
      <div
        class="swiper-slide swiper-slide-active"
        v-for="item in data_2 "
        :key="item.title"
        style="margin-right:.2rem"
      >
        <div class="box">
          <div class="img_box">
            <img :src="item.img" />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="author">{{item.author}}</div>
          <div class="price">
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <title-con>新书广场</title-con>
    <div class="newSquareBox_list">
      <ul class="inner">
        <li v-for="item in data_3" :key="item.title">
          <div class="l">
            <img class="lazy" :src="item.img" />
            <div class="price">
              <span>￥</span>
              <span>{{item.price}}</span>
            </div>
          </div>
          <div class="r" style>
            <div class="title">{{item.title}}</div>
            <div class="desc"></div>
          </div>
        </li>
      </ul>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <title-con>旧书-文学经典</title-con>
    <div class="item-list" v-for="(item,index) in data_4" :key="index">
      <ul class="inner">
        <li v-for="(ele,index) in item" :key="ele.title" v-show="currentindex.includes(index)">
          <div class="l">
            <img class="lazy" :src="ele.img" style="width:100%;height:100%" />
            <div class="price">{{ele.price}}</div>
          </div>
          <div class="r" style>
            <div class="title">{{ele.title}}</div>
            <div class="desc">{{ele.desc}}</div>
          </div>
        </li>
      </ul>
      <div class="change_box change_box_list" data-index="11">
        <div class="box" @click="changeCurrenindex">
          换一换
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAAA2WJk2WJk3WZtEbak2WJk2WZk2WJo3WJo3Wpo4Wps3Wps3W546XaI2WZo3WZo2WJo2WZo5Wps5WZo7W5s9YZ42WZk3WZo2WJo3WZo3WZo2WJk2WJo4Wpo3WZs2WZk3WZo4W5uAgP83WZo4WZk2WJmQgH9YAAAAJXRSTlMA9fBnCN/X6rBWUkIoDujJt5wyLB0VzIXSu6ali3tbUEs5ApBf2p/i4wAAANBJREFUOMvt08kSgjAQBNDMkARiCJss7nv//y+6XBQdLao8cKFPTNc7JExFTRk3IUoM8SK5hJ9Md4S4KNctg7ZahcVRdqlF4U+Pz30Om1aIZJexe047ypwMg+HqdfZMMixx6BcOIqyxeq+WIuww/7ycdOvcqmGJzwNhrf9YqG4Gwk02ENpcKKv44/fM0QlwhuV7tUItQrh+c0CpREjse2dhE2QYGdo9Z8e3Q8vQNy3y/WM4+QI2/bKZpFF6m4HbdVnEoI3+vYv74yKTRI2aMmquGSELMu+krSYAAAAASUVORK5CYII="
            alt
          />
        </div>
      </div>
      <div style="padding-bottom:0.4rem"></div>
    </div>
    <title-con>旧籍寻踪</title-con>
    <div class="book-list" v-for="(item,index) in data_5" :key="index" style="margin-bottom:1rem">
      <div class="swiper-slide swiper-slide-active" v-for="ele in item" :key="ele.title">
        <div class="box">
          <div class="img_box">
            <img :src="ele.img" />
          </div>
          <div class="title">{{ele.title}}</div>
          <div class="author">{{item.author}}</div>
          <div class="price">
            <span>{{ele.price}}</span>
          </div>
        </div>
      </div>
      <div style="padding-bottom:0.4rem"></div>
    </div>
    <div style="padding-bottom:0.4rem"></div>
    <div class="line_gray">
      <div class="box"></div>
    </div>
    <title-con>为您推荐</title-con>
    <div id="recommend_list">
      <ul>
        <li v-for="item in commandlist" :key="item.id">
          <div class="img_box">
            <img class="recommend_lazy" :src="item.img" />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="middle_box clearfix">
            <div class="phase">{{item.phase}}</div>
            <div class="address">{{item.address}}</div>
          </div>
          <div class="price">{{item.price}}</div>
        </li>
      </ul>
    </div>
    <div class="no-more">
      <div class="inner">- 没有更多 -</div>
    </div>
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
  </div>
  <div v-else v-loading.fullscreen.lock="true" element-loading-text="拼命加载中"></div>
</template>
<script>
import titleCon from "./title.vue";
export default {
  data() {
    return {
      header_img1:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABECAYAAAABdCLpAAAAAXNSR0IArs4c6QAADjRJREFUeAHtWglwVEUa7n4zGUISmSMJRwgQQjwoDkFQES2VLVFxUbfcJYIKOSx1LXWxQLfc3aoVyy21VhcED3Z1KwcqCNa6It4bBfGg1pJVQYQVReSGTOYIOWYm87r36zfTb96bzAwZJota9boq+bv//vvv7q///vvvnkeIlSwELAQsBCwELAQsBCwELAQsBCwELAQsBCwELAQsBCwELAQsBCwELAQsBCwELAQsBCwEfpQI0B/lqH5Cg3phpNMdOU7uIYSPIFzZWljEnqs+0O5LnkK/AN1YXHwWV6NPUMJHckq+Vgh9Q3Hk/2PB0aPHjB02u92zVcKmOaht9U0+31fGup9KXgAb7rCNVRibygmfQSi5gnM+UI6fUnqQKqSmti34ruQJmjPQje5BczmhzxLOi5IURwiljSUDCxddfehQl6hrcDtvg9xfkWWo+1tRWfnd1Tt2RIztfuj8Orfb2akowyiJDmeMVGE8Z8eslQ5HfhTynr6MkRL6iY0qixf4/R8KeXtfGkmZxoqKfNvx46NVVZ3KFTaVMnohVnMKOpciOgXHAVBva+3qECAv0iqobTvhUZFVUHd756EDouEdWt3/6d/qsrKSaKSzgkVpGVF4KeekBJ16YGFu5N2gAjgPTK4Y8yjt4Go+UdXUM8pijLD286Jc3bjK5bpsQSDwvgno1YMHDwn3hH7JOa2kCi+JD8SNgQ2G8Q/lAZ9Tg0l0yAS8AqfMCVtpmJSgNNpjbIFFunXd0KFLqo8caZUyuVC+ZInStGLp5ZQo46D7XIzwklBXx9CYTvSMMcskxyFpxqlQ2oH6XZSSb9D+e7jI/aABrih5nHHMj9eg/kyp20DtcJXPoHymCeiIGh4PcJ/SIIwPSh9IxpEYVBuyAHmtzZG/kJCgxlWYbYhKVIMEsUcikVIw+gXo1555Jp9w+nfGmdjmJ5co/R7z/0KhyjaAeAeMyU0VelddW6ApncJPp0x5bPueb1ZhcecmywC/M2BMpb18dKPHeQth/EkIOJIb9bUM/4TV5nPrfe1vG9s0uVy/YYQtlzwsRPeEyirn1K1beyQvVxrbleHFcE31mAPcQdrUinF+Dplt1Ea/VAj7ykUdO6/1eo/LFg3uQRtgX7MBkkoUOqvOF/yXrEumAszOUNdh6LOZ6ijZUu9vn26yaCEAZc82lDi3EpU/iU4uMDYCMPsxuPWMkxYFy47Vvh9/55hkCPVzO7ms3tv+HyNf5BGRVBk3Btpu6k+QRR83HDt2FOS368rL7+/oOn4NtvkszuhEgOUGvw3b/x0bp2vnBwJfCPlMSbQBcGLINsrISmSr0skL94fD/gBQGWWUUbhynyj3Alow671BAdL0Bs+gK+DvLqScHybUtrnW59sh6mVq8Hg+Iyy6T5bFylMbmVMXay/ZBsrGGAqEKso6YzmbPA6ZS6KUPYyJvDh+zJiVyQtWfeBAN/Stjf9pqsXBGOrumFsbCJ4Q5HVz5tg6W96ZpMGM1jCSAZqSDP8oJ0exKAmgKdlZ6w9sFk1gmOmT2Pp1vsAfa/3Blckgi1b1Pt9+hGlBXQOljybHj3pdLFNpKPc4Cvl6QzmrLLfbD+OAHi9c0fY9u1+Bn8w7kYJ5Bw+2wTyXNXic159INtTSMhY+t1DKAajnZD4tpcR0UcHu3yhlMwIthdJRDAQ7MzYYWPMxHHx/yiQLXzM6UU/fv3Ff0J8oZ5er8Xq/hpndJVpB71U4jFqai4szHoJwfQj5aQhgN4hLVqYeVcrPk/VwNyFH3oDlspyB6v5dk6H0WymbE9Brhg8Xh03M/SjKStwEO6XiZLqqpKQMPH37CV+ZLJNtefSkSS+Ig1e0w6JfrLLoR6vc7pHp9AjDgBsU8X0B4T2a70wnC5mZsg6rsyLu+yUrNeXEBDTlLCwFcwI6Gg7rPpdTvlkqTUUpYwZrhoSdpj3BU7VPxZuxaZMI67/W63AQIXxcI/yrzjNkVhUXT4MPjUVTPL3bFPG4BBq74GCR3fGgQU36LKVpDS3lYZhek7mGqer5kqPQeLAsGUkUE6xIsKiv9pj/izqYda4JetuNOuBGpne3tMwD7/lm7DjW1XGvotifqGlrO4j4OnELpXSDsV3TYOcY2qMUMrv9WPPy5WOgV+xWeBqysLq1tcMomy6PHRMx1XFFX/CTtuhmj/NXnLA/SMXYwoNkPhVVuVoh+di/WzR/KRm5UX0yUo3KWb3IL7jlFj+An6KqPd81ul3Pc86qNRlKD1RMnPxPKa9RRlxo18R7wocZVz8UPJgBDk8+tMnjvFzE5yb5FAUYmxloJRFTZ23RjaWlp/NoeLnK+CxjXyxKyo3l5Dxe9EYxPYim2kSSZU6mDDAQ1psTeJMFhy5ZwjaUlV3r7e5YDZBvlFKwrhfjbkeySK03uBWFcxrd7qsIV1+DTpycpBgLhfsEJ6FIiDS6nOJw24S4dP2Eysq3kkNKnAARISsTLFzHt88WLU50BORPY8V3AC8NZExIX0FYadpDSHSMG32FHADl9GOZz5lSHkrWgVhIn6B4OcSThHAZwp9rCQAsxlxWpzo4cVhWCZBx7b4V0W8tdup3ejvC4VL4zZyrr27bs3tvo9v5a82fS4HeVA850wKtPdB4POMaPa56PIW+iu23F6t1O3RpjcVpjwvH76VuDG6EzKeiiANHxfmsIC+v160xVZu+8BARmHx0vE2bsS3eypegrIMvgMRc5kUJ24n53S1lXxjirASQD2Bur4gbcn0g0Fw4vPwshSgLTfcF0YCTMizYyqblSz/ALh8aY0GvIWHR9D61jHZPD3fXo/OzYA1DID0SCsZgF+Qb2ulZ+NdO3BhnY4tVSCYGOEzmU1JKy7VtRcmuvh4uKfX0ZppCKlEtbmhSDJHG+TCSm0VZUZRFOBDnAKTY0wLCPIC1DNY91u4gj0Qi/HVs/w67I/82+RAWfy9fAR+9NtQTegxtb5K6BQVG04ka/h2yC4GbcDd6wuueDrRm0R3h7nvQ4SMQqoWiWWiMZ8Y0IMOSFWqbWev3fwS9FVIr3IG2qrJspOL0h/6Bcd6nxrpc85hAL4tGqHlE6lVZz+MArxOuoLrWF1hmdwz8BSx2r6zXKJ5r1TDfhQtQPuZ2ZfIvQ0JGxNF4HJqv2OhlmPceU3tGT4vrcRj5RovWgC4iykMw+n8bhdLkj5I8OqPG59si6nG46bcrLJInTRvCurrKZJ14fpT5fqGc97ZoQnE9jydO3hjA6Xi4gpcER4Co5NHrYH36+aJJKmSNx543MdVTQ1yTRsQTQ2lB4QQ48ad0PiWHRB4LqF/ZRRnnkh4RaUBX+/3BorIRF6PzpfgzPRiLBiJByXt5dsfkutbA5zGOxpuo56n5pyzJF5QqDD8cxBIuZztlvj8oU2hXsh7MYb/k1QXaH7wxEPhelgWtaQ18Bt/+hJGH8pvGJ1JjXXJeHLB1/sCdcEX3oK+mgba8p4UMM7yNiDLA1fAVed2HxH3RYvyA2ozb1b2A5zo4IAcC9i1wbo/j4ftl0UAm7d03EpogywDQtG0kX1A8oJfKss3B+hVohfNuWI4pYSz7TIwUhaIi/lBnB8WbNR72MURqJ1m7NLiivySpdhnLiDuhOpZ0oCWjxu8XW3u++Nt46aX25HhTyoWjkZ9rp3ecgWNcD5+kTIJSDCB2TNj5gF4WmJDLPodfedFvTLfemib5YL0ikRGfBDS6XA+g7VJEFPfVHguKGDmnBFSHG0cCI9VtQDftVD2kA1mTZfzqpDaJ59KkCkQpYckKRaNpLV/KZEOxwLofFO2EdTpOY1/2RUfFpElP2fKUqXX+4KN9kT+RDA7hcpMMTbi1XhZtEkxTWDXEORqn9FXm6vTbFSGj/hxKiSoOUN2HmnVkX7LbHO9Goz0BuABt26KvnX19fo0b0mfZ99q7hfaZAleHmSyacO2QFNIZLbq3uhhHjZCHodBkmdgmG9PJFyp5LbDqbq2e8/v78kifTlcyf77X+19Er+LmpyVENQ0yfyppF+eXABPdJ2t9U6K7o6yBbvR4puGQrE6eBLORN5N5sqxdUDhZLcqIzy/c/u03b4lbmKzPlU6oPP0lLOQ+/G0uKCjSIoBcdWbTXlzlGWV/Tm6Dl4BdkmdeAclNQ5/3eMojXN0CtEy+CBN8ByfwlaDGnWPS0ljhcvEg+xjn1th4RQ92wScwgo9xxd3GbPyATaXRKKUMn1uVMIWfAW1VkBUuwY8L0Zu1gcCrJqWGwvqSktOuwXNmpjEYxHPKvlFVNcDr9U7DSTcKfvl8THo+MIldWuKaAWwbQssS2VGfgdZ8EGEf4Ianh3SaEgTruG1NTnWbkp1Iuga/soSiPa/An54redlRurEof+D1/fXBTXZ9J6Qbip0/QzzRnGxwCQmYDyWv1/nbZ0ten1wH3gvGdqYAWSjLz8s/py8giw7neb2HCmdefgHebe+E5Z3EgchndIS63+5PHy+ByIbWtwXfG3325NHiwpKuHaz8LWNdRouG9dLmYlc9Au8VWL0C2RAgbcYB9HCdr92kTNb3ha4bN87ReeTgDfh+pAaeu/dBkkGJYqdT4+/HGaROTRUepNYCG9OZBXy6Cwt5ufHz3bRA44ulOZwRvEpx8YgexRX8Q3yts4HY8jbUtbbu7s9p4PuQEYjtZ+IGeREGNA5n91BYhBuPMgWgGLcWsYhPBXZjgV+u9QVXgoeqHz4953KdjedWXOlNEcey+kD7IuPoUgItHvnx6oVHGLodzd+jg+jbdXsDAWNDK59AAJ+OwV+TBYIDg3y5pKBwvvxUOSFl5XJGQDxVNLkHzUOYd1HOyiwFFgIWAhYCFgIWAhYCFgIWAhYCFgIWAhYCFgIWAhYCFgIWAhYCpxiB/wFPrXpct6WH7AAAAABJRU5ErkJggg==",
      header_img2:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAPFBMVEUAAACampqampqampqkpKSampqZmZmZmZmZmZmampqZmZmbm5uampqZmZmampqgoKCZmZmZmZmZmZmZmZnxEDpHAAAAE3RSTlMAQtiKCszp8+K/dmtTPCYVhe+oUAggIwAAALpJREFUKM+FU9kOwyAMg3BTCm39//86jU1NT+IXhGxicinGbBKFQMnM6gE2e+zw2V75EgEyulpbtSEgljO/AE7zVTtgOfIbMKkTJmA7vl/11VOvHKMAzLMCKP//R45/dom/XDKceoRD7qdng6uJ7/UDqRcQvjU1MI/sTiV2uHukHqe+CWp3D7BvAosgCkQL8ZNimmKhpFKLzRLbLQ2MMHK+jYd2BbXh2DcCteHidMVg9brCqeHyNkdKxAeG9gwGFxIALwAAAABJRU5ErkJggg==",
      banner_img: [
        require("../img/a.jpg"),
        require("../img/b.jpg"),
        require("../img/c.png"),
        require("../img/d.png"),
        require("../img/e.png"),
        require("../img/f.jpg"),
        require("../img/g.jpg"),
        require("../img/h.jpg"),
      ],
      nav_menu: [
        {
          img: require("../img/1.png"),
          text: "线装古籍"
        },
        {
          img: require("../img/2.png"),
          text: "民国旧书"
        },
        {
          img:require("../img/3.png"),
          text: "民人墨迹"
        },
        {
          img:require("../img/4.png"),
          text: "古玩杂项"
        },
        {
          img:require("../img/5.png"),
          text: "全部分类"
        }
      ],
      module_two_menu: [
        {
          img:require("../img/6.png"),
          text: "今日上新",
          content: "发现新上好书"
        },
        {
          img:require("../img/7.png"),
          text: "书店排行榜",
          content: "发现口碑好店"
        },
        {
          img:require("../img/8.png"),
          text: "新书频道",
          content: "发现孔网新书"
        },
        {
          img:require("../img/9.png"),
          text: "藏书单",
          content: "为你推荐好书"
        }
      ],
      module_three_menu_left: {
        img:require("../img/10.png"),
        text: "全部拍卖",
        content: "日余4万件拍品"
      },
      module_three_menu_right: [
        {
          img:require("../img/11.png"),
          text: "艺术品专场",
          content: "名人字画墨迹等"
        },
        {
          img:require("../img/12.png"),
          text: "低价拍卖",
          content: "1元起拍捡漏"
        }
      ],
      module_two_menu_2: [
        {
          img:require("../img/13.png"),
          text: "珍品拍卖",
          content: "古籍善品"
        },
        {
          img:require("../img/14.png"),
          text: "今日热点",
          content: "每日必看"
        },
        {
          img:require("../img/15.png"),
          text: "大众拍卖",
          content: "大家都在拍"
        },
        {
          img:require("../img/16.png"),
          text: "三天热点",
          content: "热拍推荐"
        }
      ],
      data_1: "",
      data_2: "",
      data_3: "",
      data_4: { d4_1: [], d4_2: [], d4_3: [] },
      data_5: {
        d1: [],
        d2: [],
        d3: [],
        d4: [],
        d5: [],
        d6: [],
        d7: [],
        d8: []
      },
      currentindex: [0, 1, 2],
      commandlist: []
    };
  },
  components: {
    titleCon
  },
  async created() {
    let { data: data_1 } = await this.$axios.get(
      "http://114.215.146.121:1911/home/home1"
    );
    this.data_1 = data_1.data;
    let { data: data_2 } = await this.$axios.get(
      "http://114.215.146.121:1911/home/home2"
    );
    this.data_2 = data_2.data;
    let { data: data_3 } = await this.$axios.get(
      "http://114.215.146.121:1911/home/home3"
    );
    this.data_3 = data_3.data;
    let { data: data_4 } = await this.$axios.get(
      "http://114.215.146.121:1911/home/home4"
    );
    this.data_4.d4_1 = data_4.data.slice(0, 11);
    this.data_4.d4_2 = data_4.data.slice(12, 23);
    this.data_4.d4_3 = data_4.data.slice(24, 35);
    let {
      data: { data: data_5 }
    } = await this.$axios.get("http://114.215.146.121:1911/home/home5");
    this.data_5.d1 = data_5.slice(0, 9);
    this.data_5.d2 = data_5.slice(10, 19);
    this.data_5.d3 = data_5.slice(20, 29);
    this.data_5.d4 = data_5.slice(30, 39);
    this.data_5.d5 = data_5.slice(40, 49);
    this.data_5.d6 = data_5.slice(50, 59);
    this.data_5.d7 = data_5.slice(60, 69);
    this.data_5.d8 = data_5.slice(70, 79);
    let {
      data: { data: commandlist }
    } = await this.$axios.get("http://114.215.146.121:1911/home/home6");
    this.commandlist = commandlist;
    this.$store.getters.currentState = true;
  },
  methods: {
    changeCurrenindex(event) {
      if (event.target.id == "boxd1") {
        this.currentindex = this.currentindex.map(item => {
          window.console.log(this.currentindex, item);
          if (item > 9) {
            item = 0;
            return item;
          }
          return item + 3;
        });
      }
    },
    goto(name) {
      this.$router.push(name);
    }
  }
};
</script>
<style scoped>
main {
  overflow: hidden;
}
.search_bar {
  padding: 0.24rem 0.3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.search_bar .logo {
  width: 1.2rem;
  font-size: 0;
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
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
  width: 8.08rem;
  height: 0.68rem;
  border-radius: 0.68rem;
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
.banner {
  width: 100%;
  height: 5.4rem;
}
.banner img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.nav {
  width: 8.9rem;
  margin: 0 auto;
  padding-top: 0.28rem;
  padding-bottom: 0.56rem;
}
.nav ul {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}
.nav .inner li {
  float: left;
  width: 20%;
  height: 1.26rem;
  font-size: 0.22rem;
  color: #666;
  text-align: center;
  margin-top: 0.28rem;
}
.nav .inner li .img_box img {
  width: 0.88rem;
  height: 0.88rem;
}
.module-two {
  width: 100%;
  margin-bottom: 0.06rem;
}
.module-two .inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 8.9rem;
  margin: 0 auto;
}
.module-two .inner .box {
  width: 50%;
  height: 1.32rem;
  background: #fafafa;
  border-radius: 0.08rem;
  margin-bottom: 0.06rem;
}
.module-two .inner .box .img_box {
  float: right;
  width: 1.04rem;
  height: 1.04rem;
  text-align: center;
  line-height: 1.04rem;
  margin-top: 0.14rem;
  margin-right: 0.2rem;
  border-radius: 0.08rem;
  font-size: 0;
}
.module-two .inner .box .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.module-two .inner .box .title {
  float: left;
  margin-top: 0.24rem;
  margin-left: 0.2rem;
}
.module-two .inner .box .title p:first-child {
  width: 2.2rem;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.42rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.22rem;
  overflow: hidden;
}
.module-two .inner .box .title p:nth-child(2) {
  width: 2.2rem;
  height: 0.33rem;
  line-height: 0.38rem;
  font-size: 0.28rem;
  color: #999;
  overflow: hidden;
}
.line_gray .box {
  height: 0.16rem;
  background: #f3f3f3;
}
.area {
  width: 100%;
  padding-bottom: 0.3rem;
}
.area .title {
  line-height: 0.54rem;
  padding: 0.5rem 0.3rem 0;
  font-size: 0.38rem;
  color: #262626;
}
.module-three {
  width: 100%;
  margin-bottom: 0.06rem;
}
.module-three .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 8.9rem;
  margin: 0 auto;
}
.module-three .inner .l {
  width: 50%;
  height: 2.7rem;
  background: #fafafa;
  border-radius: 0.08rem;
}
.module-three .inner .r {
  width: 50%;
  height: 2.7rem;
  overflow: hidden;
}
.module-three .inner .l .title {
  width: 3.42rem;
  padding-top: 0.24rem;
  padding-left: 0.2rem;
}
.module-three .inner .l .img_box {
  width: 3.02rem;
  height: 1.38rem;
  text-align: center;
  line-height: 1.04rem;
  margin-top: 0.11rem;
  margin-left: 0.2rem;
  font-size: 0;
  border-radius: 0.08rem;
  overflow: hidden;
}
.module-three .inner .r .box .title {
  float: left;
  margin-top: 0.24rem;
  margin-left: 0.2rem;
}
.module-three .inner .r .box .img_box {
  float: right;
  width: 1.04rem;
  height: 1.04rem;
  text-align: center;
  line-height: 1.04rem;
  margin-top: 0.14rem;
  margin-right: 0.2rem;
  border-radius: 0.08rem;
  font-size: 0;
}
.module-three .inner .r .box .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.module-three .inner .l .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.module-three .inner .l .title p:first-child {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.42rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.08rem;
  overflow: hidden;
}
.module-three .inner .l .title p:nth-child(2) {
  width: 100%;
  height: 0.33rem;
  line-height: 0.33rem;
  font-size: 0.28rem;
  color: #999;
  overflow: hidden;
}
.module-three .inner .r .box .title p:first-child {
  width: 1.8rem;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.42rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.08rem;
  overflow: hidden;
}
.module-three .inner .r .box .title p:nth-child(2) {
  width: 1.8rem;
  height: 0.33rem;
  line-height: 0.33rem;
  font-size: 0.28rem;
  color: #999;
  overflow: hidden;
}
.free_mode {
  width: 1000rem;
  overflow: hidden;
  margin: 0 0.5rem;
}
.swiper-slide {
  float: left;
  position: relative;
  display: flex;
  flex-direction: column;
}
.free_mode .swiper-slide .box {
  width: 2rem;
  overflow: hidden;
  margin-right: 1rem;
}
.free_mode .swiper-slide .box .img_box {
  width: 100%;
  height: 2.8rem;
  text-align: center;
  line-height: 2.8rem;
  font-size: 0;
  background-size: 100% auto;
}
.free_mode .swiper-slide .box .title {
  width: 2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  color: #262626;
  overflow: hidden;
  margin-top: 0.16rem;
}
.free_mode .swiper-slide .box .author {
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.22rem;
  color: #999;
  overflow: hidden;
  margin-top: 0.08rem;
}
.free_mode .swiper-slide .box .price {
  height: 0.42rem;
  line-height: 0.42rem;
  margin-top: 0.07rem;
}
.free_mode .swiper-slide .box .img_box img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.free_mode .swiper-slide .box .price span {
  font-size: 0.3rem;
  color: #9e100e;
}
.tuijina_list {
  width: 1000rem;
  overflow: hidden;
  margin: 0 0.8rem;
}
.tuijina_list .box .img_box {
  width: 100%;
  height: 3.1rem;
  line-height: 3.1rem;
  text-align: center;
  font-size: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAFACAMAAADUPQn7AAAAOVBMV…AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAKjVT5soFk2cgAAAABJRU5ErkJggg==)
    no-repeat center 0;
  background-size: auto 100%;
}
.tuijina_list .box {
  width: 6.7rem;
  padding-bottom: 0.3rem;
  background: #fff;
  border-radius: 0.08rem;
  -webkit-box-shadow: inset 0 0 0 1px #f3f3f3;
  box-shadow: inset 0 0 0 1px #f3f3f3;
  overflow: hidden;
}
.tuijina_list .box .img_box img {
  display: inline-block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.newSquareBox_list {
  width: 100%;
}
.newSquareBox_list .inner {
  width: 8.9rem;
  margin: 0 auto;
}
.newSquareBox_list .inner li {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.newSquareBox_list .inner li .l {
  position: relative;
  width: 3rem;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  font-size: 0;
}
.newSquareBox_list .inner li .l img {
  max-width: 100%;
  max-height: 100%;
}
.newSquareBox_list .inner li .l .price {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0.45rem;
  min-width: 1.12rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  padding: 0 0.14rem 0 0.04rem;
  border-radius: 0 0.7rem 0.7rem 0;
}
.newSquareBox_list .inner li .l .price span:nth-child(2) {
  font-size: 0.3rem;
}
.newSquareBox_list .inner li .r {
  width: 5.6rem;
  height: 4rem;
  border-bottom: 1px solid #f3f3f3;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .title {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 700;
  color: #262626;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .desc {
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  color: #999;
  text-align: justify;
  line-height: 0.36rem;
  margin-top: 0.2rem;
  overflow: hidden;
}
.newSquareBox_list .inner li .l .price span:first-child {
  font-size: 0.26rem;
}
.item-list .inner li .l {
  position: relative;
  width: 3rem;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  font-size: 0;
}
.item-list .inner li .r {
  width: 5.6rem;
  height: 3rem;
  border-bottom: 1px solid #f3f3f3;
  overflow: hidden;
}
.item-list .inner {
  width: 8.9rem;
  margin: 0 auto;
}
.item-list .inner li {
  width: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-list .inner li .r .title {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.3rem;
  font-weight: 700;
  color: #262626;
  margin-top: 0.2rem;
  overflow: hidden;
}
.item-list .inner li .r .author,
.item-list .inner li .r .desc {
  width: 100%;
  height: 0.72rem;
  font-size: 0.24rem;
  line-height: 0.36rem;
  overflow: hidden;
  margin-top: 0.2rem;
}
.item-list .inner li .r .desc {
  color: #999;
  text-align: justify;
}
.change_box {
  width: 100%;
  font-size: 0.26rem;
  color: #365899;
  padding-top: 0.4rem;
}
.item-list .inner li .l .price {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0.45rem;
  min-width: 1.12rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  padding: 0 0.14rem 0 0.04rem;
  border-radius: 0 0.7rem 0.7rem 0;
}
.change_box .box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.4rem;
  line-height: 0.4rem;
}
.item-list .inner li .l .price {
  font-size: 0.3rem;
}
.book-list {
  width: 1000rem;
  overflow: hidden;
  margin: 0 0.5rem;
}
.book-list .swiper-slide .box {
  width: 2rem;
  overflow: hidden;
  margin-right: 0.4rem;
}
.book-list .swiper-slide .box .img_box {
  width: 100%;
  height: 2.8rem;
  text-align: center;
  line-height: 2.8rem;
  font-size: 0;
  background-size: 100% auto;
}
.book-list .swiper-slide .box .title {
  width: 2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  color: #262626;
  overflow: hidden;
  margin-top: 0.16rem;
}
.book-list .swiper-slide .box .author {
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.22rem;
  color: #999;
  overflow: hidden;
  margin-top: 0.08rem;
}
.book-list .swiper-slide .box .price {
  height: 0.8;
  line-height: 0.8rem;
  margin-top: 0.07rem;
}
.book-list .swiper-slide .box .img_box img {
  display: inline-block;
  max-width: 120%;
  max-height: 100%;
}
.book-list .swiper-slide .box .price span {
  font-size: 0.3rem;
  color: #9e100e;
}
#recommend_list ul {
  width: 8.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
#recommend_list ul li {
  width: 3.4rem;
  height: 5.42rem;
  background: #fff;
  border-radius: 0.08rem;
  margin: 0.2rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
#recommend_list ul li .img_box {
  width: 3.46rem;
  height: 3.46rem;
  text-align: center;
  line-height: 3.46rem;
  font-size: 0;
}
#recommend_list ul li .img_box img {
  display: inline-block;
  max-width: 120%;
  max-height: 100%;
}
#recommend_list ul li .img_box {
  width: 3.46rem;
  height: 3.46rem;
  text-align: center;
  line-height: 3.46rem;
  font-size: 0;
}
#recommend_list ul li .title {
  width: 3.06rem;
  height: 0.8rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  overflow: hidden;
  margin: 0.14rem auto 0;
}
#recommend_list ul li .middle_box {
  width: 3.06rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin: 0.04rem auto 0;
}
#recommend_list ul li .middle_box .phase {
  float: left;
  padding: 0 0.1rem;
  height: 0.36rem;
  font-size: 0.22rem;
  color: #999;
  background: #fafafa;
  border-radius: 0.08rem;
}
#recommend_list ul li .middle_box .address {
  float: right;
  font-size: 0.22rem;
  color: #999;
}
#recommend_list ul li .price {
  width: 3.06rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
  color: #9e100e;
  margin: 0.06rem auto 0;
  font-size: 0.24rem;
}
.no-more .inner {
  text-align: center;
  line-height: 0.3rem;
  padding: 0.4rem 0;
  font-size: 0.26rem;
  color: #c2c2c2;
  background: #f8f8f8;
  height: 2.3rem;
}
</style>