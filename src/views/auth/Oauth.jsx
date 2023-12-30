import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const navigate = useNavigate();
  // const res =
  //   "http://localhost:3000/api/auth/google/callback?code=4%2F0AfJohXl7h_fy1oZpI97t5NdjulobALqu-Hx0dLjZy7k5SvKlGKeO5oNk2Lb0finOH1yMgQ&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent";
  useEffect(() => {
    // Handle the callback from Google after authentication
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      console.log(code);

      // Perform the server-side OAuth exchange using the obtained code
      // You can use a server to exchange the code for an access token and refresh token

      // After a successful exchange, navigate to the desired page
      // navigate("/admin/default");
    };

    handleCallback();
  }, [navigate]);

  return <div>Handling Google OAuth callback...</div>;
};

export default Oauth;
