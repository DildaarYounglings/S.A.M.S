import React from 'react'

const PostDataTo_API = () => {
    async function postData(){
        try {
            let result = fetch('https://webhook.site/065aa4a6-db71-4c39-972c-f5fe30142fd4',{
                /*default method for fetch api is get,mode is set to no cors, headers:{'Accept'and 'Content-type' is set to application/json}, body is what data you want to post or get*/
                method:'post',
                mode:'no-cors',
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                //data you want to send and display on api side
                body: JSON.stringify({key1: 'Prime D.A.M'})
            })
            console.log(result)
        }catch(err) {
            console.log(err)
        }
    }
  return (
    <React.Fragment>
        <section>
            <button onClick={async function(){await postData()}}>Press to post data</button>
        </section>
    </React.Fragment>
    )
}

export default PostDataTo_API