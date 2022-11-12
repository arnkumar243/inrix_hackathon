
var defaultNav = "rider";


function initMap() {
    console.log("init map is called");
    // The location of Uluru
    const uluru = { lat: 37.3496, lng: -121.955238 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

function includeNavigation(include) {
    var allowedNavigation = ["#driver", "#rider", "#upcoming", "#history"]
    allowedNavigation.forEach(element => {
        document.getElementById
        if(include == "#" + element) {
            $(include).css( "display", "block" );
        } else {
            $(include).css( "display", "none" );
        }
    })
}

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
})

function changeNavigation(navType) {

}


window.initMap = initMap;


