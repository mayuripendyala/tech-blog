const logout = async () =>{
    try{
        const response =   await fetch("/api/user/logout",{
            method:"POST",
            headers:{"Content-Type" :"application/json"}
        });

        if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to log out.');
        }
      
    }
    catch(err) {
        console.log(err);
    }
}

document.querySelector('#logout-link')
        .addEventListener("click" ,logout);