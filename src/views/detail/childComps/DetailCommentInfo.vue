<template>
  <div>
    <div v-if="Object.keys(commentInfo).length != 0">
      <div class="ComentHead">
        <div>用户评价</div>
        <div>更多</div>
      </div>
      <div class="CommentUser">
        <img v-lazy="commentInfo.user.avatar" alt="" />
        <div>{{ commentInfo.user.uname }}</div>
      </div>
      <div class="CommentText">
        <div>{{ commentInfo.content }}</div>
        <div>
          <div>{{ commentInfo.created | showDate }}</div>
          <div>{{ commentInfo.style }}</div>
        </div>
      </div>
      <div class="commentImage">
        <span v-for="(item, index) in commentInfo.images" :key="index"
          ><img v-lazy="item"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
import format from "date-format";
export default {
  filters: {
    showDate(value) {
      // 1. 将时间戳转成Date对象
      const date = new Date(value * 1000);
      // 2. 将data进行格式化
      return format("yyyy-MM-dd", date);
    },
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.ComentHead {
  display: flex;
  justify-content: space-between;
  padding: 10px 8px;
  font-size: 14px;
  color: #666;
  border-bottom: 3px solid #eee;
  border-top: 2px solid #eee;
}
.CommentUser {
  display: flex;
  justify-content: start;
  font-size: 13px;
  line-height: 22px;
  padding: 10px 8px;
}
.CommentUser > img {
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.CommentUser > div {
  margin-left: 5px;
}

.CommentText > div:first-child {
  font-size: 13px;
  color: #262626;
  padding: 0 8px;
}
.CommentText > div:last-child {
  display: flex;
  justify-content: start;
  padding: 10px 8px;
  font-size: 12px;
  color: #999;
}
.CommentText > div:last-child > div {
  margin-right: 10px;
}
.commentImage {
  display: flex;
  justify-content: start;
  padding: 0 8px;
}
.commentImage > span {
  margin-right: 6px;
}
.commentImage > span > img {
  height: 80px;
  width: 80px;
  border-radius: 6px;
}
</style>