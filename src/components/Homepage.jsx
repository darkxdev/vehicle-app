import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchManufacturers } from '../redux/manufacturersSlice';
import Filter from './Filter';

const Homepage = () => {
  const dispatch = useDispatch();
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(fetchManufacturers());
    }
  });

  return (
    <div className="manufacturers-page">
      <h1>Manufacturers</h1>
      <Filter />
      <ul>
        {manufacturers.map((manufacturer) => (
          <li key={manufacturer.Mfr_ID}>
            <NavLink to={`/details/${manufacturer.Mfr_ID}`}>{manufacturer.Mfr_Name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
