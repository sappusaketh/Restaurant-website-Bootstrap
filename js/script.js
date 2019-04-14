$(document).ready(function(){
            
    $("#carouselButton").click(function(){
        if($(this).children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $(this).children("span").removeClass("fa-pause")
            $(this).children("span").addClass("fa-play")
        }
        else if($(this).children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $(this).children("span").removeClass("fa-play")
            $(this).children("span").addClass("fa-pause")
        }
    });
    // loginModal Toggle using javascript
    $("#loginButton").click(function(){
        $("#loginmodal").modal('toggle')
    })

    $("#ReservationButton").click(function(){
        $("#ReserveModal").modal('toggle')
    })
    
});