const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    const token =localStorage.getItem('token');
    try{
        await fetch('/api/post',{
            method:"POST",
            body: JSON.stringify({
                title,
                body
            }),
            headers:{"Content-Type" :"application/json" , authorization: `Bearer${token}`}
        });
        document.location.replace("/dashboard");
    }
    catch(err){
        console.log(err);
    }
}


document.querySelector("#new-post-form")
        .addEventListener("submit", newFormHandler);