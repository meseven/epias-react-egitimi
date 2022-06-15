import React, { useEffect, useState } from "react";
import axios from "axios";

function Detail({ activeUserId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users?id=${activeUserId}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [activeUserId]);

  const arr = new Array(1000).fill().map(() => Math.floor(Math.random() * 100));

  return (
    <div>
      <h2>User Detail</h2>

      {loading && <div>Loading...</div>}
      {user && !loading && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <hr />
      {JSON.stringify(arr, null, 2)}
    </div>
  );
}

export default Detail;
