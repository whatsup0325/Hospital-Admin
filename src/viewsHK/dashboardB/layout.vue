<script setup>
import echartBarHoriz from "./portlet/echart-barHoriz.vue"
import echartBar from "./portlet/echart-bar.vue"
import echartLine from "./portlet/echart-line.vue"
import echartLine2 from "./portlet/echart-line2.vue"
import echartBarLine from "./portlet/echart-barLine.vue"
import echartBarHorizScroll from "./portlet/echart-barHorizScroll.vue"
import echartGaugeTriple from "./portlet/echart-gaugeTriple.vue"
import echartGaugeTriple2 from "./portlet/echart-gaugeTriple2.vue"

import echartsRadar from "./portlet/echarts-radar.vue"
import echartPie from "./portlet/echart-pie.vue"
import echartsPictorialBar from "./portlet/echarts-PictorialBar.vue"
import counterGrid from "./portlet/counter-grid.vue"
import counterGrid2 from "./portlet/counter-grid2.vue"
import counterGrid3 from "./portlet/counter-grid3.vue"
import mainNav from "@/common/mainNav.vue"
import externalLinks from "@/common/externalLinks.vue"

const router = useRouter();
const { proxy } = getCtx();

const comps={
  echartBarHoriz,
  echartLine,
  echartLine2,
  echartBar,
  echartBarHorizScroll,
  echartGaugeTriple,
  echartGaugeTriple2,
  echartsRadar,
  counterGrid,
  counterGrid2,
  counterGrid3,
  echartPie,
  echartsPictorialBar,
  echartBarLine
}
const state=reactive({
  systemTitleConfig:{
    width:500
  },
  panelTitleConfig:{
    width:160,
  },
  dialogConfig:{
    show:false,
    width:'60%',
    height:'60%',
    title:"DialogTitle",
    titleWidth:350,
  },
  // panelTitleConfig:{
  //   width:180,
  //   theme:true
  // },
  
  areas:[
  {name:"left",portlets:[
      {id:"l2",title:"科別統計",component:"echartPie",border:"aYinTechBorderA1",hideTitle:true},
      {id:"l3",title:"門診人次",component:"echartLine2",border:"aYinTechBorderA1",hideTitle:true},
      {id:"l1",title:"看診進度",component:"echartBarHorizScroll",border:"aYinTechBorderA1",hideTitle:true},
    ]},
    {name:"center",portlets:[
      {id:"c1",title:"銷售情況",component:"counterGrid",border:"blank",hideTitle:true},
      {id:"c2",title:"門診情況",component:"counterGrid2",border:"blank",hideTitle:true},
      {id:"c3",title:"住院情況",component:"counterGrid3",border:"blank",hideTitle:true},
      // {id:"c4",title:"每月變化",component:"",border:""},
    ]},
    {name:"right",portlets:[
      {id:"r1",title:"住院占床率",component:"echartLine",border:"aYinTechBorderA1",hideTitle:true},
      {id:"r2",title:"戰情數據",component:"echartBar",border:"aYinTechBorderA1",hideTitle:true},
      {id:"r3",title:"戰情數據2",component:"echartBar",border:"aYinTechBorderA1",hideTitle:true},
    ]},    
  ]
      
})


const {systemTitleConfig,panelTitleConfig,dialogConfig,areas}=toRefs(state)


const chartCounter=computed(()=>{
  return this.$vuex.state.adaptiveConfig.chartCounter;
})
const getConfig=(item)=>{
  const {id}=item
  if(id=='c2'){
    return {
      title:item.title,
      opacity: 0.5,
      decoration:false,
    }
  }else if(id=='c3'){
    return {
      title:item.title,
      opacity: 0.5,
      rotate:"y",
      decoration:false,
    }
  }else if(id.includes("l")){
    return {
      title:item.title,
      titleWidth:120,
      decoration:false,
      decorationAlt: true,
      rotate: "y",
      opacity: 0.5
    }
  }else{
    return {
      title:item.title,
      titleWidth:120,
      decoration:false,
      opacity:.5
    }
  }
}

onMounted(()=>{ })


</script>
<template>
  <div class="screen1080B">
    <mainNav></mainNav>
    <externalLinks></externalLinks>
    <div :class="`area-box area-${area.name}`" v-for="area in areas" :key="area.id">
      <div class="portlet-wrapper" v-for="item in area.portlets" :key="item.id">
        <component v-if="item.border" :is='item.border' :config="getConfig(item)">
          <panelTitleA1 v-if="!item.hideTitle" :config="panelTitleConfig" >{{item.title}}</panelTitleA1>
          <component :is='comps[item.component]' ></component>
        </component>
        <template v-else>
          <component :is='item.component'></component>
          <i>{{item.component}}</i>
        </template>
      </div>
    </div>
    <systemTitleA1 :config="systemTitleConfig">HIS System Data</systemTitleA1>
  </div>
</template>
<style lang="less">
.screen1080B{ z-index: 1;padding:60px 30px 30px 30px; height: 100%; //url(../common/images/bg.png) 
  .techButtonA2 {z-index: 10; .poa; bottom:20px; left:50%; .fixc("x");}
.i(){.poa; bottom:0; right:10px; font-size: 12px; opacity: .1; .fc(@wh); z-index: 10;}
  display: grid; grid-template-columns: repeat(24,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 30px;
  .area-box{.bdr(5px);  pointer-events: visible; position: relative; z-index: 10; 
    .board-3d-wrap{ .poa; .fullbox;

    }
    //<row-start> / <column-start> / <row-end> / <column-end>;
    .blank,
    .portlet-wrapper{.por;
      >i{.i;}
      
    }
    .border-content{>i{.i;}}
    &.area-left{ grid-area: 1 / 1 / 25 / 7; }
    &.area-right{ grid-area: 1 / 19 / 25 / 25; }
    &.area-center{grid-area: 1 / 7 / 25 / 19; }
    &.area-left,
    &.area-right,
    &.area-center{ display: grid; grid-template-columns: repeat(1,1fr); grid-template-rows:repeat(24,1fr); grid-gap: 20px;
      .portlet-wrapper{
        &:nth-child(1){grid-area: 1 / 1 / 8 / 3;}
        &:nth-child(2){grid-area: 8 / 1 / 15 / 3;}
        &:nth-child(3){grid-area: 15 / 1 / 25 / 3;}
      }
    }
    &.area-center{grid-template-columns: repeat(2,1fr);
      .portlet-wrapper{
        &:nth-child(1){grid-area: 2 / 1 / 8 / 3;}
        &:nth-child(2){grid-area: 9 / 1 / 15 / 3;}
        &:nth-child(3){grid-area: 16 / 1 / 25 / 3;}
      }
    }
    
  }
  .content-tabs{.poa;  top:-40px; left:80px; right:80px; text-align: center; height: 40px;
    &:before{content:" "; .bdb(var(--button-bd_hov));left:0; right:0; bottom:10px;.poa; z-index: 1;}
    .tabs-item{display:inline-block; padding:0 10px; .ff("cn1"); .fc(var(--font-normal)); height: 30px;line-height: 30px; cursor: pointer; .ani; z-index: 2; .por;
      &:before{content:" "; .bgc(var(--button-bd_hov)); .poa; .fullbox; opacity: 0;}
      &:hover{&:before{opacity: .3;}}
      &.active{ .bdb(var(--font-strong)); .fc(var(--font-strong));}
    }
  }
}
</style>