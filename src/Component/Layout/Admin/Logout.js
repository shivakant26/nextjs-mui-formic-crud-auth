import { useRouter } from "next/router";
import { useEffect } from "react";

const Logout = () =>{
    const router = useRouter();
    var token = localStorage.removeItem('token');
        if(!token){
            router.push("/")
        }

    return(
        <>
        </>
    )
}

export default Logout;