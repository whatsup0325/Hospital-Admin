<script setup>
const route = useRoute();
const router = useRouter();
const store = useStore();
const inited=ref(false)
const nav=[
  {lang:"en",label:"DashboardA",path:"/dashboardA-en"},
  {lang:"en",label:"DashboardB",path:"/dashboardB-en"},
  {lang:"en",label:"DashboardC",path:"/dashboardC-en"},
  {lang:"en",label:"DashboardD",path:"/dashboardD-en"},
  {lang:"cn",label:"門診數據",path:"/dashboardA-cn"},
  {lang:"cn",label:"住院數據",path:"/dashboardB-cn"},
  {lang:"cn",label:"急診數據",path:"/dashboardC-cn"},
  {lang:"cn",label:"戰情通報",path:"/dashboardD-cn"},

  {lang:"hk",label:"門診數據",path:"/dashboardA-hk"},
  {lang:"hk",label:"住院數據",path:"/dashboardB-hk"},
  {lang:"hk",label:"急診數據",path:"/dashboardC-hk"},
  {lang:"hk",label:"戰情通報",path:"/dashboardD-hk"},
]

const goToRouter=(item)=>{
  router.push(item.path);
}

onMounted(() => {
  inited.value=true
})

</script>
<template>
  <div :class="`nav-wrap ${inited&&'inited'}`" >
    <template v-for="item in nav">
      <div v-if="item.lang==store.state.lang" :class="`item ${route.path==item.path?'active':''}`" @click="goToRouter(item)" >
        {{ item.label }}
      </div>
    </template>
  </div>
</template>
<style lang="less">
.nav-wrap{.poa; right:50px; top:0; display:flex; z-index: 20;
  .item{padding:10px; .fc(@bld6); .por; cursor: pointer; .ani;
    &:before{.poa; top:0; left:50%; .bdr(0 0 10px 10px); .fixc("x"); width: 0%; opacity: 0; .ani; content:" "; height:5px; .bgc(@cbl6);}
    &:hover{.fc(@cbl5);}
    &.active{.fc(@cbl3);
      &:before{ opacity: 1;}
    }
  }
  &.inited{
    .active{
      &:before{width: 90%;}
    }
  }
}
</style>