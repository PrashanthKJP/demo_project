import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);
  return (
    <div>
      <h1>Dashbord</h1>
    </div>
  );
};

export default Dashbord;
