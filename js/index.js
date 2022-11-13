
var defaultNav = "rider";

function initialize(){

  //The center location of our map.
  const coordinates = {lat: 37.3485345, lng: -121.9364432};
  var centerOfMap = new google.maps.LatLng(37.3485345,-121.9364432);

  var options = {
      center: centerOfMap,
      zoom: 13,
      mapTypeControl: true,
      mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
      }
  };

  //Create the map object.
  const driver_map = new google.maps.Map(document.getElementById('driver-map'), options);
  const driver_marker = new google.maps.Marker({
    position: coordinates,
    map: driver_map
  });
  const rider_map = new google.maps.Map(document.getElementById('rider-map'), options);
  const rider_marker = new google.maps.Marker({
    position: coordinates,
    map: rider_map
  });

  const trafficlayer = new google.maps.TrafficLayer();

  trafficlayer.setMap(driver_map);

  // Get element from which input should be taken
  var driver_from = document.getElementById('driver-from');
  var driver_to = document.getElementById('driver-to');
  var rider_from = document.getElementById('rider-from');
  var rider_to = document.getElementById('rider-to');

  // Initialize an object for the Google Maps Autocomplete API service (Since we have both origin and destination,
  // we will create two objects, one for each)
  driver_from_auto = new google.maps.places.Autocomplete(driver_from,
  {
      type: ['establishment'],
      componentRestrictions: {'country': ['US']},
      fields: ['place_id','geometry','name']
  });
  driver_to_auto = new google.maps.places.Autocomplete(driver_to,
  {
      type: ['establishment'],
      componentRestrictions: {'country': ['IN']},
      fields: ['place_id','geometry','name']
  });
  rider_from_auto = new google.maps.places.Autocomplete(rider_from,
    {
        type: ['establishment'],
        componentRestrictions: {'country': ['US']},
        fields: ['place_id','geometry','name']
    });
  rider_to_auto = new google.maps.places.Autocomplete(rider_to,
  {
      type: ['establishment'],
      componentRestrictions: {'country': ['IN']},
      fields: ['place_id','geometry','name']
  });
  

  // This will call "onPlaceChanged" function when an option from the dropdown suggestions is selected.
  // 'place_changed' is a value in google maps JavaScript API
  // autocomplete.addListener('place_changed', onOriginChanged);
  // autocomplete2.addListener('place_changed',onDestinationChanged);
}

// This line is responsible for loading this file and map on page.
  function changeNavigation(include) {
      var allowedNavigation = ["#driver", "#rider", "#upcoming", "#history"]
      allowedNavigation.forEach(element => {
          if(include == element) {
              $(element).css( "display", "flex" );
              $(element + "-nav").addClass("active");
              
              
          } else {
              $(element).css( "display", "none" );
              $(element + "-nav").removeClass("active");
          }
      })
  }
  
  changeNavigation("#driver");

google.maps.event.addDomListener(window, 'load', initialize);



