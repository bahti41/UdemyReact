import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Member</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Aktif Üyeler
      </button>
      <button onClick={() => setSearchParams()}>tüm Üyeler</button>
      {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
}

export default Members;
