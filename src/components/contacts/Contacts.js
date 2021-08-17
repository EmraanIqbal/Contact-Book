import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllContact,
  selectAllContact,
  deleteAllContact,
} from "../../actions/contactAction";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const selectContacts = useSelector((state) => state.contact.selectedContacts);
  console.log(contacts);
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  return (
    <div>
      {selectContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete All{" "}
        </button>
      ) : null}
      <table className="table table-shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                  className="custom-control-input"
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-Mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <Contact contact={contact} key={i} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
