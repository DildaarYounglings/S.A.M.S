import React, { useState } from 'react'

const LocalStorage_SessionStorage = () => {
    const [word ,setWord] = useState(
        {
            data: "me",
            name:"green lantern",
            power:"effect generation"
        }
        );
    function setData(){
        try {
            localStorage.setItem("mydata", JSON.stringify(word));
        }
        catch(err){
            console.log(err + "from setData function")
        }
    };
    function getData(){
        try {
            let gotdata = localStorage.getItem("mydata");
            console.log(gotdata + "success from getData and setData function");
            let jsondata = JSON.parse(gotdata)
            console.log(jsondata)
        }
        catch(err){
            console.log(err + "from getData function")
        }
    };
  return (
    <React.Fragment>
        <section>
            LocalStorage_SessionStorage
            <button onClick={
                async function(){setData()}
            }>setData function</button>
            <button onClick={
                async function(){getData()}
            }>getData function</button>
        </section>
    </React.Fragment>
  )
}

export default LocalStorage_SessionStorage