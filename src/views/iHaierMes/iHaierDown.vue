<template>
  <div class="app-container">
    <!-- <div class="demo-image__lazy">
     <el-image style="width: 100px; height: 100px" src="@/assets/images/ihaieroperate.png"></el-image>
    </div> -->
    <div style="width: 100%;height: 100%" class="imgDiv">
      <img src="@/assets/images/iHaierdown.png" alt="iHaierMes"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style  lang="scss" scoped>
.line{
  text-align: center;
}
.app-container{
    width: 100%;
    height: calc(100vh - 80px);
    .imgDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
        display: inline;
        width: 80%;
        }
    }
}
</style>
