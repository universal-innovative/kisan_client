import React, { useState, useEffect } from "react";
import "./index.css";
const CommentsList = () => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    contacts: [],
  });

  const fetchData = async () => {
    try {
      setState({ ...state, loading: true });
      let response = await fetch("http://localhost:8000/api/contacts/list");
      const data = await response.json();
      setState({ ...state, loading: false, contacts: data });
    } catch (err) {
      setState({ ...state, loading: false, error: err.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sendMessage = async (el) => {
    console.log(el, "el ele ele ele ");
    const data = { name: el?.name, recipient: el.phone };
    try {
      const response = await fetch(
        "http://localhost:8000/api/message/send",

        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        alert("message sent successfully ");
      }
    } catch (err) {
      alert(err.message);
      setState({ ...state, loading: false, error: err.message });
    }
  };

  return (
    <div className="contact-list-section">
      {!state.contacts || state.contacts.length === 0 ? (
        <h1>Go to page 1 load data</h1>
      ) : (
        <div className="contact-list-container">
          {state.contacts ? (
            state.contacts?.map((el, i) => {
              return (
                <div class="card">
                  <div class="img-cover">
                    <img src={el.image} alt={el.name} />
                  </div>

                  <div class="message">
                    <h2>{el.name}</h2>
                    <p>{el.phone}</p>
                    <button onClick={() => sendMessage(el)}>
                      <h3>Message</h3>
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 23 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        Message
                        <path
                          d="M0 9H22M12 1.5L20.9333 8.2C21.4667 8.6 21.4667 9.4 20.9333 9.8L12 16.5"
                          stroke="white"
                          stroke-width="3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          ) : state.error ? (
            <p>{state.error}</p>
          ) : (
            <p>Loading..</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentsList;
