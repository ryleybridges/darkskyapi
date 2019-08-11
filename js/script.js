$(document).ready(function(){

  function initialize(){
    var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    google.maps.event.addListener(ac, 'place_changed', function(){
      weatherData();
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});

function weatherData(){
  let darkSkyKey;

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      darkSkyKey = keys['darkSkyKey'];

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
        console.log("all good");
      },
      error: function(){
        console.log('error, something went wrong');
      }
    });
  }
}
