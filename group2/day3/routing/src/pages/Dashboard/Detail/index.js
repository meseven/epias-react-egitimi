import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState(state?.user);

  useEffect(() => {
    if (!user || state.canNextPage) {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        setUser(res.data)
      );
    }
  }, [id]);

  const nextUserId = Number(id) + 1;
  const nextId = nextUserId === 11 ? 1 : nextUserId;

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${nextId}`} state={{ canNextPage: true }}>
        Sonraki ({nextId})
      </Link>
    </div>
  );
}

export default Detail;
