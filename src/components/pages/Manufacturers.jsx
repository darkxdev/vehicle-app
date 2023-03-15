import { useSelector } from 'react-redux';

const Manufacturers = () => {
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);
  const manufacturersCount = useSelector((state) => state.manufacturers.count);

  return (
    <div className="manufacturers-page details-page">
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>MANUFACTURERS</h2>
        <p>{manufacturersCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {manufacturers.map((manufacturer) => (
          <li key={manufacturer.Mfr_ID}>
            {manufacturer.Mfr_Name}
            <div className="more">
              <p>{manufacturer.Mfr_ID}</p>
              <i className="fa-regular fa-circle-right" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Manufacturers;
