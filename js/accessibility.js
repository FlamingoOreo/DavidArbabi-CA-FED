$(document).ready(function(){
    $("#accessToggle").on('change',function(){
        const orginalFontSize =  $("p").css("font-size").slice(0,-2);
       if($("#accessToggle").is(":checked")){
            $("p").css("font-size",orginalFontSize * 1.2 + "px");
       }else{
            $("p").css("font-size","16px");

       }

    })
    
  
});