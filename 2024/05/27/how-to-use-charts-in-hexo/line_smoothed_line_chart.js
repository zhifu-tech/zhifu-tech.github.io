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
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    };
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom);
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });
}