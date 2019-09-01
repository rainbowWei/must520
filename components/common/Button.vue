<template>
  <el-button @click="toGo" round plain>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'RButton',
  props: {
    href: {
      type: String,
      default: 'https://www.xingxiwang.com'
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toGo() {
      window.location.href = this.href
    }
  }
}
</script>

