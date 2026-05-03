# iyf-s10-week-06-b4130478-web
Weather api
##author:
-benard mwangi wambui
-b4130478-web
-3 may 2026
##project:
weather api
##
technologies used
-html5
-css
-javascript
etc
##how to run
-clone this repo
-run index.html
<!DOCTYPE html>

<html>
<head>
  <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
  <title>current weather</title>
  <!--css-->
<style>
  body{
    font-family:'source sans pro,san serif';
    font-weight:900;
    font-size:1.3cm;
    color:#fff;
    height:100vh;
    display:flex;
    alighn-item:center;
    justify-content-center;
    backgroundcolor:rgb(0,0,0);
  }
  h1{
    margin:0 auto;
    font-size:2.2cm;
    text-alighn:center;
    color:#fff;
    font-size:8cm;
  }
</style>
</---html--->
<div>
  <div id="description"></div>
  <h1 id ="temp"></h1>
  <div id ="location"></div>
</div>
</---javascript---->
  <script lang ="text/javascript">
fetch(url)
.then (response)=>{
  return response.json();
  )}
const get weather=(cityname)=>{
}
const displayweather= (id)=>{
}
window.onload() {
}
const getweather=(cityName)=>{
  const fetchweather=fetch(
  'https=://api.openweathermap.org/data/2.5/weather?
  q='+
  cityName
  '& appid =' +
  '85bcd3e0e774658d2df86762c530f663'+
  '&units=imperial'
};
fetchweather
.then(function(resp){
  return resp.json()
})
.then(funtion(data);
displayweather(data);
})
.catch(funtion(){
});
}
const displayweather =(d)=>{
  let farenheiht=math.round(d.main.temp);
  let description =d.weather[0].description);
  document.getElementById('description').innerHTML
  =description;
  document.getElementById('temp').innerHTML=
  farenheit + '&deg;';
  document.getElementById('location').innerHTML=d.name;
}
window.onload=function(){
  getweather('nairobi');
}
</script>
</body>
</html>

