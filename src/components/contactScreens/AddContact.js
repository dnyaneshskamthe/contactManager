import React, { useRef, useState } from "react";

const AddContact = () => {
  const [showForm, setShowForm] = useState(false);
  const [newContact, setNewContact] = useState({});
  const nameRef = useRef();
  const contactRef = useRef();
  const token = localStorage.getItem("token");
  if (!token) {
    // write logout logic
    return;
  }

  const addUserContact = (e) => {
    e.preventDefault();
    const postData = async () => {
      const uName = nameRef.current.value;
      const uContact = contactRef.current.value;
      nameRef.current.value = "";
      contactRef.current.value = "";

      // Basic validation - ensure name and contact are provided
      if (!uName || !uContact) {
        alert("Please provide name and contact.");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/addUser`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: uName, contact: uContact }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("User added:", data);
        // Do something with the response data if needed
      } catch (error) {
        console.error("Error adding user:", error);
        // Handle any errors that occurred during the fetch request
      }
    };
    postData();
  };

  const handleAddContact = () => {
    const x = document.getElementById("userForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  return (
    <>
      <div className="add_contact">
        <button className="btn btn-primary" onClick={handleAddContact}>
          Add new
        </button>
      </div>
      <div className="contactForm mt-4">
        <form id="userForm">
          <div className="mb-3 row mx-4">
            <label htmlFor="username" className="col-sm-4 fw-bold">
              Username 
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                ref={nameRef}
                className="form-control"
                id="username"
                placeholder="enter username..."
              />
            </div>
          </div>
          <div className="mb-3 row mx-4">
            <label htmlFor="userContact" className="col-sm-4 fw-bold">
              Contact 
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                ref={contactRef}
                className="form-control"
                id="userContact"
                placeholder="enter contact..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-2"
            onClick={addUserContact}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
