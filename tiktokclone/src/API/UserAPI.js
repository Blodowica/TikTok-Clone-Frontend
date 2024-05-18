import { User, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";

export const useAuth0Functions = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, getIdTokenClaims } =
    useAuth0();

  const BASE_USER_SERVICE = `${process.env.REACT_APP_USER_SERVICE_APP}`;

  useEffect(() => {
    if (isAuthenticated && user) {
      const userDataSent = localStorage.getItem("userDataSent");
      if (!userDataSent) {
        sendUserDataToUserService(user);
        localStorage.setItem("userDataSent", "true");
      }
    } else {
    }
  }, [isAuthenticated, user]);

  const loginWithAuth0 = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      throw error;
    }
  };

  const logoutWithAuth0 = async () => {
    try {
      await logout({ returnTo: window.location.origin });
      localStorage.removeItem("userDataSent");
    } catch (error) {
      console.error("Error logging out with Auth0:", error);
      throw error;
    }
  };
  const sendUserDataToUserService = async (userData) => {
    try {
      //GET THE ID_TOKEN WHICH YOU NEED AD THE BEARER TOKEN
      const idTokenClaims = await getIdTokenClaims();
      const idToken = idTokenClaims.__raw;

      console.log(idToken);

      const response = await axios.post(`${BASE_USER_SERVICE}`, {
        name: userData.name,
        email: userData.email,
        authId: userData.sub,
      });
      console.log("User data sent to backend successfully:", response.data);
    } catch (error) {
      console.error("Error sending user data to backend:", error);
      throw error;
    }
  };

  return {
    loginWithAuth0,
    logoutWithAuth0,
    user,
    isAuthenticated,
  };
};
