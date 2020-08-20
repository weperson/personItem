<template>
  <div class="wscn-container">
    <iframe src="http://vpn.haier.net/" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>

<style lang="scss" scoped>
.wscn-container{
  width: 100%;
  height: calc(100vh - 85px);
  iframe{
      width: 100%;
      height: 100%;
  }
}
</style>
