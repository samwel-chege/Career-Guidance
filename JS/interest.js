
/*$(document).ready(function() {
    $("#courses").hide();
    
    $("#one").click(function() {
        $(".courses1").toggle("slow");
    });
     $("#two").click(function() {
        $(".courses2").toggle("slow");
    });
     $("#three").click(function() {
        $(".courses3").toggle("slow");
    });
     $("#four").click(function() {
        $(".courses4").toggle("slow");
    });
     $("#five").click(function() {
        $(".courses5").toggle("slow");
    });
     $("#six").click(function() {
        $(".courses6").toggle("slow");
    });
    
 });*/

 $(document).ready(function(){
     $("h3#one").click(function(q){
         q.preventDefault();
         $("#courses1").show();
         alert("one")
     });
 });
 $(document).ready(function(){
    $("h3#two").click(function(q){
        q.preventDefault();
        $("#courses2").toggle();
    });
});
$(document).ready(function(){
    $("h3#three").click(function(q){
        q.preventDefault();
        $("#courses3").toggle();
    });
});
$(document).ready(function(){
    $("h3#four").click(function(q){
        q.preventDefault();
        $("#courses4").toggle();
    });
});
$(document).ready(function(){
    $("h3#five").click(function(q){
        q.preventDefault();
        $("#courses5").toggle();
    });
});
$(document).ready(function(){
    $("h3#six").click(function(q){
        q.preventDefault();
        $("#courses6").toggle();
    });
});
