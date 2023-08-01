import React from "react";
import { useDispatch } from "react-redux";
import { createStudentBegin } from "./appSlice";

const AddStudentForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const student = {
      firstName: event.target.fname.value,
      lastName: event.target.lname.value,
      rollNo: event.target.rollNo.value,
      standard: event.target.standard.value,
      section: event.target.section.value,
      bloodGroup: event.target.bGroup.value,
      address: event.target.address.value,
      pMobNo: event.target.pNo.value,
    };
    dispatch(createStudentBegin(student));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1>Add new student</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
        }}
        onSubmit={handleFormSubmit}
      >
        <label>
          First Name:
          <input type="input" name="fname" />
        </label>
        <label>
          Last Name:
          <input type="input" name="lname" />
        </label>
        <label>
          Roll No:
          <input type="input" name="rollNo" />
        </label>
        <label>
          Standard:
          <input type="input" name="standard" />
        </label>
        <label>
          Section:
          <input type="input" name="section" />
        </label>
        <label>
          Blood group:
          <input type="input" name="bGroup" />
        </label>
        <label>
          Address:
          <textarea type="text" name="address" />
        </label>
        <label>
          Parent mob no:
          <input type="input" name="pNo" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddStudentForm;
