google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Times', 'Sensor_1', 'Sensor_2'],
          [ 'Monday',   30,      40,     ],
          [ 'Tuesday',   40,      45,     ],
          [ 'Wednesday',   45,      48,     ],
          [ 'Thursday',   30,      20,     ],
          [ 'Friday',   30,      20,     ],
          [ 'Satureday',   30,      20,     ],
          [ 'Sunday',   30,      60,     ]
        ]);
        var options = {
          fontName:'TCM',
          hAxis: {
            title: '',
            titleTextStyle: {
                color: "#707070",
                fontName: "TCM",
                fontSize: 18,
                bold: false,
                italic: false
            }
          },
          chartArea:{left:80,right:150,top:40,width:"100%",height:"80%"},
          colors: ['#BED8D6', '#EE987F', '#F4D9AB'],
        };
        
        var chart = new google.visualization.AreaChart(document.getElementById('Record_chart'));
        chart.draw(data, options);
      }