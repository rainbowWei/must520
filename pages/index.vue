<template>
  <div class="container">
    <div>
      <h1 class="title">
        must520
      </h1>
      <h2 class="subtitle">
        must official website for xingxiwang.com
      </h2>
      <div class="t">
        author: rainbow
      </div>

      <section>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success" plain>主要按钮</el-button>
        <el-button type="danger" round>主要按钮</el-button>
      </section>
      <p>自定义主题按钮OK</p>

      <p>图标OK</p>
      <r-icon name="el-icon-arrow-right" size="16" />
    </div>
    <r-logo />
  </div>
</template>

<script>
import RLogo from '@/components/common/Logo'
export default {
  components: {
    RLogo,
  },
  head: {
    title: '首页',
    meta: [
      { content: 'xxx', name: 'rainbow' }
    ]
  }
}
</script>

<style lang="scss" scoped>
  .container {
    color: #338;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .subtitle {
      color: #666;
      font-weight: bold;
      font-size: 12px;
    }
    .txt {
      background: yellowgreen;
    }
    p {
      margin-top: 16px;
    }
  }
</style>

