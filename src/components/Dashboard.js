import React, { useEffect } from "react";
import NewDrive from "./NewDrive";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/drives/driveSlice";
import { actions as authActions} from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { drives, loading, error } = useSelector((state) => state.drives);

  const navigate=useNavigate()
  useEffect(() => {
    dispatch(actions.fetchDrivesRequest());
  }, [dispatch]);

  const handleLogout=()=>{
    
    dispatch(authActions.logout()) ;
     navigate('/');
  }

  return (
    <div>
      <h2>Admin Dashboard</h2><button onClick={handleLogout} >logout</button>
      <button>Create a drive</button>
      <NewDrive />
      <div>
        {drives.map((drive) => (
          <div>
            {Object.entries(drive).map(([field,value]) => (
              <div>{field} : {value}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
