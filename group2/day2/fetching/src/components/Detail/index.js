import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading";

function Detail({ activeUserId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [activeUserId]);

  return (
    <div>
      <h2>Detail</h2>
      {loading && <Loading text="Loading data..." />}
      {!loading && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

export default Detail;
