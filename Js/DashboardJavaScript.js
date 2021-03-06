const username = /^[a-z\s]{5,15}$/i;
const Regnumber = /^[0-9\s+-]{4,20}$/;


$(document).ready(function(){
    

$(document).click(function(event){

    var current = $(event.target).text();
    if(current == "Remove"){
        
        swal({
            title: "Remove",
            text: "Are you sure you want to remove this item?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          
          .then((willDelete) => {
            if (willDelete) {
                
                $(event.target).parent().remove();
               
                swal( "Item delted!", {
                    icon: "success",
                            });
            
            } 
            
          });


    }


});

$("#para1").click(function (){

    $("form p, #id, #para1").hide();
    $("input").val("");
    // $('#id').hide();
    $("input, textarea").show();
    $("#confirmeditbutton").removeAttr('hidden');
    $("#confirmeditbutton").val("Confirm Edit");
    //$("form").append('<input name="submit" type="submit" class= "btn btn-danger" value="Confirm Edit">');
    // $("#para1").hide();   


});

$("form").submit(function(e){

    var nam = $("input[name='namee']").val();
    var number = $("input[name='number']").val();
    var city = $("input[name='city']").val()
    var address = $("textarea[name='address']").val();

    if(nam == ""){
        
        swal({
            title:"Name Error",   
            text:"Enter the Name",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });
    
        e.preventDefault();
        
    }
    
    else if(!(username.test(nam))){
            
        swal({
                        title:"Name Error",   
                        text:"Name should be between 5 and 15 characters and contains Alphabets only",
                        icon:"warning",
                        type: "error",
                        confirmButtonText: "Ok",
                    });
                    
        
        e.preventDefault();
       

    }
    /*
    else if(number == ""){
        
        swal({
            title:"Number Error",   
            text:"Enter the Phone Number",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });
        

    }

    else if(!Regnumber.test(number)){
        
        swal({
            title:"Number Error",   
            text:"Enter the Phone Number in correct order\nNumber could have +, - and white spaces.\nExamples +xx-xxx-xxxxxxxx +92 xxx xxxxxxxx or xxxxxxxxx should be between 4 to 20",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });

        e.preventDefault();

    }
    */
    else if(city == ""){
        
        swal({
            title:"City Error",   
            text:"Enter the City",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });
        
    e.preventDefault();

    }
    
    else if(!username.test(city)){
        
        swal({
            title:"City Error",   
            text:"You can write only alphabets in between 5 to 15",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });

      e.preventDefault();
    
    }

    else if(address == ""){
        
        swal({
            title:"City Error",   
            text:"Enter the Address",
            icon:"warning",
            type: "error",
            confirmButtonText: "Ok",
        });
        

        e.preventDefault();
    }
    
    else{


        swal({
            
            title:"Edited",   
            text:"Your Information has been edited successfully.",
            icon:"success",
            type: "error",
            confirmButtonText: "Ok"
            })
        


    $("input, textarea").hide();

    $("form #namee").text(nam);
    $("form #number").text(number);
    $("form #city").text(city);
    $("form #address").text(address);

    $("form button").remove();
    $("form p, #id").show();
    $("#para1").show();
    

    e.preventDefault();



    }


});



});
