import { useState, useEffect } from "react";
const axios = require("axios");

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      //   {
      //     method: url.method,
      //     url: url.url,
      //     data: url.data,
      //   }

      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("Error in fetching ", err);
      });
  }, [url]);
  return data;
};

export default useFetch;
