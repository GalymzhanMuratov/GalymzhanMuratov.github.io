let flag = 0;

function mapload(mapobject) {
    let scrollY = window.scrollY;

    let mapOffset = this.document.querySelector('#map').offsetTop;
    console.log(mapOffset)

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {

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

        flag = 1;
    }

};

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    let mapOffset = this.document.querySelector('#map').offsetTop;
    console.log(mapOffset)

    if ((scrollY >= mapOffset - 500) && (flag == 0)) {

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

        flag = 1;
    }
});

