import React, { useEffect, useState } from "react";

function NumberList({ getItems }) {
  useEffect(() => {
    setItem(getItems(2));
    console.log("güncelleme zamanı");
  }, [getItems]);
  const [items, setItem] = useState([]);
  return items.map((item) => <div key={item}>{item}</div>);
}

export default NumberList;
