console.log("linked file");

function validateName(name)
{
    var name=name.value;
    console.log(name);
    if(name.length<=5)
    {
        alert("wrong");
    }
}
{
    var lastname=lastname.value;
    console.log(lastname);
    if(lastname.length<=5)
    {
        alert("wrong");
    }
}
function validatePhone(phone){
    var phone=phone.value;
    if(phone.length!=10)
    {
        alert("plz enter a number of length 10.");
    }

}

function validateMessage(message){
    var message=message.value;
    if(message.length>=50)
    {
        alert("plz enter a number of length 50.");
    }

}
function validateEmail(email){
    let regex = /^\S+@\S+\.\S+$/;
    let emailValue = email.value;
    if(!regex.test(emailValue)){
        alert("Enter a valid email")
    }
}



(function ($) {
    "use strict";
    var slideshow = (function(){
        var counter = 0,i,j,
            slides =  $("#slideshow .slide"),
            slidesLen = slides.length - 1;
        for (i = 0,j=9999; i < slides.length; i += 1, j -= 1) {
            $(slides[i]).css("z-index", j);
        }
        return {
            startSlideshow: function () {
                window.setInterval(function () {
                    if (counter === 0) {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    } else if (counter === slidesLen) {
                        counter = 0;
                        slides.eq(counter).fadeIn(function () {
                            slides.fadeIn();
                        });
                    } else {
                        slides.eq(counter).fadeOut();
                        counter += 1;
                    }
                }, 5000);
            }
        };
    }());
    slideshow.startSlideshow();
}(jQuery));