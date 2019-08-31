<template>
  <div class="VueToNuxtLogo">
    rainbow
  </div>
</template>

<style lang="scss" scoped>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  background: chartreuse;
  @include size(40px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

</style>
