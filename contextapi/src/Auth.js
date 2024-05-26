import React, { useContext } from "react";
import AuthContext from "./context/auth-context";

const Auth = () => {
  const { status, login } = useContext(AuthContext); //<= kullanım 1
  //   const auth = useContext(AuthContext); <= kullanım 2
  console.log(status);
  return (
    <>
      <div>
        <h1>Giriş yaptın mı?</h1>
        {status ? <p>ohoo coktan</p> : <p>hayır</p>}
        <button onClick={login}>Giriş Yap</button>
      </div>
    </>
  );
};

export default Auth;
