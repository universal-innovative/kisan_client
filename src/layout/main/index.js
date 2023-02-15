import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import "./index.css";
const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/contacts");
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
