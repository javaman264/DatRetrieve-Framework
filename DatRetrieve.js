
var checkDat = document.form.Chkbtn;
function chkData(){
	var txtdat = document.form.txtbx;
    var txtvalue = txtdat.value;
    alert("Hi " + txtvalue);
}

checkDat.addEventListener("click", chkData);