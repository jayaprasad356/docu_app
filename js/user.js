$(document).ready(function () {
    $('#loginfrm').validate({ 
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages :{
            email: {
                required : 'Enter Email'
            },
             password: {
                required : 'Enter password'
            }
        },
        submitHandler: function(form) {
        $.ajax({
            url: 'ajax_logincheck.php',
            type: 'post',
            data: $(form).serialize(),
            success: function(response) {
                if(response == 1){
                    location.href = "https://allindialegalservice.com/member/track.php?msg=welcome"
                }else if(response == 2){
                    $('.erroralert12').html('');
                    $('.erroralert12').html('Email & Password Mismatched Check values!');
                }else if( response == 3){
                    $('.erroralert12').html('');
                    $('#erroralert12').html('Enter Required Fields Properly');
                }else if( response == 4){
                    $('.erroralert12').html('');
                    $('#erroralert12').html('Your Profile Waiting For Approve! Contact Admin!');
                }else if( response == 5){
                    $('.erroralert12').html('');
                    $('#erroralert12').html('Login Denied Contact Admin!');
                }
            }            
        });
    }
    });
    
});

$(document).ready(function () {

    $('#signup_frm').validate({ 
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            },
            city: {
                required: true
            },
            compliant_title: {
                required: true
            },
            compliant_description: {
                required: true
            }
        },
        messages :{
            name: {
                required: 'Enter Full Name'
            },
            email: {
                required: 'Enter Email'
            },
            phone: {
                required: 'Enter phone No'
            },
            city: {
                required: 'Enter City'
            },
            compliant_title: {
                required: 'Enter Compliant Title'
            },
            compliant_description: {
                required: 'Enter Compliant Description'
            }
        },
        submitHandler: function(form) {
        $.ajax({
            url: 'ajax_customers.php',
            type: 'post',
            data: $(form).serialize(),
            success: function(response) {
                if(response == 1){
                    $('#erroralert').html('');
                     document.getElementById("signup_frm").reset();
                     $('#btn_sub').prop('disabled', true);
                      $('#sucessalert').html('Compliant registered Successfully!');
                }else if(response == 4){
                    $('#erroralert').html('Complaint already Registered!..');
                }else if(response == 2 || response == 3){
                    $('#erroralert').html(' ');
                    $('#erroralert').html('Enter Required Fields Properly');
                }
            }            
        });
    }
    });
});

$(document).ready(function () {

    $('#add_supportfrm').validate({ 
        rules: {
            subject: {
                required: true
            },
            name: {
                required: true
            },
            email: {
                required: true
            },
            department: {
                required: true
            },
            priority: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages :{
            subject: {
                required: 'Enter Subject'
            },
            name: {
                required: 'Enter Name'
            },
            email: {
                required: 'Enter Email'
            },
            department: {
                required: 'Choose Department'
            },
            priority: {
                required: 'Choose'
            },
            message: {
                required: 'Enter Message'
            }
        }
    });

});

$(document).ready(function () {

    $('#agreement_form').validate({ // initialize the plugin
        rules: {
            agree: {
                required: true
            },
            sign: {
                required: true,
            },
            aadhar: {
                required: true
            }
        },
        messages :{
            agree: {
                required: "Read & Agree"
            },
            sign: {
                required: "Upload Your Signature",
            },
            aadhar: {
                required: "Upload Aadhar"
            }
        }
    });

});



function lock_emp(id)
{  if(confirm("Are you sure to update Login Access?"))
{  location.href='employees.php?id='+id+'&sta=ina'; } }

   setTimeout(function() { $('.erroralert').hide();}, 3000)
   setTimeout(function() { $('#erroralert1').hide();}, 8000)

      