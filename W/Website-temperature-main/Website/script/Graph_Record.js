//line
var ctxL = document.getElementById("RecordChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["06.00", "06.15", "06.30", "06.45", "07.00","07.15","07.30","07.45","08.00","08.15","08.30","08.45","09.00","09.15","09.30","09.45","10.00","10.15","10.30","10.45","11.00","11.15","11.30","11.45","12.00","12.15","12.30","12.45","13.00",],
datasets: [{
label: "Monday",
data: [0, 32, 80, 81, 56, 55, 40,53,97,31,64,46,81,31,25,46,13,54,43,64,34,35,15,64,36,26,59,7,6],
backgroundColor: [
'rgba(0, 140, 110, .2 )',
],
borderColor: [
'red',
],
borderWidth: 2
},
{
label: "Tuseday",
data: [97,31,64,46,81,31,25,46,13,54,43,64,34,35,15,64,36,26,59,7,60, 32, 80, 81, 56, 55, 40,53,100],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});