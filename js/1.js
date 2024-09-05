(function($) {
  'use strict';
  $(function() {
    if ($("#1performanceLine").length) {
      const ctx = document.getElementById('1performanceLine');
      var graphGradient = document.getElementById("1performanceLine").getContext('2d');
      var graphGradient2 = document.getElementById("1performanceLine").getContext('2d');
      var graphGradient3 = document.getElementById("1performanceLine").getContext('2d');
      var graphGradient4 = document.getElementById("1performanceLine").getContext('2d');
      var graphGradient5 = document.getElementById("1performanceLine").getContext('2d');
      var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
      saleGradientBg.addColorStop(0, 'rgba(26, 115, 232, 0.18)');
      saleGradientBg.addColorStop(1, 'rgba(26, 115, 232, 0.02)');
      var saleGradientBg2 = graphGradient2.createLinearGradient(100, 0, 50, 150);
      saleGradientBg2.addColorStop(0, 'rgba(0, 208, 255, 0.19)');
      saleGradientBg2.addColorStop(1, 'rgba(0, 208, 255, 0.03)');
      var saleGradientBg3 = graphGradient3.createLinearGradient(100, 0, 50, 150);
      saleGradientBg3.addColorStop(0, 'rgba(250, 128, 114, 0.19)');
      saleGradientBg3.addColorStop(1, 'rgba(250, 128, 114, 0.03)');
      var saleGradientBg4 = graphGradient4.createLinearGradient(100, 0, 50, 150);
      saleGradientBg4.addColorStop(0, 'rgba(0, 208, 255, 0.19)');
      saleGradientBg4.addColorStop(1, 'rgba(0, 208, 255, 0.03)');
      var saleGradientBg5 = graphGradient5.createLinearGradient(100, 0, 50, 150);
      saleGradientBg5.addColorStop(0, 'rgba(176, 235, 180, 0.19)');
      saleGradientBg5.addColorStop(1, 'rgba(176, 235, 180, 0.03)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["SUN","sun", "MON", "mon", "TUE","tue", "WED", "wed", "THU", "thu", "FRI", "fri", "SAT"],
          datasets: [{
            label: 'CO',
            data: [50, 210, 160, 290, 100, 315, 30, 470, 190, 210, 240, 180, 250],
            backgroundColor: saleGradientBg3,
            borderColor: [
                'salmon',
            ],
            borderWidth: 1.5,
            fill: true, // 3: no fill
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4,4, 4, 4, 4, 4,4, 4, 4],
            pointHoverRadius: [2, 2, 2, 2, 2,2, 2, 2, 2, 2,2, 2, 2],
            pointBackgroundColor: ['salmon)', 'salmon', 'salmon', 'salmon','salmon)', 'salmon', 'salmon', 'salmon','salmon)', 'salmon', 'salmon', 'salmon','salmon)'],
            pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
        },{
          label: 'CO2',
          data: [30, 150, 190, 250, 120, 150, 130, 20, 30, 15, 40, 95, 180],
          backgroundColor: saleGradientBg2,
          borderColor: [
              '#52CDFF',
          ],
          borderWidth: 1.5,
          fill: true, // 3: no fill
          pointBorderWidth: 1,
          pointRadius: [4, 4, 4, 4, 4,4, 4, 4, 4, 4,4, 4, 4],
          pointHoverRadius: [2, 2, 2, 2, 2,2, 2, 2, 2, 2,2, 2, 2],
          pointBackgroundColor: ['#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)'],
            pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
      },{
          label: 'NO2',
          data: [20, 250, 90, 450, 320, 150, 430, 120, 230, 152, 400, 195, 280],
          backgroundColor: saleGradientBg5,
          borderColor: [
              '#98FF98',
          ],
          borderWidth: 1.5,
          fill: true, // 3: no fill
          pointBorderWidth: 1,
          pointRadius: [4, 4, 4, 4, 4,4, 4, 4, 4, 4,4, 4, 4],
          pointHoverRadius: [2, 2, 2, 2, 2,2, 2, 2, 2, 2,2, 2, 2],
          pointBackgroundColor: ['	#98FF98', '	#98FF98', '	#98FF98', '	#98FF98','	#98FF98', '	#98FF98', '	#98FF98', '	#98FF98','	#98FF98', '	#98FF98', '	#98FF98', '	#98FF98','	#98FF98'],
            pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
      }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            line: {
                tension: 0.4,
            }
          },

          scales: {
            y: {
              border: {
                display: false
              },
              grid: {
                display: true,
                color:"#F0F0F0",
                drawBorder: false,
              },
              ticks: {
                beginAtZero: false,
                autoSkip: true,
                maxTicksLimit: 4,
                color:"#6B778C",
                font: {
                  size: 10,
                }
              }
            },
            x: {
              border: {
                display: false
              },
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                beginAtZero: false,
                autoSkip: true,
                maxTicksLimit: 7,
                color:"#6B778C",
                font: {
                  size: 10,
                }
              }
            }
          },
          plugins: {
            legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });
    }




    if ($("#1marketingOverview").length) {
        const marketingOverviewCanvas = document.getElementById('1marketingOverview');
        new Chart(marketingOverviewCanvas, {
            type: 'bar',
            data: {
                labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                datasets: [{
                    label: 'CO2',
                    data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
                    backgroundColor: "#FF8C8C", // Salmon color
                    borderColor: '#FF8C8C',
                    borderWidth: 0,
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    fill: true,
                },{
                    label: 'CO',
                    data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 190, 300],
                    backgroundColor: "#ADD8E6", // Light blue color
                    borderColor: '#ADD8E6',
                    borderWidth: 0,
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    fill: true,
                },{
                    label: 'NO₂',
                    data: [180, 240, 230, 210, 240, 180, 250, 190, 270, 230, 210, 280],
                    backgroundColor: "#98FF98", // Mint green color
                    borderColor: '#98FF98',
                    borderWidth: 0,
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        tension: 0.4,
                    }
                },
                scales: {
                    y: {
                        border: {
                            display: false
                        },
                        grid: {
                            display: true,
                            drawTicks: false,
                            color:"#F0F0F0",
                            zeroLineColor: '#F0F0F0',
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 4,
                            color:"#6B778C",
                            font: {
                                size: 10,
                            }
                        }
                    },
                    x: {
                        border: {
                            display: false
                        },
                        stacked: false, // Ensures bars are not stacked
                        grid: {
                            display: false,
                            drawTicks: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            autoSkip: true,
                            maxTicksLimit: 7,
                            color:"#6B778C",
                            font: {
                                size: 10,
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });
    }


if ($("#1doughnutChart").length) {
  const doughnutChartCanvas = document.getElementById('1doughnutChart');
  new Chart(doughnutChartCanvas, {
    type: 'doughnut',
    data: {
      labels: ['CO', 'CO₂', 'NO₂', 'Others'],
      datasets: [{
        data: [30, 20, 30, 10],
        backgroundColor: [
          "#FF8C8C",
          "#ADD8E6",
          "#98FF98",
          "Grey"
        ],
        borderColor: [
          "transparent", // Remove border color
          "transparent",
          "transparent",
          "transparent"
        ],
        borderWidth: 1 // Set border width to 1 or remove it if you don't want borders
      }]
    },
    options: {
      cutout: 30,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
                        display: true,
                        position: 'top',
                    }
                }
            }
        });
    }



    if ($.cookie('staradmin2-pro-banner')!="true") {
      document.querySelector('#proBanner').classList.add('d-flex');
      document.querySelector('.navbar').classList.remove('fixed-top');
    }
    else {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('.navbar').classList.add('fixed-top');
    }

    if ($( ".navbar" ).hasClass( "fixed-top" )) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('pt-5');
    }
    else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('pt-5');
      document.querySelector('.navbar').classList.add('mt-3');

    }
    document.querySelector('#bannerClose').addEventListener('click',function() {
      document.querySelector('#proBanner').classList.add('d-none');
      document.querySelector('#proBanner').classList.remove('d-flex');
      document.querySelector('.navbar').classList.remove('pt-5');
      document.querySelector('.navbar').classList.add('fixed-top');
      document.querySelector('.page-body-wrapper').classList.add('proBanner-padding-top');
      document.querySelector('.navbar').classList.remove('mt-3');
      var date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      $.cookie('staradmin2-pro-banner', "true", { expires: date });
    });

  });
  // iconify.load('icons.svg').then(function() {
  //   iconify(document.querySelector('.my-cool.icon'));
  // });


})(jQuery);