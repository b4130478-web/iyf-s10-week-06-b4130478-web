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
