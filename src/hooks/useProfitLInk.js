import { useEffect, useState } from "react";

const useProfitLink = () => {
  const [profitLinks, setProfitLinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/profitlink")
      .then((res) => res.json())
      .then((data) => setProfitLinks(data));
  }, []);

  return [profitLinks, setProfitLinks];
};

export default useProfitLink;
