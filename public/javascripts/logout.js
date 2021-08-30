const logout =  () =>{
    try{
        const response =  fetch("/api/user/logout",{
            method:"post",
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