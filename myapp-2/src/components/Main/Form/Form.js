import React, { useState } from "react";
import Style from "./Form.module.css";

const Form = ({returnValue}) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setComment] = useState("");

  return (
    <form
      className={Style.input}
      onSubmit={(event) => {
        event.preventDefault();
        setUserName(event.target.elements.userName.value);
        setUserEmail(event.target.elements.userEmail.value);
        setComment(event.target.elements.comment.value);
        
        returnValue(userComment, userName, userEmail)

        setUserName('');
        setUserEmail('');
        setComment('');
      }}
    >
      <div>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userEmail">User Email</label>
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="commnet">User Commnent</label>
        <textarea
          name="comment"
          cols="30"
          rows="10"
          value={userComment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <input type="submit" />
    </form>
  );
};

export default Form;
