import React, { useEffect } from "react";
import "./Load.css";

function LoadScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Redireciona para login após 2 segundos
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>    
        <div className="load-screen">
        <img src="../assets/logo.png" alt="SmartHome Logo" className="logo"/>
        </div>
    </>
  );
}

export default LoadScreen;