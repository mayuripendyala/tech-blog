const commentFormHandler = async (event)=>{
    event.preventDefault();
    const postId = document.querySelector('input[name="post-id"]').nodeValue;
    const body = document.querySelector('textarea[name="comment-body"]').nodeValue;

    if(body) {
        try{
            await fetch('/api/comment',{
                method:'POST',
                body: JSON.stringify({
                    postId,
                    body
                }),
                headers:{
                    'Content-Type':'appliction/json'
                }
            });
            document.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }
};

document.querySelector('#new-comment-form')
        .addEventListener('submit',commentFormHandler);