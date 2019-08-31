<template>
  <div class="xxw-header">
    <r-logo />
    <ul class="nav">
      <li v-for="catalogue in catalogues" :key="catalogue.toUrl">
        <nuxt-link :to="catalogue.toUrl">{{catalogue.title}}</nuxt-link>
      </li>
    </ul>
    <r-user-avatar />
  </div>
</template>

<script>
import RLogo from '@/components/common/Logo.vue';
import RUserAvatar from '@/components/common/UserAvatar.vue';

export default {
  name: 'Header',
  components: {
    RLogo,
    RUserAvatar
  },
  data() {
    return {
      catalogues: [
        { toUrl: '/', title: '首页'},
        { toUrl: '/courselist', title: '课程列表'},
        { toUrl: '/newlist', title: '新闻列表'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .xxw-header {
    @include absCenter(false);
    background: $primary-color;
    padding: 8px;
    .nav {
      @include absCenter(false);
      li {
        margin: 0 5px;
        &:hover {
          background: $primary-color;
        }
      }
    }
  }
</style>


