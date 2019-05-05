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
                <img :src="imglist[0].thumb_path" alt>
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
                    <a href="javascript:;" :class="{selected:index==1}" @click="index=1">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" :class="{selected:index==2}" @click="index=2">商品评论</a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-content entry"
                style="display: block;"
                v-html="goodsinfo.content"
                v-show="index==1"
              ></div>

              <div class="tab-content" style="display: block;" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(value,index) in commentMessage" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{value.user_name}}</span>
                          <span>{{value.reply_time|formatTime}}</span>
                        </div>
                        <p>{{value.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">
                      <!-- <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total='totalcount'
                      ></el-pagination>-->
                      <!--分页插件 -->
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount"
                      ></el-pagination>
                    </div>
                  </div>
                </div>
              </div>
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


export default {
  data: function() {
    return {
      hotgoodslist: "",
      goodsinfo: "",
      imglist: "",
      index: 1,
      comment: "",

      // 获取分页评论内容
      pageIndex: 1,
      // 每页显示的条数
      pageSize: 10,
      //评论的总页数
      totalcount: 0,
      //评论条数(数组)
      commentMessage: ""
    };
  },
  name: "detail",
  created() {
    const id = this.$route.params.id;
    // 使用抽取出来的axios
    this.$axios
      .get("/site/goods/getgoodsinfo/" + id)
      .then(response => {
        console.log(response);
        this.hotgoodslist = response.data.message.hotgoodslist;
        this.goodsinfo = response.data.message.goodsinfo;
        this.imglist = response.data.message.imglist;
      });
    //页面已加载就调用分页评论的方法
    this.getComment();
  },
  filters: {
    formatTime: function(value) {
      return monent(value).format("YYYY年MM月DD日");
    }
  },
  methods: {
    postComment: function() {
      this.$axios
        .post(
          `/site/validate/comment/post/goods/${
            this.$route.params.id
          }`,
          { commenttxt: this.comment }
        )
        .then(response => {
          // console.log(response);
          if (this.comment == "") {
            alert("请输入评论");
            return;
          }
          if (response.data.message === "评论成功") {
            this.$message({
              message: "评论成功",
              type: "success"
            });
            this.comment = "";
          }
        });
    },
    // 获取分页评论
    getComment: function() {
      this.$axios
        .get(
          `/site/comment/getbypage/goods/${
            this.$route.params.id
          }?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then(response => {
          console.log(response);
          this.totalcount = response.data.totalcount;
          console.log(this.totalcount)
          this.commentMessage = response.data.message;
        });
    },
    // 饿了吗提供的页码事件:页容量改变
    handleSizeChange: function(val) {
      this.pageSize = val;
      // 重新调用数据
      this.getComment();
    },
    // 饿了吗提供的页码事件:当前页改变
    handleCurrentChange: function(val) {
      this.pageIndex = val;
      this.getComment();
    }
  }
};
</script>

<style>
.pic-box img {
  width: 300px;
}
.ql-align-center img {
  display: block;
}
p img {
  display: block;
}
</style>
