import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";

const Contact = ({ contact, selectAll }) => {
  const { name, phone, email, id } = contact;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="39" round={true} />
        {name}
      </td>
      <td> {phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/add/${id}`}>
          <span className="material-icons mr-2 text-danger">edit</span>
        </Link>
        <span
          className="material-icons"
          onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
