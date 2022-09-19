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
    localStorage.setItem(myobj.email,myobj_1)
    
    localStorage.getItem(myobj.email);
    showNewUserOnScreen(myobj);
}
function showNewUserOnScreen(user){
    const parentNode=document.getElementById('list of users');
    childHTML=`<li>${user.name}-${user.email}</li>`;
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}