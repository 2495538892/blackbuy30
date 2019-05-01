<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <img :src="imglist[0].thumb_path" alt="">
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.sell_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.market_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <span role="button" class="el-input-number__decrease is-disabled">
                            <i class="el-icon-minus"></i>
                          </span>
                          <span role="button" class="el-input-number__increase">
                            <i class="el-icon-plus"></i>
                          </span>
                          <div class="el-input el-input--small">
                            <!---->
                            <input
                              autocomplete="off"
                              size="small"
                              type="text"
                              rows="2"
                              max="60"
                              min="1"
                              validateevent="true"
                              class="el-input__inner"
                              role="spinbutton"
                              aria-valuemax="60"
                              aria-valuemin="1"
                              aria-valuenow="1"
                              aria-disabled="false"
                            >
                            <!---->
                            <!---->
                            <!---->
                          </div>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    
                    <a href="javascript:;" class="selected">商品介绍</a>
                  </li>
                  <li>
                    <router-link to="/comment">商品评论</router-link>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" style="display: block;" v-html="goodsinfo.content"></div>
              <router-view></router-view>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(value,index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <a href="#/site/goodsinfo/90" class>
                        <img :src="value.img_url">
                      </a>
                    </div>
                    <div class="txt-box">
                      <a href="#/site/goodsinfo/90" class>{{value.title}}</a>
                      <span>{{value.add_time| formatTime}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import monent from "moment";
import axios from "axios";
export default {
  data: function() {
    return {
      hotgoodslist: "",
      goodsinfo:'',
      imglist:''
    };
  },
  name: "detail",
  created() {
    // console.log(this.$route)
    const id = this.$route.params.id;
    axios
      .get("http://111.230.232.110:8899/site/goods/getgoodsinfo/" + id)
      .then(response => {
        console.log(response);
        this.hotgoodslist = response.data.message.hotgoodslist;
        this.goodsinfo=response.data.message.goodsinfo;
        this.imglist=response.data.message.imglist;
      });
  },
  filters: {
    formatTime: function(value) {
      return monent(value).format("YYYY年MM月DD日");
    }
  }
};
</script>

<style>
.pic-box img{
  width: 300px;
}
.ql-align-center img{
  display: block;
}
p img{
  display: block;
}
</style>
