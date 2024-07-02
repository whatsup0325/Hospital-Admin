<script setup>
const timer = ref(null);

const currentLegend = ref(0);
const legendSelected = reactive ({
  "門診健保申報平均每件診療點數": true,
  "一般急性病房平均住院天數": false,
  "住院健保申報醫療費用點數成長率": false,
  "門診藥費點數佔總醫療費用點數之比率": false,
  "門診健保申報醫療費用點數成長率": false,
});
const state = reactive({
  chartData: {
    legend: [
      "門診健保申報平均每件診療點數",
      "一般急性病房平均住院天數",
      "住院健保申報醫療費用點數成長率",
      "門診藥費點數佔總醫療費用點數之比率",
      "門診健保申報醫療費用點數成長率",
    ],
    xAxis: [
      "數據1",
      "數據2",
      "數據3",
      "數據4",
      "數據5",
      "數據6",
      "數據7",
      "數據8",
      "數據9",
      "數據10",
      "數據11",
      "數據12",
    ],
    colors: [$c.aql2, $c.acl6, $c.bil4, $c.ipl4, $c.rel4, $c.yel3],
    data: [
      [
        235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330, 300, 240,
        345, 235, 210, 187, 212, 278, 220, 320, 302, 301, 334, 390, 330, 300,
        240, 345,
      ],
      [
        193, 185, 122, 76, 70, 120, 135, 24, 32, 9, 13, 110, 132, 53, 88, 193,
        185, 122, 76, 32, 120, 135, 14, 42, 9, 13, 110, 132, 12, 88,
      ],
      [
        35, 10, 22, 9, 13, 10, 32, 15, 0, 93, 85, 22, 76, 13, 20, 35, 10, 0, 9,
        13, 10, 32, 15, 0, 93, 85, 22, 76, 13, 20,
      ],
      [
        5, 20, 9, 13, 10, 22, 23, 13, 20, 35, 4, 15, 37, 0, 54, 5, 20, 9, 13,
        10, 22, 23, 13, 20, 35, 4, 15, 37, 0, 54,
      ],
      [
        35, 0, 15, 58, 0, 0, 20, 9, 13, 10, 85, 22, 76, 13, 20, 35, 0, 15, 58,
        0, 0, 20, 9, 13, 10, 85, 22, 76, 13, 20,
      ],
    ],
  },
  chartOption: {},
});

const processData = () => {
  let { legend, colors, xAxis, data } = state.chartData,
    processedData = [],
    yAxisIndex = 0,
    xName = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ];

  xAxis.forEach((item, i) => {
    xAxis[i] = xName[i]; //+"1"
  });

  legend.forEach((item, i) => {
    if (i > 3) {
      yAxisIndex = 1;
    }
    processedData.push({
      name: legend[i],
      type: i >= legend.length - 3 ? "line" : "bar",
      barWidth: i == 0 ? 20 : 15,
      label: {
        show: false,
        position: "insideRight",
      },
      itemStyle: {
        color: $c.fade(colors[i], 0.9),
        borderRadius: 3,
      },
      z: 10 - i,
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: $c.fade(colors[i], 0.9) },
            { offset: 0.8, color: $c.fade(colors[i], 0.1) },
          ],
          false
        ),
        shadowcolor: $c.fade(colors[i], 0.3),
        shadowBlur: 10,
      },
      yAxisIndex: yAxisIndex,
      data: data[i],
    });
  });
  state.chartOption.legend.data = legend;
  state.chartOption.series = processedData;
  state.chartOption.xAxis.data = xAxis;
  state.chartOption.xAxis.axisLabel.formatter = (str, index) => {
    // if (index % 2 != 0) { return '\n\n\n' + value; }
    // else{ return value; }
    let newstr = str,
      strLT = 0,
      theNum = 0;
    for (let i = 0; i < str.length; i++) {
      if (strLT < 20) {
        if (str.charCodeAt(i) > 255) {
          strLT++;
        } else {
          strLT += 0.5;
        }
      } else {
        theNum = i;
        break;
      }
    }

    if (theNum > 0) {
      newstr = newstr.substring(0, theNum) + "...";
    }
    return newstr;
  };
};

const processOption = () => {
  state.chartOption = {};
  state.chartOption = {
    update: false,
    // title:{ text:"barA", left:200, top:0, textStyle:{ color:$c.gyl3, fontSize:16, fontWeight:"normal" }, },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      itemGap: 15,
      left: "center",
      top: "50",
      selected: legendSelected,
    },

    grid: {
      left: "2%",
      right: "2%",
      bottom: "60%",
      top: "90%",
      containLabel: true,
    },
    yAxis: [
      {
        type: "value",
        name: "单位：万元",
        // min: 0,
        // max: 300,
        splitNumber: 3,
        position: "left",
        axisLabel: {
          formatter: "{value}",
          align: "right",
        },
      },
      {
        type: "value",
        name: "单位：%",
        min: 0,
        max: 100,
        position: "right",
        offset: 0,
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],

    xAxis: {
      type: "category",
      data: [],
      axisLabel: {
        align: "center",
        interval: 0,
        width: 90,
        lineHeight: 14,
        overflow: "breakAll",
        margin: 20,
      },
    },
    series: [],
  };
  processData();
};
let chart;
const CarouselData = () => {
  timer.value = setInterval(() => {
    currentLegend.value = currentLegend.value + 1;
    if (currentLegend.value >= state.chartData.legend.length) {
      currentLegend.value = 0;
    }
    
    const legends = ref(state.chartData.legend);
    legendSelected.value = {};
    legends.value.forEach((legend) => {
      legendSelected.value[legend] = false;
    });
    legendSelected.value[legends.value[currentLegend.value]] = true;
    state.chartOption.legend.selected = legendSelected.value;
    
    chart = echarts.init(document.getElementById('chart'));
    chart.setOption(state.chartOption);
  }, 3000);
};

onMounted(() => {
  processOption();
  CarouselData();
});



</script>
<template>
  <echartsInit id="chart" :chartOption="state.chartOption"></echartsInit>
</template>
<style lang="less"></style>
