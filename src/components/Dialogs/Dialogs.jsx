import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  
  // let dialogs = [
  //   { id: 1, name: "Sanya" },
  //   { id: 2, name: "Dima" },
  //   { id: 3, name: "Andrey" },
  //   { id: 4, name: "Nancy" },
  //   { id: 5, name: "Nikita" },
  // ];

  // let messages = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "How are u" },
  //   { id: 3, message: "Yo" },
  //   { id: 4, message: "Yo" },
  //   { id: 5, message: "Yo" },
  // ];

  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Go</button>
      </div>
    </div>
  );
};

export default Dialogs;
