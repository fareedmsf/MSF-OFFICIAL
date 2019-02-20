list$.get("https://kristujayanti.edu.in/home/", {}, function(results){
 // alert(results); // will show the HTML from anotherPage.html
 //alert($(results).find("div.news").html()); // show "scores" div in results
 var news =$(results).find(".demo2").html();
 $("#regTitle").html(news);

 var lis = document.getElementById("regTitle").getElementsByTagName("li");
  

 $("#").html(lis);
   
   

});


// var numberArray = [0,1,2,3,4,09];
// jQuery.each(numberArray , function(index, value){
//      console.log(index + ':' + value);
// });
// //outputs: 1:1 2:2 3:3 4:4 5:5