import React, { useState } from "react";
import useHttp from "../hooks/useHttp";

function FetcingExample() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { loading, error, data } = useHttp(url);

  return (
    <div>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Click
      </button>
      <hr />

      <h2>Fetching</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default FetcingExample;
