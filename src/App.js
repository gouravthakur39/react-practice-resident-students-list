import React from "react";
import Search from "./Components/Search";
import { STUDENTS } from "./Components/studentsList.js";

import "h8k-components";

const title = "Hacker Dormitory";

function App() {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search student={STUDENTS} />
      </div>
    </div>
  );
}

export default App;
