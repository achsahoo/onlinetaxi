/*City Registration validation */

function cityvalidateForm()
{
var x=document.forms["CITYregistration"]["cityname"];
if (x.value=="")
  {
 
 document.getElementById('city').innerHTML="Please Enter the city Name(Character Only).";
   x.focus();
 return false;
  }
var x=document.forms["CITYregistration"]["state"];
if (x.value=="")
  {
 
 document.getElementById('state').innerHTML="Please Enter the state Name(Character Only).";
   x.focus();
 return false;
  }
  

var x=document.forms["CITYregistration"]["gstno"];
if (x.value=="")
  {
 
 document.getElementById('gstno').innerHTML="Please Enter the  gst No";
   x.focus();
 return false;
  }
  
var x=document.forms["CITYregistration"]["GstAddress"];
if (x.value=="")
  {
 
 document.getElementById('GstAddres').innerHTML="Please Enter the Gst Address ";
   x.focus();
 return false;
  }
}

/*POS_REG  validation */
function  posvalidate(){

	if((document.getElementById('pos').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter POS";
	  posreg.pos.focus();
	  return(false);
	 }
	if((document.getElementById('posname').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter POS Name";
	  posreg.posName.focus();
	  return(false);
	 }
	if((document.getElementById('password').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Password";
	  posreg.password.focus();
	  return(false);
	 }
	if((document.getElementById('city').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please select city";
	  posreg.cityname.focus();
	  return(false);
	 }
	if((document.getElementById('address1').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter address";
	  posreg.address1.focus();
	  return(false);
	 }
	if((document.getElementById('pincode').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter pincode";
	  posreg.pincode.focus();
	  return(false);
	 }
	
		else 
	{
		 return(true);
	 }
}

/*User_form  validation */
function  uservalidation(){

	if((document.getElementById('userid').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter User ID";
	  userregistration.userid.focus();
	  return(false);
	 }
	if((document.getElementById('userName').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter User Name";
	  userregistration.userName.focus();
	  return(false);
	 }
	if((document.getElementById('password').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Password";
	  userregistration.password.focus();
	  return(false);
	 }
	if((document.getElementById('mobilenumber').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Mobile Number";
	  userregistration.mobilenumber.focus();
	  return(false);
	 }
	if((document.getElementById('mailid').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Mail ID";
	  userregistration.mailid.focus();
	  return(false);
	 }
	if((document.getElementById('address').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Address";
	  userregistration.address.focus();
	  return(false);
	 }
	if((document.getElementById('role').value=="null"))
	 {
	  document.getElementById('error').innerHTML = "Please choose Role";
	  userregistration.role.focus();
	  return(false);
	 }
	if((document.getElementById('pos').value=="null"))
	 {
	  document.getElementById('error').innerHTML = "Please choose POS";
	  userregistration.pos.focus();
	  return(false);
	 }
	
	else 
	{
		 return(true);
	 }
	
}

/*  Tire Validation */
function  tyrevalidate(){
	var pattern=document.getElementById('tyrepattern').value;
	var size=document.getElementById('tyresize').value;
	var sizecheck=size.indexOf("/");
	var patterncheck=pattern.indexOf("/");
	if((document.getElementById('tyrepattern').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Tyre Pattern";
	  tyrecreate.tyrepattern.focus();
	  return(false);
	 }
	if(patterncheck>0)
	 {
	  document.getElementById('error').innerHTML = "don't use slash (/)symbol";
	  tyrecreate.tyrepattern.focus();
	  return(false);
	 }
	if(sizecheck>0)
	 {
	  document.getElementById('error').innerHTML = "don't use slash (/)symbol";
	  tyrecreate.tyresize.focus();
	  return(false);
	 }
	if((document.getElementById('tyresize').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Tyre Size";
	  tyrecreate.tyresize.focus();
	  return(false);
	 }
	else 
	{
		 return(true);
	 }
	
}
/* two decimal convert format  */
function validateFloatKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if(number.length>1 && charCode == 46){
         return false;
    }
    
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if( caratPos > dotPos && dotPos>-1 && (number[1].length > 1)){
        return false;
    }
    return true;
}

function getSelectionStart(o) {
	if (o.createTextRange) {
		var r = document.selection.createRange().duplicate()
		r.moveEnd('character', o.value.length)
		if (r.text == '') return o.value.length
		return o.value.lastIndexOf(r.text)
	} else return o.selectionStart
}





/*report validation */
function  salereport(){
	
	if((document.getElementById('posid').value=="null"))
	 {
	  document.getElementById('error').innerHTML = "Please Choose POS";
	  salereportform.posid.focus();
	  return(false);
	 }
	if((document.getElementById('saledate').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Choose From Date";
	  salereportform.saledate.focus();
	  return(false);
	 }
	if((document.getElementById('saledateto').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Choose To Date";
	  salereportform.saledateto.focus();
	  return(false);
	 }
	
		else 
	{
		 return(true);
	 }
	
}

/*  pop up Message */
function popup(message) {
	   swal(message)
}

/* Invoice Validation  */
function  checkinvoice(){ 
	if((document.getElementById('userId').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Choose UserName and Id";
	  invoice.userId.focus();
	  return(false);
	 }
	
	if((document.getElementById('customerName').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Customer Name";
	  invoice.customerName.focus();
	  return(false);
	 }
	if((document.getElementById('contactNumber').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Contact Number";
	  invoice.contactNumber.focus();
	  return(false);
	 }
	if((document.getElementById('contactNumber').value.length>10))
	 {
	  document.getElementById('error').innerHTML = "Please Enter 10 digit mobile number";
	  invoice.contactNumber.focus();
	  return(false);
	 }
	if((document.getElementById('contactNumber').value.length<10))
	 {
	  document.getElementById('error').innerHTML = "Please Enter 10 digit mobile number";
	  invoice.contactNumber.focus();
	  return(false);
	 }
	if((document.getElementById('Email').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Email ID";
	  invoice.Email.focus();
	  return(false);
	 }
	var email = document.getElementById('Email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    	 document.getElementById('error').innerHTML = "Please Enter Valid Email ID";
    invoice.Email.focus();
    return(false);
 }
	if((document.getElementById('address1').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Addres";
	  invoice.address1.focus();
	  return(false);
	 }
	if((document.getElementById('zipcode').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Zipcode";
	  invoice.zipcode.focus();
	  return(false);
	 }
	if((document.getElementById('zipcode').value.length<6))
	 {
	  document.getElementById('error').innerHTML = "Zipcode Must be with in 6 digit";
	  invoice.zipcode.focus();
	  return(false);
	 }
	if((document.getElementById('zipcode').value.length>6))
	 {
	  document.getElementById('error').innerHTML = "Zipcode Must be with in 6 digit";
	  invoice.zipcode.focus();
	  return(false);
	 }
	if((document.getElementById('vehiclemake').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Vehicle Make";
	  invoice.vehiclemake.focus();
	  return(false);
	 }
	if((document.getElementById('vehiclemodel').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Vehicle Model";
	  invoice.vehiclemodel.focus();
	  return(false);
	 }
	if((document.getElementById('vehiclenumber').value==""))
	 {
	  document.getElementById('error').innerHTML = "Please Enter Vehicle Number";
	  invoice.vehiclenumber.focus();
	  return(false);
	 }
	if((document.getElementById('vehiclekm').value==""))
	 {
		  document.getElementById('error').innerHTML = "Please Enter Vehicle KM";
		  invoice.vehiclekm.focus();
		  return(false);
		 }
	if((document.getElementById('tyrepattern').value=="non"))
	 {
		
		  document.getElementById('error').innerHTML = "please choose tyre Pattern";
		
		  return(false);
	}
	if((document.getElementById('tyresize').value=="undefined"))
	 {
		
		  document.getElementById('error').innerHTML = "please choose tyre size";
		 
		  return(false);
	}
	if((document.getElementById('totalprice').value<=0.0))
	 {
	
		  document.getElementById('error').innerHTML = "Please choose Tyresize";
		  invoice.vehiclekm.focus();
		  return(false);
		 }
	if((document.getElementById('saledate').value==""))
	 {
		  document.getElementById('error').innerHTML = "Please Choose Date";
		 invoice.saledate.focus();
		  return(false);
		 }
	else 
	{
		 return(true);
	 }
}
	
  function maxLengthCheck(object) {
    if (object.value.length > object.max.length)
      object.value = object.value.slice(0, object.max.length)
  }
    
  function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
  //calculate discount without gst in basic price 
  function total() {
	  var input = document.querySelectorAll("input[name='product']:checked") 
	  var quantity=document.getElementById('Quantity').value;
	  var tyreprice=document.getElementById('tyreprice').value;
	  var tyreprice1=document.getElementById('tyreprice1').value;
	  
	  if(quantity==2){
	  var taxble_amount= document.getElementById('beforgst').value -
	  ((input.length * (input.length =50*2))/1.28);
	  	document.getElementById('totalprice').value=total_gst(taxble_amount);
	 
	  	var descount = document.getElementById('aftergst').value - document.getElementById('totalprice').value;
	  	document.getElementById('discountshow').value=parseInt(descount);
	  }
	  else if(quantity==1 && tyreprice1 !=""){
		  var taxble_amount= document.getElementById('beforgst').value -
		  ((input.length * (input.length =50*2))/1.28);
			document.getElementById('totalprice').value=total_gst(taxble_amount);
			
			var descount = document.getElementById('aftergst').value - document.getElementById('totalprice').value;
		  	document.getElementById('discountshow').value=parseInt(descount);
	  }
	  else{
		  var taxble_amount= document.getElementById('beforgst').value -
		  ((input.length * (input.length =50))/1.28);
		  var total_price=total_gst(taxble_amount);
		 
		  document.getElementById('totalprice').value=total_gst(taxble_amount);
		  var descount = document.getElementById('aftergst').value - document.getElementById('totalprice').value;
		  	document.getElementById('discountshow').value=parseInt(descount);
	  }
	}
  
  //gst calculation with discount 
  function total_gst(taxble_amount){
	  var sgst=taxble_amount*0.14;
	  var cgst=taxble_amount*0.14;
	  var gst=sgst+cgst;
	  var total_price= parseFloat(taxble_amount)+parseFloat(gst);
	  var totalPrice=Math.round(total_price*100)/100;
	  document.getElementById('totalgst').value=Math.round(gst*100)/100;
	  document.getElementById('sgst').value= Math.round(sgst*100)/100;
	  document.getElementById('cgst').value=Math.round(cgst*100)/100;
	  document.getElementById('taxble').value=Math.round((taxble_amount)*100)/100;
	  return totalPrice;
  }
  
  /* Sales Transaction Validation*/
  function saletransactionvalidate(){
		
		if((document.getElementById('date').value==""))
		 {
		  document.getElementById('error').innerHTML = "Please Choose a date";
		  salestransaction.date.focus();
		  return(false);
		 }
		if((document.getElementById('amount').value==""))
		 {
		  document.getElementById('error').innerHTML = "Please Enter Amount to transfered";
		  salestransaction.amount.focus();
		  return(false);
		 }
		if(document.getElementById('salesmanid').value==document.getElementById('receiver_name').value)
		 {
		  document.getElementById('error').innerHTML = "Sales Person Name and Receiver Name could not same";
		  salestransaction.salesmanid.focus();
		  return(false);
		 }

		
		else
		{
			 return(true);
		 }
		
	}
  
  /* number convert format */
  function isNumber(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      } 
      return true;
  }
	
	
	