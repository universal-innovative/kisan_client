import React, { useState } from "react";
import "./index.css";
const LandingForm = () => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    image: "",
    name: "",
    phone: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!state.name || state.name.trim() === "") {
      setState({ ...state, error: "Name is Required" });
      alert("Name is Required");
      return;
    }
    if (!state.phone || state.phone.trim() === "") {
      setState({ ...state, error: "Phone number is Required" });
      alert("Phone number is Required");
      return;
    }
    try {
      const data = new FormData();

      data.append("name", state.name);
      data.append("phone", state.phone);
      data.append("image", state.image);

      const response = await fetch(
        "https://kisan-assignment-server.onrender.com/api/contact/create",
        {
          method: "post",
          body: data,
        }
      );
      if (response.status === 200) {
        setState({
          ...state,
          loading: false,
          error: "",
          image: "",
          name: "",
          phone: "",
        });
        alert("hit page one to view data");
      }
    } catch (error) {
      setState(...state, error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="form-div">
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label for="name">Name:</label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={(event) => {
              setState({ ...state, name: event.target.value });
            }}
          />
          <label for="name">Phone:</label>
          <input
            name="phone"
            type="tel"
            value={state.phone}
            onChange={(event) => {
              setState({ ...state, phone: event.target.value });
            }}
          />
          <label class="file-upload">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(event) => {
                setState({ ...state, image: event.target.files[0] });
              }}
            />
            {state.image ? state?.image?.name : "Upload image"}
          </label>

          <button type="submit">
            {state.loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingForm;
