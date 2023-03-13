import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchManufacturers } from '../redux/manufacturersSlice';

const Manufacturers = () => {
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
      <ul>
        {manufacturers.map((manufacturer) => (
          <li key={manufacturer.Mfr_ID}>
            {manufacturer.Mfr_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Manufacturers
