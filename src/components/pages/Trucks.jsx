import { useSelector } from 'react-redux';

const Trucks = () => {
  const trucks = useSelector((state) => state.trucks.trucks);

  return (
    <div className="trucks-page details-page">
      <h1>Trucks</h1>
      <ul>
        {trucks.map((truck) => (
          <li key={truck.MakeId}>
            {truck.MakeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trucks;
