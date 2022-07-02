import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log("user", user);
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://polar-taiga-82753.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "contant-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
