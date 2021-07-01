$(document).ready(function(){
     $("h3#one").click(function(q){
         q.preventDefault();
         $("#course1").toggle();
     });
 });
 $(document).ready(function(){
    $("h3#two").click(function(q){
        q.preventDefault();
        $("#course2").toggle();
    });
});
$(document).ready(function(){
    $("h3#three").click(function(q){
        q.preventDefault();
        $("#course3").toggle();
    });
});
$(document).ready(function(){
    $("h3#four").click(function(q){
        q.preventDefault();
        $("#course4").toggle();
    });
});
$(document).ready(function(){
    $("h3#five").click(function(q){
        q.preventDefault();
        $("#course5").toggle();
    });
});
$(document).ready(function(){
    $("h3#six").click(function(q){
        q.preventDefault();
        $("#course6").toggle();
    });
});
$(document).ready(function() {
    $("button#itA").click(function(q){
        q.preventDefault();
        $("#IT").toggle();
        $("#BA").hide();
        $("#LA").hide();
        $("#accounting").hide();
        $("#HE").hide();
        $("#MECH").hide();
    })
})
$(document).ready(function() {
    $("button#itB").click(function(q){
        q.preventDefault();
        $("#BA").toggle();
        $("#IT").hide();
        $("#LA").hide();
        $("#accounting").hide();
        $("#HE").hide();
        $("#MECH").hide();
    })
})
$(document).ready(function() {
    $("button#itC").click(function(q){
        q.preventDefault();
        $("#LA").toggle();
        $("#BA").hide();
        $("#IT").hide();
        $("#accounting").hide();
        $("#HE").hide();
        $("#MECH").hide();
    })
})
$(document).ready(function() {
    $("button#acc").click(function(q){
        q.preventDefault();
        $("#accounting").toggle();
        $("#BA").hide();
        $("#IT").hide();
        $("#LA").hide();
        $("#HE").hide();
        $("#MECH").hide();
    })
})
$(document).ready(function() {

    $("button#econ").click(function(q){
        q.preventDefault();
        $("#HE").toggle();
        $("#BA").hide();
        $("#IT").hide();
        $("#LA").hide();
        $("#accounting").hide();
        $("#MECH").hide();
    })
})

  $(document).ready(function(){

    $("button#ENG").click(function(q){
        q.preventDefault();
        $("#MECH").toggle();
        $("#BA").hide();
        $("#IT").hide();
        $("#LA").hide();
        $("#HE").hide();
        $("#accounting").hide();
    })
})

$(document).ready(function() {
    $("#btn6").click(function(){
       alert("ThankYou for your interest, we'll get back at you shortly");
       window.location.href="../index.html";
    })
})

