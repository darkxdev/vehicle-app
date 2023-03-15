import { useSelector } from 'react-redux';

const Trucks = () => {
  const trucks = useSelector((state) => state.trucks.trucks);
  const trucksCount = useSelector((state) => state.trucks.count);

  return (
    <div className="trucks-page details-page">
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
              <i className="fa-regular fa-circle-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trucks;
