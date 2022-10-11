$(document).ready(function(){
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });
});


$(document).ready(function(){
    $("#boredBtn").click(function(){
        $.ajax({
            url: 'https://www.boredapi.com/api/activity/',
            success: function(response){
                console.log(response)
            }
        })
    });
});
