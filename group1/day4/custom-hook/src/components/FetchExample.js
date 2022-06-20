import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";

function FetchExample() {
  const [url, setUrl] = useState(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <Loading text="Yükleniyor..." />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h3>FetchExample</h3>

      <select
        name="user"
        id="user"
        onChange={(e) =>
          setUrl(
            `${process.env.REACT_APP_BASE_ENDPOINT}/users/` + e.target.value
          )
        }
      >
        <option value="0">Seçiniz</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchExample;
