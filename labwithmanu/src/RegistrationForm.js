import {useNavigate } from "react-router-dom";
import Home from "./Home";

export default function RegistrationForm(props) {
    const navigate = useNavigate();

    return (
      <div>

        <div>
          <label for="first_Name">First Name:</label>
          <input
            id="first_Name"
          />
        <br/>
            <label for="last_Name">Last Name:</label>
          <input
            id="last_Name"
          />

        <br/>
            <label for="new_Email">Email:</label>
          <input
            id="last_Name"
          />
        <br/>
         <label for="new_Password">Password:</label>
          <input
            id="last_Name"
          />

        </div>
        <div>
          <button onClick={() => { navigate("/Home"); }}  >
          Submit
          </button>

        </div>

      </div>
    );
  }
