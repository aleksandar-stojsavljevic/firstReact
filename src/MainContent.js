import { Link } from "react-router-dom";
import PersonsList from "./PersonsList";
import useFetch from "./useFetch";
import { useState } from "react";

const MainContent = () => {
  const persons = useFetch("http://localhost:3004/persons");
  return (
    <div className="container mt-5 pt-5">
      <table className="table table-sm table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {persons && <PersonsList persons={persons} />}
      </table>
      <div className="text-center">
        <Link to="/add-item" className="btn btn-primary mt-4">
          Add Item
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
