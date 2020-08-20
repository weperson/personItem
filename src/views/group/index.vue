<template>
  <div class="login-container">
    <div>
      <div style="background: #409EFF;height: 40px" class="divHeader">
        集团分为多个模块，为维护集团各个事业单位工作，集团开放了如下下系统
      </div>
      <el-tabs tab-position="left" style="height: 80vh;">
        <el-tab-pane label="集团门户网">
          <el-row>
            <el-col :span="20" class="colBanner">海尔集团门户网是为海尔员工提供综合服务的网站，具备如下功能：</el-col>
            <el-col :span="20" class="colBanner common">办公服务【开会、出差、权限申请、安防、文件呈报、集团办公】</el-col>
            <el-col :span="20" class="colBanner common">创客服务【强入小微、对赌并联、生活保障、抢单或退出、查询服务、时间管理】</el-col>
            <el-col :span="20" class="colBanner common">小微服务【初创期、成长期、成熟期】</el-col>
            <el-col :span="20" class="colBanner common">网络服务【应用报备、云计算、域名及证书、开放平台、IT支持】</el-col>
            <el-col :span="20" class="colBanner common">专题活动【创客专题、党群专题、后勤专题】</el-col>
            <el-col :span="20" class="colBanner common">专题文档【IT文档】</el-col>
            <el-col :span="20" class="colBanner common">场景服务【出勤、休假、对赌契约、报销，开会、出差、报需求找人等】</el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="捷办">捷办</el-tab-pane>
        <el-tab-pane label="小微E-HR平台">小微E-HR平台</el-tab-pane>
        <el-tab-pane label="COSMOPlat协同OA">COSMOPlat协同OA</el-tab-pane>
        <el-tab-pane label="商旅系统">商旅系统</el-tab-pane>
        <el-tab-pane label="CRM商学院">CRM商学院</el-tab-pane>
        <el-tab-pane label="TECHLAW平台">TECHLAW平台</el-tab-pane>
        <el-tab-pane label="COSMOPlat云文档">COSMOPlat云文档</el-tab-pane>
        <el-tab-pane label="COSMOPlat协同OA">COSMOPlat协同OA</el-tab-pane>
        <el-tab-pane label="COSMOPlat费用管理系统（KEMS）">COSMOPlat费用管理系统（KEMS）</el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    return {
    }
  },
  watch: {
    $route: {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.login-container{
    padding: 0 10px;
}
.divHeader{
   background: #409EFF;
   height: 40px;
   line-height: 40px;
   text-indent: 20px;
   font-weight: 600;
   color: white;
   font-size: 18px;
   margin-bottom: 10px;
}
.colBanner{
    height: 30px;
    border-radius: 5px;
    color: #353535;
    margin-bottom: 1px;
    line-height: 30px;
}
.common{
    background: #c3c7c2;
    padding-left: 10px;
    transition: all .5s linear;
    &:hover{
        background: #dddddd;
    }
}
</style>
