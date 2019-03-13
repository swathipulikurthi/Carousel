var appRoot = angular.module('myApp');
appRoot.directive('myCarousel', function () {
    return {
        restrict: 'E',
        templateUrl: 'my-carousel.html',
        scope: true,
        link: function ($scope, $element, $attrs) {
            var carouselDom = $element[0].children[0];
            //debugger;
            var carouselContainer = carouselDom.children[0];
            var btnLeft = angular.element(carouselDom.children[1].children[0]);
            var btnRight = angular.element(carouselDom.children[1].children[1]);
            var dotIndex = [];
            imagesCount=$scope.vm.imageUrls.length;
            var dotCount=Math.ceil($scope.vm.imageUrls.length/3);
            for (var i = 0; i <dotCount; i++) {
                dotIndex[i] = angular.element(carouselDom.children[2].children[i]);
            }
            var dotScrollWidth = 600;
            var scrollWidth = 600;
            for (var i = 0; i <dotCount; i++) {
                dotIndex[i].on('click', { index: i }, dotScroll);
            }
            indexButton = 0;
            function dotScroll(event) {
                var index = event.data.index;
                scrollValue = (index * dotScrollWidth);
                angular.element(carouselContainer).animate({ scrollLeft: scrollValue }, 400);
                activeDot(index);
                indexButton = index;
            }
            function activeDot(input) {
                $element.find('li').filter(function () {
                    return angular.element(this).removeClass('active');
                });
                angular.element(carouselDom.children[2].children[input]).addClass('active');
            }
            btnLeft.on('click', scrollLeft);
            btnRight.on('click', scrollRight);
            ScrollLimit=dotCount*200;
            function scrollRight() {
                if (carouselContainer.scrollLeft <=ScrollLimit) {
                    indexButton++;
                    angular.element(carouselContainer).animate({ scrollLeft: '+=' + scrollWidth }, 400);
                }
                else {
                    angular.element(carouselContainer).animate({ scrollLeft: '0' }, 900);
                    indexButton = 0;
                }
                activeDot(indexButton);
            }
            function scrollLeft() {

                // if (carouselContainer.scrollLeft >= ScrollLimit) {
                //     angular.element(carouselContainer).animate({ scrollLeft: '0' }, 900);
                //     indexButton = 0;
                // }
            
                    angular.element(carouselContainer).animate({ scrollLeft: '-=' + scrollWidth }, 400);
                    indexButton--;
                
                activeDot(indexButton);
            }
        }
    }
})