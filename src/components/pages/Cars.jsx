import { useSelector } from 'react-redux';

const Cars = () => {
  const cars = useSelector((state) => state.cars.cars);

  return (
    <div className="cars-page page">
      <h1>Cars</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.MakeId}>
            {car.MakeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
