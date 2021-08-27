const loginFormHandler = async (event) =>{
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login');
    const passwordEl = document.querySelector("#password-input-login");

    try{
        if (email && password) {
          
        
            const response =  await fetch('/api/user/login',{
            method:'POST',
            body: JSON.stringify({
                username:usernameEl.nodeValue,
                password =passwordEl.value
            }),
            headers:{"Content-Type":"application/json"}
            });
            if (response.ok) {
                document.location.replace('/dashboard');
              } else {
                alert('Failed to log in.');
              }
            }
    }
    catch(err){
        console.log(err);
    }
}

document.querySelector('#login-form')
        .addEventListener("submit",loginFormHandler);