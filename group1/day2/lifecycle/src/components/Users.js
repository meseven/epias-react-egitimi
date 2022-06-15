import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/usersf")
    //   .then((res) => {
    //     setUsers(res.data);

    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     ).then((res) => {
    //       setPosts(res.data);
    //     });
    //   })
    //   .catch((e) => setError(e.message))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    try {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );

      const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );

      setUsers(users);
      setPosts(posts);
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Users</h2>

      {error && <h3>{error}</h3>}

      {loading && <div>Loading...</div>}
      {!error && users.map((user) => <div key={user.id}>{user.name}</div>)}
      <hr />

      {!loading && !error && <h2>{users[0].name}'s Posts</h2>}
      {!error && posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

export default Users;
