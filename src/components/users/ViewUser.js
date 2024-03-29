import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    // console.log(result);
    setUser(res.data);
  };

  return (
    <div className="container py-4 shadow">
      <h1 className="display-4" style={{ marginLeft: "10%" }}>
        User ID :{id}
      </h1>
      <hr />
      <ul className="list-group w-50 pb-3">
        <li className="list-group-item">Name :{user.name}</li>
        <li className="list-group-item">Username :{user.username}</li>
        <li className="list-group-item">Email :{user.email}</li>
        <li className="list-group-item">Phone :{user.phone}</li>
        <li className="list-group-item">Website :{user.website}</li>
      </ul>

      <Link className="btn btn-primary" to="/">
        Go Back TO Home
      </Link>
    </div>
  );
};

export default ViewUser;
