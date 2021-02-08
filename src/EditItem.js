import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
import EditForm from "./EditForm";

const EditItem = () => {
  const { id } = useParams();

  const person = useFetch("http://localhost:3004/persons/" + id);

  return (
    <div className="container  mt-5 pt-5">
      {person && <EditForm person={person} personId={id} />}
    </div>
  );
};

export default EditItem;
