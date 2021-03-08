function plotKNN() {
    Highcharts.chart('chart', {
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

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[2, 0.58937407], [7, 0.441922425], [12, 0.407650254], [17, 0.394173212], [22, 0.388446767], [27, 0.383602644], [32, 0.380350161], [37, 0.379242933], [42, 0.377582091], [47, 0.377651292]]
        }, {
            name: 'test_accuracy',
            data: [[2, 0.174774332], [7, 0.27670261], [12, 0.31224755], [17, 0.327104773], [22, 0.338941379], [27, 0.348178849], [32, 0.353482491], [37, 0.356327491], [42, 0.360436936], [47, 0.361315022]]
        },{
            name: 'train_f1-score',
            data: [[2, 0.542401367], [7, 0.293605374], [12, 0.214408395], [17, 0.178041137], [22, 0.157319381], [27, 0.142668147], [32, 0.130317081], [37, 0.123432313], [42, 0.116451906], [47, 0.11311601]]
        }, {
            name: 'test_f1_score',
            data: [[2, 0.122636776], [7, 0.134708701], [12, 0.129114847], [17, 0.119236206], [22, 0.113496182], [27, 0.110740771], [32, 0.106424218], [37, 0.102828863], [42, 0.102899517], [47, 0.099739354]]
        }],

        responsive: {
            rules: [{         
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
}

function plotDT() {
    Highcharts.chart('chart', {
        title: {
            text: 'Decision Tree performance'
        },

        yAxis: {
            title: {
                text: 'performance'
            }
        },

        xAxis: {
            title: {
                text: 'max_depth'
            },
            

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[5, 0.371232829], [15, 0.540258123], [25, 0.786183869], [35, 0.870956022], [45, 0.879744646], [55, 0.879813847], [65, 0.879813847], [75, 0.879813847], [85, 0.879813847], [95, 0.879813847]]
        }, {
            name: 'test_accuracy',
            data: [[5, 0.365178603], [15, 0.30940255], [25, 0.239998595], [35, 0.212672544], [45, 0.209897791], [55, 0.210319272], [65, 0.209195322], [75, 0.210740754], [85, 0.208176741], [95, 0.208844087]]
        },{
            name: 'train_f1-score',
            data: [[5, 0.371232829], [15, 0.540258123], [25, 0.786183869], [35, 0.870956022], [45, 0.879744646], [55, 0.879813847], [65, 0.879813847], [75, 0.879813847], [85, 0.879813847], [95, 0.879813847]]
        }, {
            name: 'test_f1_score',
            data: [[5, 0.365178603], [15, 0.30940255], [25, 0.239998595], [35, 0.212672544], [45, 0.209897791], [55, 0.210319272], [65, 0.209195322], [75, 0.210740754], [85, 0.208176741], [95, 0.208844087]]
        }],

        responsive: {
            rules: [{         
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
}

function plotRF() {
    Highcharts.chart('chart', {
        title: {
            text: 'Random Forest performance'
        },

        yAxis: {
            title: {
                text: 'performance'
            }
        },

        xAxis: {
            title: {
                text: 'max_depth'
            },
            

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[5, 0.366163801], [15, 0.546486281], [25, 0.867807342], [35, 0.879796547], [45, 0.879813847], [55, 0.879813847], [65, 0.879813847], [75, 0.879813847], [85, 0.879813847], [95, 0.879813847]]
        }, {
            name: 'test_accuracy',
            data: [[5, 0.361350146], [15, 0.363176566], [25, 0.320431316], [35, 0.31031576], [45, 0.307821994], [55, 0.3076815], [65, 0.307049278], [75, 0.307084402], [85, 0.307154649], [95, 0.308945945]]
        },{
            name: 'train_f1-score',
            data: [[5, 0.055431021], [15, 0.392658728], [25, 0.857041891], [35, 0.869128588], [45, 0.868617777], [55, 0.868450519], [65, 0.868724003], [75, 0.868809287], [85, 0.868761888], [95, 0.868597741]]
        }, {
            name: 'test_f1_score',
            data: [[5, 0.054159907], [15, 0.094452743], [25, 0.118202602], [35, 0.12403399], [45, 0.124339335], [55, 0.1249195], [65, 0.124592452], [75, 0.124319171], [85, 0.124463148], [95, 0.125849735]]
        }],

        responsive: {
            rules: [{         
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
}

function plotNN() {
    Highcharts.chart('chart', {
        title: {
            text: 'Neural Network --Multilayer Perceptron'
        },

        yAxis: {
            title: {
                text: 'performance'
            }
        },

        xAxis: {
            title: {
                text: 'max_iteration'
            },
            

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[300, 0.409103491], [400, 0.410539428], [500, 0.407667555], [600, 0.408203868], [700, 0.40865368]]
        }, {
            name: 'test_accuracy',
            data: [[300, 0.34656317], [400, 0.335639774], [500, 0.343542552], [600, 0.347616873], [700, 0.341505391]]
        },{
            name: 'train_f1-score',
            data: [[300, 0.409103491], [400, 0.410539428], [500, 0.407667555], [600, 0.408203868], [700, 0.40865368]]
        }, {
            name: 'test_f1_score',
            data: [[300, 0.34656317], [400, 0.335639774], [500, 0.343542552], [600, 0.347616873], [700, 0.341505391]]
        }],

        responsive: {
            rules: [{         
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
}
function plotSGD() {
    Highcharts.chart('chart', {
        title: {
            text: 'Random Forest performance'
        },

        yAxis: {
            title: {
                text: 'performance'
            }
        },

        xAxis: {
            title: {
                text: 'max_iteration'
            },
            

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[300, 0.278986886], [400, 0.300906543], [500, 0.295716411], [600, 0.259610394], [700, 0.250198955], [800, 0.229888239], [900, 0.291581606], [1000, 0.265855853]]
        }, {
            name: 'test_accuracy',
            data: [[300, 0.275929894], [400, 0.298725018], [500, 0.287380141], [600, 0.248849707], [700, 0.251940571], [800, 0.227775631], [900, 0.288223104], [1000, 0.266200695]]
        },{
            name: 'train_f1-score',
            data: [[300, 0.278986886], [400, 0.300906543], [500, 0.295716411], [600, 0.259610394], [700, 0.250198955], [800, 0.229888239], [900, 0.291581606], [1000, 0.265855853]]
        }, {
            name: 'test_f1_score',
            data: [[300, 0.275929894], [400, 0.298725018], [500, 0.287380141], [600, 0.248849707], [700, 0.251940571], [800, 0.227775631], [900, 0.288223104], [1000, 0.266200695]]
        }],

        responsive: {
            rules: [{         
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
}

function plotLog() {
    Highcharts.chart('chart', {
        title: {
            text: 'Logistic Regression'
        },

        yAxis: {
            title: {
                text: 'performance'
            }
        },

        xAxis: {
            title: {
                text: 'regulation coef (C value)'
            },
            

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },

            }
        },

        series: [{
            name: 'train_accuracy',
            data: [[0.001, 0.368014948], [0.01, 0.371803744], [0.1, 0.372755268], [1, 0.372686066], [10, 0.372270856], [100, 0.372322757], [1000, 0.373032075]]
        }, {
            name: 'test_accuracy',
            data: [[0.001, 0.362755084], [0.01, 0.367953356], [0.1, 0.369533912], [1, 0.369252924], [10, 0.368480208], [100, 0.368761196], [1000, 0.369323171]]
        },{
            name: 'train_f1-score',
            data: [[0.001, 0.368014948], [0.01, 0.371803744], [0.1, 0.372755268], [1, 0.372686066], [10, 0.372270856], [100, 0.372322757], [1000, 0.373032075]]
        }, {
            name: 'test_f1_score',
            data: [[0.001, 0.362755084], [0.01, 0.367953356], [0.1, 0.369533912], [1, 0.369252924], [10, 0.368480208], [100, 0.368761196], [1000, 0.369323171]]
        }],

        responsive: {
            rules: [{         
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
}
function init() {
    let wide = false;
    document.getElementById('chart').style.width = wide ? '500px' : '800px';
    wide = !wide;
    plotKNN();

}
document.addEventListener('DOMContentLoaded', init, false);