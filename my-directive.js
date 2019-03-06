var appRoot = angular.module('myApp');
appRoot.directive('myCarousel',function()
{
    return{
        restrict:'E',
        templateUrl:'my-carousel.html',
        scope:true,//non-isolated directive can use parent's scope properties
        
        link:function($scope,$element,$attrs)
        {
   
            
           var carouselDom=$element[0].children[0];
            //debugger;
           var carouselContainer=carouselDom.children[0];
           var btnLeft=angular.element(carouselDom.children[1].children[0]);
           var btnRight=angular.element(carouselDom.children[1].children[1]);
           var dotIndex=[];

        //    var dotIndex0= angular.element(carouselDom.children[2].children[0]);
        //    var dotIndex1= angular.element(carouselDom.children[2].children[1]);
        //    var dotIndex2= angular.element(carouselDom.children[2].children[2]);
        //    var dotIndex3= angular.element(carouselDom.children[2].children[3]);
        //    var dotIndex4= angular.element(carouselDom.children[2].children[4]);
        //    var dotIndex5= angular.element(carouselDom.children[2].children[5]);
        //    var dotIndex6= angular.element(carouselDom.children[2].children[6]);

           for(var i=0;i<=6;i++)
           {
            dotIndex[i]=angular.element(carouselDom.children[2].children[i]);
           }
           
           var dot_scrollValue=200;
           var scrollWidth=200;

        //   dotIndex0.on('click',{index:0},dot_scrollRight);
        //   dotIndex1.on('click',{index:1},dot_scrollRight);
        //   dotIndex2.on('click',{index:2},dot_scrollRight);
        //   dotIndex3.on('click',{index:3},dot_scrollRight);
        //   dotIndex4.on('click',{index:4},dot_scrollRight);
        //   dotIndex5.on('click',{index:5},dot_scrollRight);
        //   dotIndex6.on('click',{index:6},dot_scrollRight);

          for(var i=0;i<=6;i++)
           {
            dotIndex[i].on('click',{index:i},dot_scrollRight);
           }

         
          function dot_scrollRight(e)
           {
               var index=e.data.index;

               console.log("called"+""+index);
               scrollValue=(index*dot_scrollValue);
            
            angular.element(carouselContainer).animate({scrollLeft:scrollValue},400);

        //     var elems =$element.find('li') //this code also works 
        // angular.forEach(elems,function(v,k)
        // {
        // if(angular.element(v).hasClass('active')){
        //     angular.element(v).removeClass('active');
        // }});

            $element.find('li').filter(function() {
                return angular.element(this).removeClass('active');
            });
            // for(var i=0;i<=6;i++)
            // {
            // angular.element(carouselDom.children[2].children[i]).removeClass('active');
            // }
            angular.element(carouselDom.children[2].children[index]).addClass('active');
           
           }

        //   dotIndex0.on('click',scrollRight);
        //   dotIndex1.on('click',function());
        //   dotIndex2.on('click',dot_scrollRight(2));
        //   dotIndex3.on('click',dot_scrollRight);
        //   dotIndex4.on('click',dot_scrollRight(4));
        //   dotIndex5.on('click',dot_scrollRight(5));
        //   dotIndex6.on('click',dot_scrollRight(6));

      
          
           btnLeft.on('click',scrollLeft);
           btnRight.on('click',scrollRight);
           
          function scrollRight()
           {
            if(carouselContainer.scrollLeft < 800) 
            {
            angular.element(carouselContainer).animate({scrollLeft:'+='+scrollWidth},400);
            }
            else{

                angular.element(carouselContainer).animate({scrollLeft:'0'}, 900);

            }
              
           
           }
           function scrollLeft() {
            if(carouselContainer.scrollLeft >= 800) {
            angular.element(carouselContainer).animate({scrollLeft: '0'}, 900);
            }
            else {
            angular.element(carouselContainer).animate({scrollLeft: '-=' + scrollWidth}, 400);
            }
        }
    }
       
    }
})