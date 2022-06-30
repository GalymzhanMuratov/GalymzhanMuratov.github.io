ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76200123126051, 37.61114912723088],
        zoom: 14
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    }, {
        preset: 'islands#circleIcon',
        iconColor: '#9D5CD0'
    }),
        myMap.geoObjects
            .add(myPlacemark)
};
