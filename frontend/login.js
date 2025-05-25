var tempData={};
var loginData={};
var username='';
var password='';
function handleUsernameChange(event){


    tempData.username = event.target.value;
    console.log(tempData);
}
    // const user={username,password};
    // users.push(user);
    // console.log("user signed up:",user);}
   
    // console.log(users);


function handlepassword(event){
    tempData.password=event.target.value;
    console.log("password:"+JSON.stringify(tempData));
    
}
 async function handlesubmit(){
    try{
        const response=await fetch('/user/userdata',{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json'
          }
          
    
        });
        console.log(response);
        const result=await response.json();
        console.log(result);
        // if(!response.ok){
        //     alert(result.message);
        // }else{
        //     alert(result.message);
        //     console.log('USER created:',tempData);
        // }
    }
    catch(error){
        console.error('Error/:',error);
    }
    }
function handlelogin(){
    window.location.href = "login.html";
  }
//  function handleLoginSubmit() {
//     const user = users.find(u => u.username === username);
//     console.log(user);

//     if (!user) {
//         alert("username is wrong");
//     } else if (user.password !== password) {
//         alert("password is wrong");
//     } else {
//         alert("login successful");
//     }
// }
// function handleLoginSubmit() {
async function handleLoginSubmit(){
    try{
        const response=await fetch('/user/Login',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
    
        }
    );

const result=await response.json();
console.log(result.message);
}

    catch(error){
        console.error('Login error:',error);
    }
    
}

    
    

    
    

  function handleLoginUsernameChange(event){
    loginData.username=event.target.value;

    console.log("username: "+JSON.stringify(loginData) );
}
function handleLoginpassword(event){
    loginData.password=event.target.value;
    console.log("password:"+JSON.stringify(loginData));
    
}
async function handleSignUp(){
    try{
        const response=await fetch('/user/createuser',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempData)
    
        }
    );

const result=await response.json();
console.log(result.message, result.userdata);
}

    catch(error){
        console.error('Login error:',error);
    }
    
}









