import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const PersonsList = ({ persons }) => {
  let [data, setData] = useState(persons);
  const deletePerson = (e) => {
    console.log(e.target.id);
    const personId = e.target.id;
    axios.delete("http://localhost:3004/persons/" + personId).then(() => {
      data = data.filter(function (item) {
        return item.id != personId;
      });
      setData(data);
      console.log(data);
    });
  };
  return (
    <tbody id="tableBody">
      {data.map((person) => (
        <tr key={person.id}>
          <td>
            <strong>{person.id}</strong>
          </td>
          <td>{person.name}</td>
          <td>{person.email}</td>
          <td>{person.phone}</td>
          <td>{person.location}</td>
          <td className="text-center">
            <Link
              to={`/edit-item/${person.id}`}
              className="btn btn-warning btn-sm me-3"
            >
              Edit
            </Link>
            <button
              onClick={deletePerson}
              className="btn btn-danger btn-sm"
              id={person.id}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PersonsList;
