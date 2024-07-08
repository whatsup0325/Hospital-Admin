<script setup>
const state=reactive({
  arry:[
    {title:"總出院人次",icon:"i carbon:car",unit:"人數",total:"276"},
    {title:"14日非計畫再住院",icon:"i carbon:shuttle",unit:"人數",total:"174"},
    {title:"住院健保申報醫療費用點數成長率",icon:"i carbon:analytics-reference",unit:"%",total:"5"},
    {title:"部醫戰情數據上傳",icon:"i carbon:cloud-upload",total:"104"},
  ],
})

const decoFrameConfig={
  directionAlt: true,
  scale:.8
}


</script>
<template>
  <div class="screenC-counterGrid">
    <div class="content-wrap" v-for="(item,index) in state.arry" :key="index">
      <decoFrameA2 :config="decoFrameConfig"><i :class="[item.icon,'icon']"></i></decoFrameA2>
      <DigitalTransform class="numbers" :value="item.total" :useGrouping="true" :interval="3000"></DigitalTransform>
      <div class="block-title">{{item.title}} <span class="unit" v-if="item.unit">({{item.unit}})</span></div>
      
    </div>
  </div>
</template>
<style lang="less" scoped>
.screenC-counterGrid{ margin-top:30px; display: grid; grid-template-columns: repeat(4,1fr); height: 100%; grid-template-rows: repeat(1,1fr); grid-gap: 12px;  position: relative;
  .content-wrap{.por;  text-align: center;
    .decoFrameA2{margin:0 auto;}
    .block-title{.ff("cn1"); .fc(@cbl3); font-size: 20px; line-height: 1.5; 
      .unit{display:block; font-size: 12px;}
    }
    .numbers{display:inline-block; text-align: center; height:38px; line-height: 1; font-size: 38px; .ff("en0");  position: relative; vertical-align: text-top; .fc(@cbl3); }
  }
}
</style>
