$(document).ready(function(){
  $(".dropdownbox").click(function(){
    $(".menu").toggleClass("showMenu");
      $(".menu > li").click(function(){
        $(".dropdownbox > p").text($(this).text());
        $(".menu").removeClass("showMenu");

          map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 40.71427, lng:  -74.00597},
          mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: [
          new google.maps.LatLng(40.71427, -74.00597),
          new google.maps.LatLng(40.71427, -74.00598),
          new google.maps.LatLng(40.717, -74.00597),
          new google.maps.LatLng(40.81427, -74.00597),
          new google.maps.LatLng(40.94, -74.00597),
          new google.maps.LatLng(40.85, -74.00597),
          new google.maps.LatLng(40.88, -74.00597),
          new google.maps.LatLng(40.84, -74.00597),
          new google.maps.LatLng(40.80, -74.00597),
          new google.maps.LatLng(40.71427, -74.10597),
          new google.maps.LatLng(40.71427, -74.10598),
          new google.maps.LatLng(40.717, -74.01597),
          new google.maps.LatLng(40.81427, -74.06597),
          new google.maps.LatLng(40.94, -74.06597),
          new google.maps.LatLng(40.85, -74.03597),
          new google.maps.LatLng(40.88, -74.07597),
          new google.maps.LatLng(40.84, -74.04597),
          new google.maps.LatLng(40.80, -74.06597),
          new google.maps.LatLng(40.71427, -74.00598),
          new google.maps.LatLng(40.717, -74.01597),
          new google.maps.LatLng(40.81427, -74.06597),
          new google.maps.LatLng(40.94, -74.16597),
          new google.maps.LatLng(40.85, -74.23597),
          new google.maps.LatLng(40.88, -74.17597),
          new google.maps.LatLng(40.84, -74.14597),
          new google.maps.LatLng(40.80, -74.16597),],
          map: map
        });
      });
  });

});

$(document).ready(function(){
  $(".dropdownboxB").click(function(){
    $(".menub").toggleClass("show");
      $(".menub > li").click(function(){
        $(".dropdownboxB > p").text($(this).text());
        $(".menub").removeClass("show");
        heatmap.set('radius', heatmap.get('radius') ? null : ($(this).text()));
      });
  });

});
