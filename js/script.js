function initialize(){
    console.log("working");
    var map;
    var request;
    var ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    google.maps.event.addListener(ac, 'place_changed', function(){
      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            var place = results[i];
          }
        }
      }
    });
  }


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

google.maps.event.addDomListener(window, 'load', initialize);
