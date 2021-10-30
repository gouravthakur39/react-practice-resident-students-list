import React, { useState } from "react";
import Error from "./Error";
import ResidentsList from "./ResidentsList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search(props) {
  const { student } = props;
  console.log(student);
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState("");
  const [validityDate, setValidityDate] = useState("");
  const [error, setError] = useState("");
  const [validName, setValidName] = useState([]);

  const handleNameChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAdd = (searchTerm, date) => {
    for (let i = 0; i < student.length; i++) {
      if (student[i].name.toLowerCase() === searchTerm) {
        console.log(student[i].name, "validity Date", student[i].validityDate);
        setValidityDate(student[i].validityDate);
        if (checkValidity(date, validityDate)) {
          setValidName(validName => [student[i].name, ...validName]);
          setError("");
        } else {
          setError(`Sorry, ${student[i].name}'s' validity has Expired!`);
        }
        console.log(validName)
        return validityDate;
      } else {
        searchTerm !== "" &&
          setError(`Sorry, ${searchTerm} is not a verified student`);
      }
    }
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            onChange={handleNameChange}
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            value={date}
            onChange={handleDateChange}
          />
        </div>
      </label>
      <button
        type="button"
        onClick={() => handleAdd(searchTerm, date)}
        data-testid="addBtn"
        className="small mb-0"
      >
        Add
      </button>
      <Error error={error} />
      <ResidentsList validName={validName} />
    </div>
  );
}

export default Search;
