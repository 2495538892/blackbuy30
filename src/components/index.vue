<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>手机数码</span>
                    <p>
                      <span>手机通讯&nbsp;</span>
                      <span>摄影摄像&nbsp;</span>
                      <span>存储设备&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>电脑办公</span>
                    <p>
                      <span>电脑整机&nbsp;</span>
                      <span>外设产品&nbsp;</span>
                      <span>办公打印&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">电脑办公</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">电脑整机</a>
                        <a href="/goods/43.html">外设产品</a>
                        <a href="/goods/43.html">办公打印</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>影音娱乐</span>
                    <p>
                      <span>平板电视&nbsp;</span>
                      <span>音响DVD&nbsp;</span>
                      <span>影音配件&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">影音娱乐</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">平板电视</a>
                        <a href="/goods/43.html">音响DVD</a>
                        <a href="/goods/43.html">影音配件</a>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li>
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>服装类</span>
                    <p>
                      <span>男装&nbsp;</span>
                      <span>女装&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">服装类</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">男装</a>
                        <a href="/goods/43.html">女装</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <el-carousel height="341px">
              <el-carousel-item v-for="item in sliderlist" :key="item.id">
                <img :src="item.img_url" alt class="slider-img">
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <li v-for="(value,index) in toplist" :key="index">
                <div class="img-box">
                  <label>{{index+1}}</label>
                  <img :src="value.img_url">
                </div>
                <div class="txt-box">
                  <a href="/goods/show-98.html">{{value.title}}</a>
                  <span>{{value.add_time |formattime }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 循环商品列表 -->
    <div class="section" v-for="(value,index) in shopmessage" :key="index">
      <div class="main-tit">
        <h2>{{value.catetitle}}</h2>
        <p>
          <a
            href="/goods/43.html"
            v-for="(item,i) in value.level2catelist"
            :key="i"
          >{{item.subcatetitle}}</a>
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(item2,i) in value.datas" :key="i">
              <!-- <a href="#/site/goodsinfo/87" class> -->
              <router-link :to="'/detail/'+item2.artID">
                <div class="img-box">
                  <img :src="item2.img_url">
                </div>
                <div class="info">
                  <h3>{{item2.artTitle}}</h3>
                  <p class="price">
                    <b>{{item2.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{item2.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{item2.market_price}}</s>
                    </span>
                  </p>
                </div>
              </router-link>
              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import monent from "moment";
export default {
  data: function() {
    return {
      catelist: "",
      sliderlist: "",
      toplist: "",
      //商品列表数据
      shopmessage: ""
    };
  },

  created() {
    //使用抽取出来的axios
    this.$axios
      .get("/site/goods/gettopdata/goods")
      .then(response => {
        // console.log(response);
        this.catelist = response.data.message.catelist;
        this.sliderlist = response.data.message.sliderlist;
        this.toplist = response.data.message.toplist;
        // console.log(this.sliderlist)
      });

    this.$axios
      .get("/site/goods/getgoodsgroup")
      .then(response => {
        console.log(response);
        this.shopmessage = response.data.message;
      });
  },
  name: "index",
  filters: {
    formattime: function(value) {
      console.log(value);
      // return value.split('T')[0]
      return monent(value).format("YYYY年MM月DD日");
    }
  }
};
</script>

<style>
.slider-img {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
