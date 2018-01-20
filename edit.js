function validate(){
	var fname=document.getElementById('fname').value;
	var email=document.getElementById('email').value;
	var mobno=document.getElementById('mobile').value;
	var stdno=document.getElementById('stno').value;
	var rollno=document.getElementById('rollno').value;
	var emailreg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;

	if(fname!="" && email!="" && mobno!="" && stdno!="" && rollno!="") {
		if (email.match(emailreg)) {
			if(mobno.length==10){
					if (stdno.length==7) {
						if (rollno.length==10) {
							if (document.getElementById('male').checked||document.getElementById('female').checked) {
								if ( document.getElementsByName('college')[0].value !="" ){
									if (document.getElementsByName('course')[0].value!="") {
										if (document.getElementsByName('branch')[0].value!="") {
											if (document.getElementsByName('year')[0].value!="") {
												if (document.getElementById('yes').checked||document.getElementById('no').checked){
													return true;
												}	
												else{
													alert('Select your accomodation');
													return false;
												}
											}
											else{
												alert('Select your year');
												return false;
											}
										}
												else{
													alert('Select your branch');
													return false;
											}
									}
										else{
											alert('Select your respected course');
											return false;
									}
								}
   									else{
   										alert('Select your college !');
   										return false;
   									} 
							}
							else{
								alert('Select your gender !');
								return false;
							}
						}
						else{
							alert('roll no is invalid');
							return false;
						}
					}
				else{
					alert('student no is invalid');
					return false;
				}
			}
			else{
				alert('enter mobile no of 10 digits');
				return false;
			}
		}
		else{
			alert("enter a valid email ");
			return false;
		}
	}
	else{
		alert("All fields are required");
		return false;
	}
}
function disable1(){
	if (document.getElementById('college').value =="Other" ) {
		document.getElementById('stno').disabled=true;
		document.getElementById('rollno').disabled=true;
	}
	else{
		document.getElementById('stno').disabled=false;
		document.getElementById('rollno').disabled=false;
	}
}
function disable2(){
	if (document.getElementById('course').value=="MBA/MCA") {
		document.getElementById('branch1').style.display="none";
	}
	else{
		document.getElementById('branch1').style.display="inherit";
	}
}

   
        <div class="form-row">
            <label for="college"><span>College</span></label>
            <select   name="college" id="college" onmouseout="disable1()">
                <option selected="" value="">(Select One)</option>
                <option value="Akg">AKGEC</option>
                <option value="Other">Other</option>
			</select>
        </div>


        function disable1(){
    if (document.getElementById('college').value =="Other" ) {
        document.getElementById('stno').disabled=true;
        document.getElementById('rollno').disabled=true;
    }
    else{
        document.getElementById('stno').disabled=false;
        document.getElementById('rollno').disabled=false;
    }
}