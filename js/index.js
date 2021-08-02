$(document).ready(function() {
    $(" .select").niceSelect()


    $(".table__check input").click(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".table__row").addClass("table__row--active");
        } else {
            $(this).parents(".table__row").removeClass("table__row--active");
        }
    })
    $(".datapicker__show").click(function() {
        $(this).addClass("datapicker__show--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        if ($(".datapicker__show").hasClass("datapicker__show--active")) {
            var div = $(".datapicker__hidden"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.siblings(".datapicker__show").removeClass("datapicker__show--active")
            }
        }

    });
    if (document.getElementById('myChart')) {
        var ctx = document.getElementById('myChart6').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15, 7, 7],
                    backgroundColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        'rgba(187, 231, 94,1)'
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        'rgba(187, 231, 94,1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 30
            }
        });
    } else {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15],
                    backgroundColor: [
                        // 'rgba(255, 76, 97, 1)',
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 35
            }
        });
    }


    function lineDiagram2() {
        Chart.defaults.scale.beginAtZero = true;
        Chart.defaults.scale.ticks.maxRotation = 0;
        Chart.defaults.scale.ticks.backdropColor = 'rgba(159, 162, 180,1)'
        Chart.defaults.font.size = 10;
        Chart.defaults.font.family = 'Proxima Nova';
        Chart.defaults.plugins.legend.display = false;
        let ctx = document.getElementById("myChart4").getContext('2d');
        const data = {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', ],
            datasets: [{
                    label: '# of Votes',
                    data: [2000, 3000, 2900, 4000, 3600, 1900, 2100, 4000, 5500, 5672, 3900, 2000],
                    lineTension: 0.5,
                    fill: true,
                    backgroundColor: 'rgba(58, 222, 65, 0.054)', // Цвет фона
                    borderColor: 'rgba(0, 196, 140, 1)', // Цвет границы
                    borderWidth: 2,
                },
                {
                    label: '# of Votes 2',
                    data: [2900, 3300, 3400, 3800, 3300, 1900, 4500, 2900, 3000, 4672, 4300, 2000],
                    lineTension: 0.5,
                    fill: false,
                    borderColor: 'rgba(228, 228, 228, 1)', // Цвет границы
                    borderWidth: 2,
                }
            ]
        };
        const options = {
            scales: {
                yAxes: [{
                    display: false,
                }],


            }
        }
        console.log(Chart.defaults)
        const lineChart = new Chart(ctx, {
            type: 'line',
            axisX: {
                labelAngle: 0
            },
            data: data,
            options: options,
        })
    }

    function lineDiagram3() {
        Chart.defaults.scale.beginAtZero = true;
        Chart.defaults.scale.ticks.maxRotation = 0;
        Chart.defaults.scale.ticks.backdropColor = 'rgba(159, 162, 180,1)'
        Chart.defaults.font.size = 10;
        Chart.defaults.font.family = 'Proxima Nova';
        Chart.defaults.plugins.legend.display = false;
        let ctx = document.getElementById("myChart5").getContext('2d');
        const data = {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', ],
            datasets: [{
                    label: '# of Votes',
                    data: [18, 30, 32, 52, 55, 38, 20, 25, 35, 49, 51, 42],
                    lineTension: 0.5,
                    fill: false,
                    backgroundColor: 'rgba(0, 73, 141, 0.054)', // Цвет фона
                    borderColor: 'rgba(0, 73, 141, 1)', // Цвет границы
                    borderWidth: 2,
                },
                {
                    label: '# of Votes 2',
                    data: [22, 28, 27, 40, 48, 20, 15, 23, 40, 47, 42, 37],
                    lineTension: 0.5,
                    fill: false,
                    borderColor: 'rgba(0, 196, 140, 1)', // Цвет границы
                    borderWidth: 2,
                },
                {
                    label: '# of Votes 3',
                    data: [16, 20, 19, 50, 65, 8, 10, 20, 35, 40, 33, 28],
                    lineTension: 0.5,
                    fill: false,
                    borderColor: 'rgba(255, 76, 97, 1)', // Цвет границы
                    borderWidth: 2,
                },
            ]
        };
        const options = {
            scales: {
                yAxes: [{
                    display: false,
                }],


            }
        }
        console.log(Chart.defaults)
        const lineChart = new Chart(ctx, {
            type: 'line',
            axisX: {
                labelAngle: 0
            },
            data: data,
            options: options,
        })
    }

    function doughnutDiagram() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15, 7],
                    backgroundColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 40
            }
        });
    }

    function barDiagram() {
        Chart.defaults.scale.beginAtZero = true;
        Chart.defaults.scale.ticks.maxRotation = 0;
        Chart.defaults.scale.ticks.backdropColor = 'rgba(159, 162, 180,1)'
        Chart.defaults.scale.ticks.minRotation = 7;
        Chart.defaults.scale.ticks.maxRotation = 7;
        Chart.defaults.font.size = 10;
        Chart.defaults.font.family = 'Proxima Nova';
        Chart.defaults.plugins.legend.display = false;
        let ctx = document.getElementById("myChart7").getContext('2d');
        const data = {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь'],
            datasets: [{
                    label: '# of Votes',
                    data: [8000, 3000, 3000, 900, 750, 3000],
                    lineTension: 0.5,
                    fill: false,
                    backgroundColor: 'rgba(111, 82, 237, 1)', // Цвет фона
                    borderColor: 'rgba(111, 82, 237, 1)', // Цвет границы
                    borderWidth: 2,
                    barPercentage: 0.3,
                },
                {
                    label: '# of Votes 2',
                    data: [4600, 1800, 5300, 1700, 4000, 1700],
                    lineTension: 0.5,
                    fill: false,
                    borderColor: 'rgba(255, 122, 0, 1)', // Цвет границы
                    backgroundColor: 'rgba(255, 122, 0, 1)',
                    borderWidth: 2,
                    barPercentage: 0.3,
                },
                {
                    label: '# of Votes 3',
                    data: [11000, 1000, 1000, 600, 7500, 900],
                    lineTension: 0.5,
                    fill: false,
                    borderColor: 'rgba(0, 196, 140, 1)', // Цвет границы
                    backgroundColor: 'rgba(0, 196, 140, 1)',
                    borderWidth: 2,
                    barPercentage: 0.3,
                    categoryPercentage: 1.0,

                },
            ]
        };
        const options = {
            scales: {
                yAxes: [{
                    display: false,
                }],


            },
            barDatasetSpacing: 1,
        }
        console.log(Chart.defaults)
        const lineChart = new Chart(ctx, {
            type: 'bar',
            axisX: {
                labelAngle: 0,
            },
            data: data,
            options: options,
        })
    }

    lineDiagram2()
    lineDiagram3()
    doughnutDiagram()
    barDiagram()

    $(".modal__pass-toggle").click(function() {
        if ($(this).hasClass("modal__pass-toggle--active")) {
            $(this).removeClass("modal__pass-toggle--active");
            $(this).siblings("input").attr("type", "password")
        } else {
            $(this).addClass("modal__pass-toggle--active");
            $(this).siblings("input").attr("type", "text")
        }
    })

})