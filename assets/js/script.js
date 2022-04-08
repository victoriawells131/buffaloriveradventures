async function ShowLevel(){

  var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660,07055680,07055780&period=P7D&parameterCd=00065&siteStatus=active";;
  var msgObject = await fetch(myURL);
  var msgJSONText = await msgObject.text();
  var msg = JSON.parse(msgJSONText);
 //document.getElementById("msg").innerHTML = msgJSONText; //graph will not display with this uncommented

  var dates = [];
  var values = [];

  /* Site 1 */
/* fLen contains the length of the array (number of values) */
fLen = msg.value.timeSeries[0].values[0].value.length
for (i = 0; i < fLen; i++) { 
    values[i] = msg.value.timeSeries[0].values[0].value[i].value
	dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime
}
var sitename = msg.value.timeSeries[0].sourceInfo.siteName
var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value
var sitedescription = msg.value.timeSeries[0].variable.variableDescription

/* Put your code here to display a graph of values and dates */

var myChart = new Chart("myChart", {
  type: "bar",
  data: {
      
      datasets: [{
      
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      data: values
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 2, max:10}}],
    }
  }
});









}