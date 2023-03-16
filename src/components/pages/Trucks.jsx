import { useSelector } from 'react-redux';
import Header from '../Header';

const Trucks = () => {
  const trucks = useSelector((state) => state.trucks.trucks);
  const trucksCount = useSelector((state) => state.trucks.count);

  return (
    <div className="trucks-page details-page">
      <Header title="Trucks/Items" />
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>TRUCKS</h2>
        <p>{trucksCount}</p>
      </div>
      <ul>
        {trucks.map((truck) => (
          <li key={truck.MakeId}>
            {truck.MakeName}
            <div className="more">
              <p>{truck.MakeId}</p>
              <i className="fa-regular fa-circle-right" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trucks;
