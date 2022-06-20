import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState(state?.user);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios(`${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`)
    //   .then((res) => setUser(res.data))
    //   .catch((e) => setError(e.message));

    const getData = async () => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_BASE_ENDPOINT}/users/${id}`
        );

        setUser(data);
      } catch (e) {
        setError(e.message);
      }
    };

    if (!user || state.canNextUser) {
      getData();
    }
  }, [id]);

  const nextId = Number(id) + 1;
  const nextUserId = nextId === 11 ? 1 : nextId;

  return (
    <div>
      <h2>User Detail</h2>
      {error && <div>{error}</div>}
      <pre>{user && JSON.stringify(user, null, 2)}</pre>

      <Link to={`/users/${nextUserId}`} state={{ canNextUser: true }}>
        Sonraki Kullanıcı ({nextUserId})
      </Link>
    </div>
  );
}

export default UserDetail;
