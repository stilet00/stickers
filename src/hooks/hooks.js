import { useState } from "react";

export function useAsync(callback, defaultValue = [], id) {
  const [data, setData] = useState(defaultValue);

  function run() {
    callback()
      .then((res) => {
        setData(res);
        return data;
      })
      .catch((err) => console.log(err));
  }

  return {
    data,
    setData,
    run,
  };
}
