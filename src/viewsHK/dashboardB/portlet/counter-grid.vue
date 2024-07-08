<script setup>
const state=reactive({
  arry:[
    {title:"門診就診人數",icon:"i carbon:user-speaker",total:"3276"},
    {title:"門診初診率",icon:"i carbon:help-desk",unit:"%",total:"1874"},
    {title:"門診病人住院率",icon:"i carbon:task-add",unit:"%",total:"5"},
    {title:"平均住院日",icon:"i carbon:hotel",unit:"天數",total:"5"},
    {title:"住院佔床率",icon:"i carbon:hospital-bed",unit:"%",total:"54"},
    
  ],
})

const decoFrameConfig={
  directionAlt: true,
  scale:.8
}


</script>
<template>
  <div class="screenB-counterGrid">
    <div class="content-wrap" v-for="(item,index) in state.arry" :key="index">
      <decoFrameA2 :config="decoFrameConfig"><i :class="[item.icon,'icon']"></i></decoFrameA2>
      <DigitalTransform class="numbers" :value="item.total" :useGrouping="true" :interval="3000"></DigitalTransform>
      <div class="block-title">{{item.title}} <span class="unit" v-if="item.unit">({{item.unit}})</span></div>
      
    </div>
  </div>
</template>
<style lang="less" scoped>
.screenB-counterGrid{ margin-top:30px; display: grid; grid-template-columns: repeat(5,1fr); height: 100%; grid-template-rows: repeat(1,1fr); grid-gap: 12px;  position: relative;
  .content-wrap{.por;  text-align: center;
    .decoFrameA2{margin:0 auto;}
    .block-title{.ff("cn1"); .fc(@cbl3); font-size: 24px; line-height: 1.5; 
      .unit{display:block; font-size: 12px;}
    }
    .numbers{display:inline-block; text-align: center; height:38px; line-height: 1; font-size: 42px; .ff("en0");  position: relative; vertical-align: text-top; .fc(@cbl3); }
  }
}
</style>
