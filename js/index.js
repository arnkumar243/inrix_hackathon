
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

function changeNavigation(include) {
    var allowedNavigation = ["#driver", "#rider", "#upcoming", "#history"]
    allowedNavigation.forEach(element => {
        if(include == element) {
            $(element).css( "display", "flex" );
            $(element + "-nav").addClass("active");
            includeView(include);
        } else {
            $(element).css( "display", "none" );
            $(element + "-nav").removeClass("active");
        }
    })
}

function includeView(include) {
    var includes = $(include + "-include")
    $.each(includes, function () {
      var file = 'views/' + include.substring(1) + '.html'
      $(this).load(file)
    })
}

changeNavigation("#driver");


window.initMap = initMap;


