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
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
      });

      var input = document.getElementById('searchTextField');
      var options = {
        types: ['(cities)'],
        componentRestrictions: {country: 'nz'}
      };

      autocomplete = new google.maps.places.Autocomplete(input, options);
    }


});
