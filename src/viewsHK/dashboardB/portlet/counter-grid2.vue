<script setup>
const state=reactive({
  arry:[
    {title:"門診健保申報平均每件診療點數",icon:"i carbon:calculator",total:"276"},
    {title:"一般急性病房平均住院",icon:"i carbon:hotel",unit:"天數",total:"14"},
    {title:"門診藥費點數佔總醫療費用點數",icon:"i carbon:pills-add",total:"150"},
    {title:"門診健保申報醫療費用點數成長率",icon:"i carbon:analytics-reference",total:"9"},
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
.screenB-counterGrid{ margin-top:30px; display: grid; grid-template-columns: repeat(4,1fr); height: 100%; grid-template-rows: repeat(1,1fr); grid-gap: 12px;  position: relative;
  .content-wrap{.por;  text-align: center;
    .decoFrameA2{margin:0 auto;}
    .block-title{.ff("cn1"); .fc(@cbl3); font-size: 20px; line-height: 1.5; 
      .unit{display:block; font-size: 12px;}
    }
    .numbers{display:inline-block; text-align: center; height:38px; line-height: 1; font-size: 38px; .ff("en0");  position: relative; vertical-align: text-top; .fc(@cbl3); }
  }
}
</style>
