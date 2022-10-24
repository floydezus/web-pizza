;(function() {
    if (typeof ymaps === 'undefined' ) {
        return;
    }

    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
                center: [42.283731, 18.866187],
                zoom: 12
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'A custom placemark icon',
                balloonContent: 'This is a pretty placemark'
            }, {

                iconLayout: 'default#image',
                iconImageHref: '../img/common/marker.svg',
                iconImageSize: [40, 60],
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark)
        myMap.behaviors.disable('scrollZoom');
    });

})()