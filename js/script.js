document.addEventListener('DOMContentLoaded', function(){
   console.log('DOM Content Loaded!');


// rozwijane menu //
   var ofirmie = document.querySelector('.nav li:first-child');
   console.log(ofirmie);
       var submenu = document.querySelector('.nav li > ul');

       ofirmie.addEventListener('mouseover', function(){
           submenu.style.display='block';
       });
       ofirmie.addEventListener('mouseout', function(){
           submenu.style.display='none';
       });

//znikające belki przy zdjęciach//

    var products = document.querySelector('.photobox');
    var description = document.querySelector('.banner');

    products.addEventListener('mouseover', function(){
        description.style.transform = 'scale(0)';
        description.style.transition = '300ms ease-in';
        products.style.transform = 'scale(1.04)';
        products.style.transition = '0.5s';
    });
    products.addEventListener('mouseout', function(){
        description.style.visibility = 'visible';
        description.style.transform = 'scale(1)';
        description.style.transition = '300ms ease-in';
        products.style.transform = 'scale(1.0)';
        products.style.transition = '0.5s';
    });

    var products2 = document.querySelector('.photoboxcenter');
    var description2 = products2.querySelector('.banner');

        products2.addEventListener('mouseover', function(){
        description2.style.transform = 'scale(0)';
        description2.style.transition = '300ms ease-in';
        products2.style.transform = 'scale(1.04)';
        products2.style.transition = '0.5s';
    });
        products2.addEventListener('mouseout', function(){
        description2.style.visibility = 'visible';
        description2.style.transform = 'scale(1)';
        description2.style.transition = '300ms ease-in';
        products2.style.transform = 'scale(1.0)';
        products2.style.transition = '0.5s';
    });

//Slider

var prev = document.querySelector('.arrowl');
console.log(prev);
var next = document.querySelector('.arrowr');
console.log(next);
var slider = document.querySelectorAll('.box1 li');
console.log(slider);
var visible = document.querySelector(".box1 .visible");
console.log(visible);

next.addEventListener("click", function(){
  var visible = document.querySelector(".box1 .visible");
  console.log(visible);
  if (visible == slider[slider.length-1]) {
    slider[0].classList.remove("hidden");
    slider[0].classList.add("visible");
  } else {
    visible.nextElementSibling.classList.add("visible");
    visible.nextElementSibling.classList.remove("hidden");
  }
  visible.classList.remove("visible");
  visible.classList.add("hidden");
});
prev.addEventListener("click", function(){
  var visible = document.querySelector(".box1 .visible");
  console.log(visible);
  if (visible == slider[0]) {
    slider[slider.length -1].classList.remove("hidden");
    slider[slider.length -1].classList.add("visible");
  } else {
    visible.previousElementSibling.classList.add("visible");
    visible.previousElementSibling.classList.remove("hidden");
  }
  visible.classList.remove("visible");
  visible.classList.add("hidden");
});

// //tablica z elementami
// function array(element) {
//     var newArr = [];
//     for(var i=0; i<element.length; i++){
//         newArr.push(element[i]);
//     }
//     return newArr;
// }
//
// //tablica z photo
// var sliderArray = array(slider);
//
// console.log(sliderArray);
// var index = 0;
//
// //add wszystkim visible
// sliderArray[index].classList.add('visible');
//
// next.addEventListener('click',function(){
//     console.log('next');
//     sliderArray[index].classList.remove('visible');
//     index++;
//
//     //petla przy ostatnim
//     if(index > sliderArray.length - 1){
//         index = 0;
//     }
//
//     sliderArray[index].classList.add('visible');
// });
//
// prev.addEventListener('click',function(){
//     console.log('prev');
//     sliderArray[index].classList.remove('visible');
//     index--;
//
// //zapętlenie
//     if(index<0){
//         index = sliderArray.length - 1;
//     }
//
//     sliderArray[index].classList.add('visible');
//
//
// });

});
