
$(document).ready(function(){
    const a=[$('#fnameEr'),$('#snameEr'), $('#mailEr'),$('#npEr'),$('#cpEr')];
    const ar=[$('#fName'), $('#sName'), $('#email'),$('#nPassword'),$('#cPassword')];
    $('#hs').click(function(){
        if(Fname()){
            if(Sname()){
                if(Mail()){
                    if(Npassword()){
                        if(Cpassword()){
                            $("#hi").text($('#fname').val());
                            var modal = new bootstrap.Modal($("#myModal"));

                           
                            modal._element.addEventListener('hidden.bs.modal', function () {
                                // Reset the form when the modal is hidden
                                $("#myForm")[0].reset();
                              
                            });
                            
                            // Show the modal
                            $(".user").text($('#fName').val());
                            
                            modal.show();
                            
                        }
                        else{
                            for(let i=0;i<a.length-1;i++){
                                    a[i].text('');
                                    ar[i].css("borderColor","#d6d4d4");
                            }
                        }
                    }
                    else{
                        for(let i=0;i<a.length-1;i++){
                            if(i>3){
                                a[i].text('');
                                ar[i].css("borderColor","#d6d4d4");
                                console.log("mantena");
                            }
                        }
                    }
                }
                else{
                    for(let i=0;i<a.length;i++){
                        if(i>2){
                            a[i].text('');
                            ar[i].css("borderColor","#d6d4d4");
                        
                        }
                    }
                }
            }    
            else{
                for(let i=0;i<a.length;i++){
                    if(i>1){
                        a[i].text('');
                        ar[i].css("borderColor","#d6d4d4");
                    
                    }
                }
            }
        }
        else{
            for(let i=0;i<a.length;i++){
                if(i>0){
                    a[i].text('');
                    ar[i].css("borderColor","#d6d4d4");
                
                }
            }
        }  
    });
    function Fname(){
        var Fname=$("#fName").val();
        if(Fname===''){
            $("#fnameEr").text('Please give your first name');
            $('#fName').css("borderColor","red");
            $("#fnameSc").text('');
            return false;
        }
        else if(checkName(Fname)&&(Fname.charAt(0)>='A'&&Fname.charAt(0)<='Z')){
            $("#fnameSc").text('');
            $('#fName').css("borderColor","green");
            $("#fnameEr").text('');
            return true;
        }
        else{
            $("#fnameEr").text('Please give letters only and first letter must be capital..!');
            $("#fnameSc").text('');
            $('#fName').css("borderColor","red");
            return false;
        }
        function checkName(input) {
            let nameReg = /^[a-zA-Z]+$/;
            let valid = nameReg.test(input);
            return valid;
        }  
    }
    function Sname(){
        var Sname=$("#sName").val();
        if(Sname===''){
            $("#snameEr").text('Please give your second name');
            $("#snameSc").text('');
            $('#sName').css("borderColor","red");
            return false;
        }
        else if(checkName(Sname)){
            $("#snameSc").text('');
            $("#snameEr").text('');
            $('#sName').css("borderColor","green");
            return true;
        }
        else{
            $("#snameEr").text('Please give letters only..!');
            $("#snameSc").text('');
            $('#sName').css("borderColor","red");
            return false;
        }
        function checkName(input) {
            let nameReg = /^[a-zA-Z]+$/;
            let valid = nameReg.test(input);
            return valid;
        }

    }
    function Mail(){
        var Email=$("#email").val();
        if(Email===''){
            $("#mailEr").text('Please give your mailId');
            $("#mailSc").text('');
            $('#email').css("borderColor","red");
            return false;
        }
        else if(checkMail(Email)){
            $("#mailSc").text('');
            $("#mailEr").text('');
            $('#email').css("borderColor","green");
            return true;
        }
        else{
            $("#mailEr").text('Please give valid mail..!');
            $("#mailSc").text('');
            $('#femail').css("borderColor","red");
            return false;
        }
        function checkMail(input){
            let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                let valid = emailReg.test(input);
                    return valid;
        }
    }
    
    function Npassword(){
        var Npassword=$("#nPassword").val();
    
        if(Npassword===''){

            console.log("hiiii");
            $("#npEr").text("Please Give your password");
         
            $("#nPassword").css("borderColor","red");
            return false;
        }
        else if(checkPassword(Npassword)){
            $("#nPassword").css("borderColor","green");
            $("#npEr").text('');
            return true;
        }
        else{
            $("#npEr").text('Password should contain one number,one capital letter,one small letter,one symbol and atleast 8 characters..!');
            $("#nPassword").css("borderColor","red");
            return false;
        }
        function checkPassword(input) {
            let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            let valid = regex.test(input);
            return valid;
        }
    }
    function Cpassword(){
        var Npassword=$("#nPassword").val();
        var Cpassword=$("#cPassword").val();
        if(Cpassword===''){
            $("#cpEr").text("Please conform your password");
         
            $("#cPassword").css("borderColor","red");
            return false;
        }
        else if(Npassword===Cpassword){
            $("#cPassword").css("borderColor","green");
            $("#cpEr").text('');
            return true; 
        }
        else{
            $("#cpEr").text('password does not match...!');
            $("#cPassword").css("borderColor","red");
            return false;
        }
    }
    
    // function Check(){
    //     var checkinput = $('input[type="checkbox"]:checked').val();
    //     if(checkinput!=undefined){
    //         $('#check').css("borderColor","green");
    //         $("#chSc").text('');
    //         $("#chEr").text('');
    //         return true;
    //     }
    //     else{
    //         $('#check').css("borderColor","red");
    //         $("#chEr").text('Please give your conformation');
    //         $("#chSc").text('');
    //         return false;
    //     }
    // }
   

    $("#fName").val();
});


$(document).ready(function() {
    console.log($("#fName").val(),"mahihahahahaha");
  $("#st1").click(function() {
    $("#review").css("display","block");
      $(".fa-star").css("color", "black");
      $("#st1").css("color", " #f1c40f");
      $('#misc').text('VeryBad');
      $('#misc').css({
        'color': 'red',
      'font-weight': 'bold',
     
    
     
    });
    $('#emj').html('<h5 class=ms-2>&#128532;</h5>');


  });
  $("#st2").click(function() {
    $("#review").css("display","block");
      $(".fa-star").css({"color": "black"});
      $("#st1, #st2").css("color", " #f1c40f");
      $('#misc').text('Bad');
      $('#misc').css({
        'color': '#ed5311',
      'font-weight': 'bold',
     
     
      
    });
    $('#emj').html('<h5 class=ms-2>&#128530;</h5>');

  });
  $("#st3").click(function() {
    $("#review").css("display","block");
      $(".fa-star").css("color", "black")
      $("#st1, #st2, #st3").css("color", " #f1c40f");
      $('#misc').text('Good');
      $('#misc').css({
        'color': 'green',
      'font-weight': 'bold',
    
   

    });
    $('#emj').html('<h5 class=ms-2>&#128512;</h5>');
  });
  $("#st4").click(function() {
    $("#review").css("display","block");
      $(".fa-star").css("color", "black");
      $("#st1, #st2, #st3, #st4").css("color", " #f1c40f");
      $('#misc').text('VeryGood');
      $('#misc').css({
        'color': 'green',
      'font-weight': 'bold'
      
   

    });
    $('#emj').html('<h5 class=ms-2>&#128516;</h5>');


  });
  $("#st5").click(function() {
    $("#review").css("display","block");
      $(".fa-star").css("color", "black");
      $("#st1, #st2, #st3, #st4, #st5").css("color", " #f1c40f");
      $('#misc').text('Excellent');
      $('#misc').css({
        'color': 'green'
   

    });
    $('#emj').html('<h5 class=ms-2>&#128525;</h5>');

  });
});
function final(){
    alert("Thanks for your honest review");
    // Additional logic if needed
}