const deletePostHandler = async (event) =>{
    console.log("clicked",event)
    event.preventDefault();
    const postID= document.getElementById('post-id');
    try{
        await fetch("/api/post" + postID.value,{
            method:"delete"
        });

        document.location.replace("/dashboard");
    }
    catch(err){
        console.log(err);
    }
}

document.querySelector("#delete-btn")
        .addEventListener("click",deletePostHandler);