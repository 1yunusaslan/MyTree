$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});


$(document).ready(function () {  
    $("#div2").click(function(){
        $(this).hide();
    });
;})

$(document).ready(function () {  
    $(".div1").click(function(){
        $(this).hide();
    });
;})

$(document).ready(function(){
    $("#ikikere").dblclick(function(){
        $(this).hide();
    })
})

$(document).ready(function () {
   $(".hover").mouseenter(function () { 
        alert("Sana üzerime gelme dedim.!");
        
   });
});

$(document).ready(function () {  
        $("#focus").on({
            focus: function () {  
                $(this).css("background-color","yellow");
            },
            blur: function () {  
                $(this).css("background-color","red");
            }
        })
    // $("#focus").focus(function () {  
    //     $(this).css("background-color","yellow")
    // })
    // $("#focus").blur(function () {  
    //     $(this).css("background-color","red")
    // })
})

$(document).ready(function () {  

    $("#btn").click(function () {  
        $("#deneme").toggle(1000);
    })
    // $("#btn").on({
    //     click: function () {  
    //         $("#deneme").hide(1000);
    //     },
    //     dblclick:function () {
    //         $("#deneme").show(1000);
    //     }
    // })
})

$(document).ready(function () {  
    $("#btn2").click(function () {  
        $("#div3").fadeToggle();
        $("#div4").fadeToggle("slow");
        $("#div5").fadeToggle(5000) ; 
    })
    // $("#btn2").on({
    //     click: function () {  
    //         $("#div3").fadeIn(),
    //         $("#div4").fadeIn("slow"),
    //         $("#div5").fadeIn(5000) ;   
    //     },
    //     dblclick: function () {  
    //         $("#div3").fadeOut(),
    //         $("#div4").fadeOut("slow"),
    //         $("#div5").fadeOut(5000) ; 
    //     }
    // })
})

