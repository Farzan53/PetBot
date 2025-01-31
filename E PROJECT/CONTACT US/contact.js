document.getElementById('myform').addEventListener('submit',function(event){
    event.preventDefault()
    
        var name = document.getElementById('n1').value
        var email = document.getElementById('e1').value
        var phone = document.getElementById('phone').value
       
        document.getElementById('error_name').style.display = 'none'
        document.getElementById('error_email').style.display = 'none'
        document.getElementById('error_number').style.display = 'none'
        
        console.log(name + email + phone)
    
        var regex_n = /^[a-zA-Z]+$/
        var regex_e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        var regex_m =  /^(\+92|92|0)3\d{2}-?\d{7}$/


        if(name ==''){
            document.getElementById('error_name').textContent = 'input can not be empty'
            var n= document.getElementById('error_name')
            n.style.display = 'block'
            n.style.color = 'red'
        }
        else if (!regex_n.test(name)){
            document.getElementById('error_name').textContent = 'input should be lowercase or uppercase alphabets'
            var n= document.getElementById('error_name')
            n.style.display = 'block'
            n.style.color ='red'
        }
        else if(regex_n.test(name)){
            document.getElementById('error_name').textContent = 'Correct'
            var n= document.getElementById('error_name')
            n.style.display = 'block'
            n.style.color = 'green'
        }



        if(email == ''){
            document.getElementById('error_email').textContent = 'input can not be empty'
            var n= document.getElementById('error_email')
            n.style.display = 'block'
            n.style.color = 'red'
        }
        else if(regex_e.test(email)){
            document.getElementById('error_email').textContent = 'Correct'
            var n= document.getElementById('error_email')
            n.style.display = 'block'
            n.style.color = 'green'
        }





        if(!regex_m.test(phone)){
            document.getElementById('error_number').textContent = 'incorrect number'
            var n= document.getElementById('error_number')
            n.style.display = 'block'
            n.style.color = 'red'
        }
        else if(regex_m.test(phone)){
            document.getElementById('error_number').textContent = 'Correct'
            var n= document.getElementById('error_number')
            n.style.display = 'block'
            n.style.color = 'green'
        }

})    

function formatCNIC(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');
    
    // Format the CNIC as ####-#######-#
    if (value.length <= 5) {
        input.value = value;  // First part
    } else if (value.length <= 12) {
        input.value = value.substring(0, 5) + '-' + value.substring(5);  // Add the first hyphen
    } else {
        input.value = value.substring(0, 5) + '-' + value.substring(5, 12) + '-' + value.substring(12, 13);  // Add the second hyphen
    }
}