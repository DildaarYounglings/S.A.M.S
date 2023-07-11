import React, { useId, useRef, useState } from 'react';

export const SendMessage = (props) => {
    const id = useId()
    const message = props.message;
    const messages = props.messages ;
    const showNotification = props.showNotification;

    const handlesendMessage = async (e)=>{
        e.preventDefault();
        if (message.trim() !== "") {
            props.setMessages([...messages,{text:message,name:"dildaar",createdAt: new Date(),id:id,}])
        }
        setTimeout(() => {
            props.setShowNotification(!showNotification)
        }, 3000);
        props.setMessage("")
    }
  return (
    <React.Fragment>
        <form className="sendMessage" onSubmit={handlesendMessage}>
            <label htmlFor="messageInput">
                {messages.map((item,index) => (
                <li style={{listStyle:"none"}} key={`${id + index}`}>
                    <h2>{item.text}</h2>
                    <h6>{`${item.createdAt + " send by:" + item.name}`}</h6>
                </li>
                ))}
            </label>
            <input
            id="messageInput"
            name="messageInput"
            placeholder="type message ..."
            value={message}
            onChange={(e) => props.setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    </React.Fragment>
  )
}
