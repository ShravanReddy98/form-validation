
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/drives/driveSlice';

const Home = () => {
    const dispatch = useDispatch();
  const { drives, loading, error } = useSelector((state) => state.drives);

  useEffect(() => {
    dispatch(actions.fetchDrivesRequest());
  }, [dispatch]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
        <h2>Drives</h2>
        <div>
        {drives.map((drive) => (
          <div style={{backgroundColor:"whitesmoke",border:"2px solid grey",margin:"10px",padding:"10px"}}>
            {Object.entries(drive).map(([field,value]) => (
              <div>{field} : {value}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home