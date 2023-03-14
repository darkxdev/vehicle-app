import { useSelector } from 'react-redux';

const Manufacturers = () => {
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);

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
};

export default Manufacturers;
