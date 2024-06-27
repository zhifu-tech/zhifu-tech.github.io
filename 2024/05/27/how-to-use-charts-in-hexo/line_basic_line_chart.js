'use strict';

export default function (id) {
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    };
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });
}
