import { createContext, useContext, useState } from "react";
import { RenderRoutes } from "../render-routes/RenderRoutes.jsx";
import axios from "axios";
import { CreateUrl } from "../../data/serverInfo.js";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthenticationWrapper = () => {
  const [userAuth, setUserAuth] = useState({ key: "", isAuthenticated: false });

  const validate = async (accessKey) => {
    try {
      // const response = await axios.post(`${CreateUrl()}/api/checkAccessKey`, {
      //   key: accessKey,
      // });
      // setUserAuth({ key: "accessKey", isAuthenticated: response.data });
      // return response.data;
      return true;
    } catch (err) {
      console.error("Error comparing access key");
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ userAuth, validate }}>
      <>
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
