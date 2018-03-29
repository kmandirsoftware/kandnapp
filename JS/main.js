//var base = 'http://localhost:5000/';
var base = 'https://keithandnikki.herokuapp.com/';
var registerservice = base + 'register';

$(document).ready(function(){
//.addEventListener('toggle', myFunction);
});

function registerusers(){
    var choices={};
    choices.accept='false';
    console.log("called myFunction");
   var name = document.getElementById("textName").value;
    choices.name = name;
    console.log(name);
   $("input:checkbox[class=chk]").each(function () {
         if($(this).is(":checked")){
           if($(this).attr("id") == "acceptInvite"){
              accepted = 'true';
              choices.accept='true';
           }
           if($(this).attr("id") == "mealchoice"){
              mymealchoice = $(this).val();
              console.log(mymealchoice);
              choices.foodchoice=mymealchoice;
              choices.accept='true';
           }
           console.log("Id: " + $(this).attr("id") + " Value: " + $(this).val() );
         }
      });
    registeruser(choices);
}


function registeruser(choices) {
    $.ajax(
    {
        type: "GET",
        url: registerservice + '?foodchoice=' + choices.foodchoice+ '&name=' + choices.name + '&accept='+ choices.accept,
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data) {
           //$("#catalog tbody tr").remove();
        },

        error: function (msg) {
            alert(msg.responseText);
        }
    });
}
