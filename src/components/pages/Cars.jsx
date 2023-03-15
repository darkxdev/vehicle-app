import { useSelector } from 'react-redux';

const Cars = () => {
  const cars = useSelector((state) => state.cars.cars);
  const carsCount = useSelector((state) => state.cars.count);

  return (
    <div className="cars-page details-page">
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>CARS</h2>
        <p>{carsCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {cars.map((car) => (
          <li key={car.MakeId}>
            {car.MakeName}
            <div className="more">
              <p>{car.MakeId}</p>
              <i className="fa-regular fa-circle-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
