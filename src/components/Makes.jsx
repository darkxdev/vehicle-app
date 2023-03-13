import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMakes } from '../redux/makesSlice';

const Makes = () => {
  const dispatch = useDispatch();
  const makes = useSelector((state) => state.makes.makes);

  useEffect(() => {
    if (makes.length === 0) {
      dispatch(fetchMakes());
    }
  });

  return (
    <div className="makes-page">
      <h1>Makes</h1>
      <ul>
        {makes.map((maker) => (
          <li key={maker.Make_ID}>
            {maker.Make_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Makes
