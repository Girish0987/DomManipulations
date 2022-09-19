var form=document.getElementById('getform');
form.addEventListener('submit',addDetails)
function addDetails (e){
    e.preventDefault();
   
    let myobj = {
        name: e.target.username.value,
       email: e.target.emailid.value,
         phonenumber: e.target.phonenumber.value
    }
    
    let myobj_1=JSON.stringify(myobj);
    localStorage.setItem('details',myobj_1)
    console.log(myobj_1);
}