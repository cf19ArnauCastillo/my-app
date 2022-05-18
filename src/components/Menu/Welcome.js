import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Bienvenido Juan Luis</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
