import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getContact, updateContact } from "../../actions/contactAction";

const EditContact = () => {
  const contact = useSelector((state) => state.contact.contact);
  const { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setphone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });

    dispatch(updateContact(update_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-danger">Add a Contact</div>
      <div className=" card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-warning" type="submit">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
