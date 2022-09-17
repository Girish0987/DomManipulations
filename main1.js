var form=document.getElementById('getform');
form.addEventListener('submit',addDetails)
function addDetails (e){
    e.preventDefault();
    const name=e.target.username.value;
    const email=e.target.emailid.value;
    const phonenumber=e.target.phonenumber.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phonenumber',phonenumber);
}