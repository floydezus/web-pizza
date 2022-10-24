;(function() {

    var scroll = function (target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;
        var headerHeight = document.querySelector('.header-page').clientHeight;

        window.scrollTo(0, targetOffsetTop - headerHeight);
    }

    myLib.body.addEventListener('click', function (e) {
        var target = e.target;
        var scrollToItemClass = myLib.closestAttribute(target, 'data-scroll-to');

        if (scrollToItemClass === null) {
            return;
        }

        e.preventDefault();
        var scrollToItem = document.querySelector('.' + scrollToItemClass);
        scroll(scrollToItem);
    })
})();