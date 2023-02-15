import React from "react";
import TaskComponent1 from "../../component/contacts/addContact";
import TaskComponent2 from "../../component/contacts/contactList";
import "./index.css";
const Contacts = () => {
  return (
    <div className="background-div">
      <div className="container">
        <TaskComponent1 />

        <div>
          <TaskComponent2 />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
