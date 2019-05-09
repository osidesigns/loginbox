
var submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = validateForm;




function validateForm(){
    var inputs = document.querySelectorAll('input');
    var err = [];
    inputs.forEach(function(input){
        if(input.value == ''){
            err.push(input.getAttribute('id'));
        }
    });
    
    return err;
}