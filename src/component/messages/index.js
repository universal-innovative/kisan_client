import React, { useState, useEffect } from "react";
import "./index.css";
const CommentsList = () => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    messages: [],
  });

  const fetchData = async () => {
    try {
      setState({ ...state, loading: true });
      let response = await fetch(
        "https://kisan-assignment-server.onrender.com/api/messages/list"
      );
      const data = await response.json();
      setState({ ...state, loading: false, messages: data });
    } catch (err) {
      setState({ ...state, loading: false, error: err.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(state, "STATE MESSAGE");
  return (
    <div className="messages-section">
      {!state.messages || state.messages.length === 0 ? (
        <h1>Load data</h1>
      ) : (
        <div className="messages-container">
          {state.messages ? (
            state.messages?.map((el, i) => {
              return (
                <div class="card">
                  <div class="message">
                    <h4>Name: {el.name}</h4>
                    <p>Otp: {el.otp}</p>

                    <p>Created at: {el.createdAt.split("T")[0]}</p>
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
