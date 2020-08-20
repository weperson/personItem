<template>
  <div class="dashboard-container">
    <video autoplay="autoplay" loop="muted" muted="muted" poster="../../assets/images/little.webp" style="height: 100%;width:100%;object-fit:cover;object-position:center center" class="bgvid" id="bgvid">
      <source src="../../assets/images/littleGirl.webm" type="video/webm">
      <source src="../../assets/images/littlegirl.mp4" type="video/mp4">
    </video>
    <el-carousel :interval="6000" type="card" height="60vh">
      <el-carousel-item v-for="(item, index) in menuList" :key="index" :label="item.menuName">
        <h3 class="medium">{{ item.menuName }}</h3>
        <p class="descri">{{ item.descriCon }}</p>
        <ul class="ulContainer">
          <li v-for="(itemIn,indexIn) in item.textList" :key="indexIn">
            <p v-html="itemIn.textItem"></p>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { Button } from 'ant-design-vue'

export default {
  name: 'Dashboard',
  data() {
    return {
      menuList: [
        {
          menuName: '欢迎',
          menuUrl: '',
          descriCon: '恭喜你成为xxx的一员,你进入的是一个充满活力和希望的群体，你面临的是充满挑战与机遇的工作。在这里，我们应更加珍惜眼前共事的时光，有温暖、有激情、有体谅、有幽默，因而对人生和事业充满信心，我们应该这样逐步成长。在这里，只要你用心描绘，你一定可以绘出最美妙的蓝图。公司提供发展的平台，希望每一个祥光人，都能做到用无言的默契，用沟通的心灵，用灿烂的笑容，用理解的目光去发展;全身心地投入毕生的精力和才智，回报我们共同的家。以祥光事业为己任，不以祥光利益为己有。相信自己，相信公司，相信我们共同的家。',
          textList: []
        },
        {
          menuName: '公司简介',
          menuUrl: '',
          descriCon: '海尔卡奥斯物联生态科技有限公司成立于2017 年 4 月，主要运营和推广工业互联网平台，其业务涵盖工业互联网平台建设和运营、工业智能技术研究和应用、智能工厂建设及软硬件集成服务（精密模具、智能装备和智能控制）、能源管理等业务板块，助力中国企业实现大规模制造向大规模定制升级快速转型，始终秉承国家级工业互联网平台的使命，为用户、企业和资源创造和分享价值，创引领全球的工业互联网生态品牌。',
          textList: []
        },
        {
          menuName: '入职办公',
          menuUrl: '',
          descriCon: '',
          textList: [
            {
              textItem: '办公用品：公司会给每一位在职员工根据其工作职位配备相关电脑，收纳盒，笔筒，笔记本等相关办公用品【联系人：张培婷（15861656892）】'
            },
            {
              textItem: '工号身份：公司为每一个人分配工号，个人需登录<a href="https://idp.haier.net/idp/authcenter/ActionAuthChain?entityId=portalNew" style="color: blue;text-decoration: underline;" target="_blank">海智慧</a>修'
              + '改工号对应密码，修改后工号密码可登录集团所有系统（VPN环境下）；注意事项：电脑申请会有延后，公司出于集团考虑会为每一台电脑安装VPN（<a href="http://vpn.haier.net/" style="color: blue;text-decoration: underline;" target="_blank">VPN个人安装指南</a>）'
            },
            {
              textItem: '进出打卡：公司实行指纹打卡，Ihaier打卡上班制度，指纹录取负责人【联系人：张培婷（15861656892）】,IHaier使用详情<a href="#/iHaierMes" style="color: blue;text-decoration: underline;">点击查看</a>'
            },
            {
              textItem: '办公联络：集团会为每一位在职员工申请集团邮箱邮箱申请详情步骤<a href="#/emailMes" style="color: blue;text-decoration: underline;">点击</a>，员工之间联络常用IHaier发送消息'
            },
            {
              textItem: '软件下载：<a href="#/iHaierMes/jieban" style="color: blue;text-decoration: underline;">捷办</a>, <a href="#/iHaierMes/iHaierDown" style="color: blue;text-decoration: underline;">IHaier</a>'
            }
          ]
        },
        {
          menuName: '权限系统列表',
          menuUrl: '',
          descriCon: '',
          textList: [
            {
              textItem: '集团门户网:是干啥的<a href="https:www.baidu.com" style="color: blue;text-decoration: underline;" target="_blank">baidu</a>'
            },
            {
              textItem: '捷办:是干啥的【详情】'
            },
            {
              textItem: '小微E-HR平台:是干啥的【详情】'
            },
            {
              textItem: 'COSMOPlat协同OA:是干啥的【详情】KEMS'
            },
            {
              textItem: '商旅系统:是干啥的【详情】'
            },
            {
              textItem: 'CRM商学院:是干啥的【详情】'
            },
            {
              textItem: 'TECHLAW平台:是干啥的【详情】'
            },
            {
              textItem: 'COSMOPlat云文档:是干啥的【详情】'
            },
            {
              textItem: 'COSMOPlat费用管理系统（KEMS）:是干啥的【详情】'
            },
            {
              textItem: '<a href="#/group" style="color: blue;text-decoration: underline;">集团网站详情</a>'
            }
          ]
        },
        {
          menuName: '出差(费用报销)',
          menuUrl: '',
          descriCon: '',
          textList: []
        },
        {
          menuName: '办公系统',
          menuUrl: '',
          descriCon: '',
          textList: []
        },
        {
          menuName: '考勤',
          menuUrl: '',
          descriCon: '',
          textList: []
        },
        {
          menuName: '规章制度',
          menuUrl: '',
          descriCon: '',
          textList: []
        },
        {
          menuName: '公司福利',
          menuUrl: '',
          descriCon: '',
          textList: []
        }
      ]
    }
  },
  components: {},
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
body{

  background-color:gray;

  background:url("http://cdn.moji.com/websrc/video/video621.mp4") no-repeat center 0px;

}

video#bgvid  {

  position: fixed; right:0; bottom:0;

  min-width:100%; min-height:100%; width: auto;height:

  auto;z-index:-100; background-size: cover;

}
.dashboard-container{
  width: 100%;
  height: 100%;
  background: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard {
  &-container {
    height: calc(100vh - 85px);
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-carousel{
  width: 100%;
}
.descri{
  text-indent: 28px;
  line-height: 24px;
  color: #475669;
}
.el-carousel__item{
  border-radius: 10px;
  padding: 5px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 30px;
  text-align: center;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background: rgba($color: #99a9bf, $alpha: 0.4);
}
.el-carousel__item:nth-child(2n+1) {
  background: rgba($color: #d3dce6, $alpha: 0.4);
}
.el-carousel__item:nth-child(2n).is-active {
  background: rgba($color: #99a9bf, $alpha: 1);
}
.el-carousel__item:nth-child(2n+1).is-active {
  background: rgba($color: #d3dce6, $alpha: 1);
}
.aClass{
  color: blue;
  text-decoration: underline;
}
.ulContainer{
  list-style: decimal;
  li{
    line-height: 20px;
    color: #475669;
  }
}

// el-carousel__item is-active el-carousel__item--card is-in-stage
</style>
