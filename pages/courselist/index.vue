<template>
  <div>
    <div class="self-carousel">
      <el-carousel class="carousel" :interval="2000" arrow="always" :autoplay="true">
        <el-carousel-item class="xxxx" v-for="item in courseclassifies" :key="item.id">
          <h3>{{ item.cate_name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="course">
      <h3>
        <i></i>认证课程
      </h3>
      <ul class="course-classify">
        <span>课程分类：</span>
        <li
          v-for="courseclassif in courseclassifies"
          :key="courseclassif.id"
          :class="courseclassifyIndex==courseclassif.id ? 'active' : '' "
          @click="()=>handleTabClassify(courseclassif.id)"
        >{{courseclassif.cate_name}}</li>
      </ul>
      <ul class="course-list">
        <li v-for="newcourse in newsCourseList" :key="newcourse.id">
          <nuxt-link :to="`/courselist/detail/${newcourse.id}`">
            <div class="course-img">
              <img :src="newcourse.cover" alt="">
            </div>
            <div class="course-con">
              <div class="course-title">{{newcourse.course_name}}</div>
              <div class="synopsis">
                <span>课程简介：</span>
                {{newcourse.intro}}
              </div>
              <div class="course-bottom">
                <div class="speaker">
                  <span>主讲人：</span>
                  {{newcourse.teachername}}
                </div>
                <div class="duration">
                  <span>课程时长：</span>
                  {{newcourse.totlatime}}
                </div>
                <div class="price">￥{{newcourse.price}}</div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <el-pagination
        v-show="courseListPageInfo.total > courseListPageInfo.pageSize"
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="courseListPageInfo.currentPage"
        :page-size="courseListPageInfo.pageSize"
        layout="slot, prev, pager, next"
        :total="courseListPageInfo.total"
        :background="true"
      >
        <slot>
          <span class="total">共{{courseListPageInfo.total}}条</span>
        </slot>
        <slot>
          <span class="current">第{{courseListPageInfo.currentPage}}页</span>
        </slot>
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getCourseClassify, getCourseLists } from "@/api/course/course";
export default {
  data() {
    return {
      courseclassifies: [], //课程分类列表
      courseList: [], //课程列表数据带分页
      indicatorIndex: 0, // 走马灯当前活动的banner下标
      courseclassifyIndex: "", // 课程分类当前活动的下标
      pageInfo: {
        // 分页器参数
        total: 0,
        pageSize: 6,
        currentPage: 1
      }
    };
  },
  created() {
    this.handleGetCourseClassify();
    this.handleGetCourseList(this.courseclassifyIndex, 1);
  },
  computed: {
    // 课程列表数据
    newsCourseList() {
      return this.courseList.data || [];
    },
    // 课程列表的分页信息
    courseListPageInfo() {
      const courseList = this.courseList;
      const pageInfo = {
        total: courseList.total,
        pageSize: courseList.per_page,
        currentPage: courseList.current_page
      };
      return pageInfo;
    }
  },
  methods: {
    //渲染课程分类
    handleGetCourseClassify() {
      getCourseClassify().then(res => {
        if (res.data) {
          const courseclassifies = [].concat(res.data);
          // const  courseclassify = Object.assign([],res.data)
          courseclassifies.push({
            id: "",
            cate_name: "全部课程",
            sort: 0,
            status: "2",
            updated_at: null
          });
          this.courseclassifies = courseclassifies;
        }
      });
    },
    //渲染课程列表
    handleGetCourseList(id, page) {
      getCourseLists({
        categoryid: id,
        page: page
      }).then(res => {
        if (res.data) {
          this.courseList = res.data;
        }
      });
    },
    // 切换课程分类
    handleTabClassify(classifyId) {
      this.courseclassifyIndex = classifyId;
      this.handleGetCourseList(classifyId, 1);
    },
    // 切换走马灯下标
    handleChangeCarouselIndex(i, j) {
      this.indicatorIndex = i;
    },
    // 指示器点击事件
    handleClick(indicatorIndex) {
      console.log(indicatorIndex, "++++");
    },

    //分页器

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.handleGetCourseList(this.courseclassifyIndex, val);
    }
  }
};
</script>

<style lang="scss" scoped>
.course {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  h3 {
    height: 41px;
    line-height: 41px;
    font-size: 34px;
    color: $primary-color;
    position: relative;
    margin: 45px 0 40px;
    text-indent: 54px;
    i {
      width: 41px;
      height: 42px;
      // background: url($imgurl+'/sprite.png') no-repeat ;
      @include imgurl("/sprite.png");
      background-position: -297px -168px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .course-classify {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 24px;
    margin-bottom: 59px;
    line-height: 40px;
    li {
      padding: 0 12px;
      border: 1px solid #e7e8ed;
      border-radius: 8px;
      height: 40px;
      line-height: 40px;
      margin-right: 40px;
      cursor: pointer;
      &.active {
        color: #fff;
        background: $primary-color;
      }
    }
  }
  .course-list {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      @include size(384px);
      margin: 0 14px 70px 0;
      background: #fff;
      box-shadow: 1px 1px 3px #999;
      &:hover {
        box-shadow: 3px 3px 6px #999;
      }
      .course-img {
        width: 100%;
        height: 216px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .course-con {
        // width: 364px;
        padding: 0 10px;
        height: 168px;

        .course-title {
          font-size: 24px;
          margin: 29px 0 20px 0;
        }
        .synopsis {
          font-size: 12px;
          line-height: 24px;
          color: #646464;
        }
        .course-bottom {
          font-size: 12px;
          line-height: 12px;
          color: #646464;
          margin-top: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          .price {
            font-size: 18px;
            color: $primary-color;
          }
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .total,
    .current {
      margin-right: 8px;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>


