
  $( document ).ready(function() {

   

    $(".container").typed({

        strings: ["H i i i i i i i . . .", "Its MSF@OFFICIAL", "Have a great day!"],
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


