import store from "@/Redux/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashLayout from "@/Component/Layout/Admin";
import { useEffect, useState } from "react";

import HomePage from "./HomePage";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [token, setToken] = useState(
    typeof window !== "undefined" ? localStorage.getItem("token") : ""
  );
  useEffect(() => {
    if (token) {
      router.replace("/Users");
    }else if(!token){
      router.replace("/")
    }
  }, [token]);
  
  return (
    <>
      <Provider store={store}>
        {
          router.pathname === "/" ? <><HomePage /></> : <>  
        <DashLayout>
          <Component {...pageProps} />
          <ToastContainer />
        </DashLayout>
          </>
        }
      </Provider>
    </>
  );
}
