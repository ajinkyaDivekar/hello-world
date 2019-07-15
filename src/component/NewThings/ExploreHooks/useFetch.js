// useFetch.js
import React, { useState, useEffect } from "react";
export default function useFetch(url,value) {
  const [data, setData] = useState([]);

  console.log('url',url,value);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log('error',err));
  }, [value]);

  return data;
}