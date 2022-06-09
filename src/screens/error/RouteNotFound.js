import { Link } from "react-router-dom";
import { PrimaryButton } from "../../components";

import "./error.css";
export const RouteNotFound = () => {
  return (
    <div className='route-error-container'>
      <div className='route-error-wrapper '>
        <h1>404</h1>
        <h3>Not Found</h3>
        <Link to='/dashboard' className='btn btn-link'>
          <PrimaryButton text='TAKE ME HOME' />
        </Link>
      </div>
    </div>
  );
};
