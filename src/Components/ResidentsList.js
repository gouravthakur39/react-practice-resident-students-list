import React from "react";
import "h8k-components";
import '../App.css'
import '../index.css'

function ResidentsList(props) {
  const {validName} = props
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {
          validName.map((name, index) => {
            return (
              <li key={index} className="slide-up-fade-in">
              {name}
            </li>
            )
            })
       
        }
      </ul>
    </div>
  );
}

export default ResidentsList;
