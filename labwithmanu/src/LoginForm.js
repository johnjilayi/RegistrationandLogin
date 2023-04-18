import Home from "./Home";

import {useNavigate } from "react-router-dom";

export default function LoginForm(props) {
    const navigate = useNavigate();

    return (
      <div>

        <div>
          <label for="new_List">Email:</label>
          <input
            id="new_List"
          />

        <label for="new_List">Password:</label>
          <input
            id="new_List"
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
