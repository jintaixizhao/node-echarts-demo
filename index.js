// 引入必要的库
const echarts = require('echarts');
const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// 创建画布
const width = 800;  // 图表宽度
const height = 500; // 图表高度
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// 初始化ECharts实例
const chart = echarts.init(canvas);

// 配置折线图数据和样式
const option = {
    backgroundColor: '#ffffff',
  title: {
    text: '折线图示例',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['数据系列A', '数据系列B'],
    top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '数据系列A',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210],
      smooth: true,
      lineStyle: {
        width: 3
      },
      label: {
        show: true,"position": "top",
        "fontSize": 14,  // 显式指定字体大小（避免过小导致看不见）
        "color": "#333"  // 显式指定颜色（避免与背景色一致）
      },
      showAllSymbol : true,
      symbol: 'circle', // 强制显示标记点
    },
    {
      name: '数据系列B',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310],
      smooth: true,
      lineStyle: {
        width: 3,
        type: 'dashed'
      }
    }
  ]
};

// 设置图表配置项
chart.setOption(option);

// 将图表保存为图片
const outputPath = path.join(__dirname, 'line-chart.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFile(outputPath, buffer, (err) => {
  if (err) {
    console.error('保存图片失败:', err);
  } else {
    console.log(`折线图已保存至: ${outputPath}`);
  }
});