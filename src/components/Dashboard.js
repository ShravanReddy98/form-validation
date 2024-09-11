import React, { useEffect } from "react";
import NewDrive from "./NewDrive";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/drives/driveSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { drives, loading, error } = useSelector((state) => state.drives);

  useEffect(() => {
    dispatch(actions.fetchDrivesRequest());
  }, [dispatch]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button>Create a drive</button>
      <NewDrive />
      <div>
        {drives.map((drive) => (
          <div>
            {Object.values(drive).map((field) => (
              <div>{field}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
