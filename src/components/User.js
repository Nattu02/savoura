import { useEffect, useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count>10){
      console.log("count greater than ten")
    }
  },[]);

  return (
    <div className="user-data">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count = {count}
      </button>
      <h2>Name: Nattudurai</h2>
      <h3>Location: CBE</h3>
      <h3>Contact: nattudurai_02</h3>
    </div>
  );
};

export default User;
