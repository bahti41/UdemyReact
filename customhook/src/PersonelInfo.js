import React, { useState } from "react";
import useInput from "./useInput";

function PersonelInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitFrom = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <>
      <div>
        <form onSubmit={submitFrom}>
          <div>
            <label>Ad</label>
            <input type="text" {...bindFirstName} />
          </div>
          <div>
            <label>SoyAd</label>
            <input type="text" {...bindLastName} />
          </div>
          <button>Kaydet</button>
        </form>
      </div>
    </>
  );
}

export default PersonelInfo;
