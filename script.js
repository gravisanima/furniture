let scrollToElement1 = () =>{
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

let scrollToTop1 = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [42.837520, 74.623187],
    zoom: 17
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [42.837520, 74.623187]
      }
  });
  myMap.geoObjects.add(myGeoObject);
}
