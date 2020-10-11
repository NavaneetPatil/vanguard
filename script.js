    nextBtnHandler=(event)=>{
        sessionStorage.setItem('tittle', document.getElementById("tittle").value)
        sessionStorage.setItem('first name', document.getElementById("fname").value);
        sessionStorage.setItem('middle name', document.getElementById("middleName").value);
        sessionStorage.setItem('last name', document.getElementById("LastName").value);
        sessionStorage.setItem('suffix', document.getElementById("suffix").value);
        sessionStorage.setItem('dob', document.getElementById("dob").value);
        sessionStorage.setItem('gender', document.getElementById("gender").value);
        sessionStorage.setItem('Social Security Number/PIN', document.getElementById("pin").value);
        sessionStorage.setItem('Social Security Number/PIN-Confirm', document.getElementById("pinRepeat").value);
        sessionStorage.setItem('phone Type 1', document.getElementById("phoneType1").value);
        sessionStorage.setItem('phone number 1', document.getElementById("phoneNo1").value);
        sessionStorage.setItem('email type 1', document.getElementById("emailType1").value);
        sessionStorage.setItem('email id 1', document.getElementById("emailId1").value);
        sessionStorage.setItem('address type', document.getElementById("addressType").value);
        sessionStorage.setItem('addrss line 1', document.getElementById("addressLine1").value);
        sessionStorage.setItem('address line 2', document.getElementById("addressLine2").value);
        sessionStorage.setItem('address line 3', document.getElementById("addressLine3").value);
        sessionStorage.setItem('zip', document.getElementById("zip").value);
        sessionStorage.setItem('city', document.getElementById("city").value);
        sessionStorage.setItem('state', document.getElementById("state").value);
        sessionStorage.setItem('country', document.getElementById("country").value);
        sessionStorage.setItem('user-id', document.getElementById("userId").value);
        sessionStorage.setItem('password', document.getElementById("password").value);
        sessionStorage.setItem('password-confirm', document.getElementById("passwordRepeat").value);
        sessionStorage.setItem('security-question-1', document.getElementById("securityQuestion1").value);
        sessionStorage.setItem('security-answere-1', document.getElementById("securityAnswere1").value);
        sessionStorage.setItem('security-question-2', document.getElementById("securityQuestion2").value);
        sessionStorage.setItem('security-answere-2', document.getElementById("securityAnswere2").value);
        sessionStorage.setItem('security-question-3', document.getElementById("securityQuestion3").value);
        sessionStorage.setItem('security-answere-3', document.getElementById("securityAnswere3").value);
        sessionStorage.setItem('refrence', document.getElementById("refrence").value);
        sessionStorage.setItem('additionalRef', document.getElementById("additionalRef").value);
          var checkedId;
          if (document.getElementById("radio1").checked==true) {
             checkedId="radio1"
          }
          else if (document.getElementById("radio2").checked==true) {
            checkedId='radio2'
          }
          else {
            checkedId='radio3'
          }
          sessionStorage.setItem('delivery-mode',document.getElementById(checkedId).value );

        var primarynumber;
        for(var i = 1; i < 5; i++){
            if(document.getElementById(`phone-radio${i}`).checked==true){
                primarynumber= document.getElementById('phoneNo'+i).value
            }
        }
        sessionStorage.setItem('Primary-phone-number',primarynumber);

        var primarymail;
        for(var i = 1; i < 3; i++){
            if(document.getElementById(`email-radio${i}`).checked==true){
                primarymail= document.getElementById('emailId'+i).value
            }
        }
        sessionStorage.setItem('Primary-email-id',primarymail);

















        console.log(window.sessionStorage);
      };
  
      resetBtnHandler=(event)=>{
        var inputs = document.getElementsByTagName("input");
          for (var i = 0; i < inputs.length-1; i++)
          {       var id = document.getElementsByTagName("input")[i].id;
                  if (document.getElementById(id).type==="text" || document.getElementById(id).type==="password" ) {
                    document.getElementById(id).value="";
                  }
  
  
          }
      };

    