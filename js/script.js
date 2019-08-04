$(document).ready(function(){

  let darkSkyKey;

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];
      getWeatherData();
    },
    error: function(){
      console.log('cannot find config.json file, cannot run application');
    }
  });

  getWeatherData = () => {
    $.ajax({
      url: `https://api.darksky.net/forecast/${darkSkyKey}/-41.2865,174.7762`,
      type: 'GET',
      dataType: 'jsonp',
      success: function(dataFromDarkSky){
        console.log(dataFromDarkSky);
      },
      error: function(){
        console.log('error, something went wrong');
      }
    });
  }

  var map;
  function initMap() {
    var input = document.getElementById('location');
    var options = {
      componentRestrictions: {country: 'nz'}
    };
    var autoComplete = new google.maps.places.Autocomplete(input, options);
  }

  google.maps.event.addDomListener(window, 'load', initMap);


});
