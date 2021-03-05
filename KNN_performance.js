Highcharts.chart('container', {

    title: {
        text: 'KNN performance'
    },


    yAxis: {
        title: {
            text: 'performance'
        }
    },

    xAxis: {
        title: {
            text: 'N neighbours'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    

    series: [{
        name: 'train_accuracy',
        data: [0.58937407, 0.441922425, 0.407650254, 0.394173212, 0.388446767, 0.383602644, 0.380350161, 0.379242933, 0.377582091, 0.377651292]
    }, {
        name: 'test_accuracy',
        data: [0.174774332, 0.27670261, 0.31224755, 0.327104773, 0.338941379, 0.348178849, 0.353482491, 0.356327491, 0.360436936, 0.361315022]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});