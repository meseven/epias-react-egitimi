import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Method 3
  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     setUsers(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (users.length > 0) {
  //     axios(
  //       `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
  //     ).then((res) => {
  //       setPosts(res.data);
  //     });
  //   }
  // }, [users]);

  useEffect(() => {
    // Method 1
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);

    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     ).then((res) => {
    //       setPosts(res.data);
    //     });
    //   })
    //   .catch((e) => console.log(e))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  // Method 2
  const getData = async () => {
    try {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(users);

      const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );

      setPosts(posts);
    } catch (e) {
      console.log("err", e);
      setError(e.message);
    }

    setLoading(false);
    setPostsLoading(false);
  };

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Loading...</div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      {/* <button
        onClick={() => setUsers((prev) => [{ id: 10, name: "Test" }, ...prev])}
      >
        add user
      </button> */}

      <h2>Posts</h2>
      {postsLoading && <div>Posts Loading...</div>}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      {error && <div>{error}</div>}
    </div>
  );
}

export default Users;
