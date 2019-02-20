
  $( document ).ready(function() {

   $("#patient_monitor").hide();
   $("#Telerehabitation").hide();
   $("#iQuant").hide();
   $("#Ecgsens").hide();


    $(".container").typed({

        strings: ["H i i i i i i i . . .", "Its MSF@OFFICIAL", "Its Web Technology Blog", "Have a great day!"],
        stringsElement: null,
      
        // typing speed
        typeSpeed:200,
      
        // time before typing starts
        startDelay:5,
      
        // backspacing speed
        backSpeed: 0,
      
        // shuffle the strings
        shuffle: false,
      
        // time before backspacing
        backDelay: 500,
      
        // Fade out instead of backspace
        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500, // milliseconds
      
        // loop
        loop: false,
      
        // false = infinite
        loopCount: false,
      
        // show cursor
        showCursor: true,
      
        // character for cursor
        cursorChar: "|",
      
        
        // attribute to type (null == text)
        attr: null,
      
        // either html or text
        contentType: 'html'
        
      });
});


$(document).ready(function(){
  $('.submit').click(function(event){
   // event.preventDefault() 
    console.log("clidked");
  })
})


function openmodel(){
  $( "#patient_monitor" ).dialog({
                   maxWidth:600,
                    maxHeight: 500,
                    width: 600,
                    height: 500,
                    modal: true,
  });
}

function openmodel1(){
  $( "#Telerehabitation" ).dialog({
                  maxWidth:600,
                    maxHeight: 500,
                    width: 600,
                    height: 500,
                    modal: true,
  });
}
function openmodel2(){
  $( "#iQuant" ).dialog({maxWidth:600,
    maxHeight: 500,
    width: 600,
    height: 500,
    modal: true,});
}
function openmodel3(){
  $( "#Ecgsens" ).dialog({
    maxWidth:600,
                    maxHeight: 500,
                    width: 600,
                    height: 500,
                    modal: true,
  });

 
}

function social1(){
  // window.location.replace("https://www.facebook.com/shaik.fareed.9");
  window.open('https://www.facebook.com/shaik.fareed.9', 'facebook');
}
function social2(){
  // window.location.replace("https://www.instagram.com/m_s_f__f_a_r_e_e_d/");
  window.open('https://www.instagram.com/m_s_f__f_a_r_e_e_d/', 'insta');
}
function social3(){
  // window.location.replace("https://github.com/fareedmsf/");
  window.open('https://github.com/fareedmsf/', 'github');
}
function social4(){
  // window.location.replace("https://www.linkedin.com/in/shaik-fareed-028418118/");
  window.open('https://www.linkedin.com/in/shaik-fareed-028418118/', 'linkedin');
}