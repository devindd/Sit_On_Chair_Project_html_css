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


});
