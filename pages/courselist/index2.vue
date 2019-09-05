<template>
  <div class="courselist">
    vue2.index.jsx
    <ul>
      <li v-for="(course, index) in courseLists" :key="index">
        {{course.title}}
        【￥{{course.price}}】
      </li>
    </ul>
    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.getCourseLists()
  },
  computed: {
    ...mapState({
      courseLists: (state) => {
        return state.course.courseLists
      }
    })
  },
  methods: {
    ...mapActions([
      'getCourseLists'
    ])
  }
}
</script>


<style lang="scss" scoped>
  .courselist {
    min-height: 100vh;
    background: lightblue;
    padding: 12px;
  }
</style>


  