import { useSelector } from 'react-redux';

const Parts = () => {
  const parts = useSelector((state) => state.parts.parts);
  const partsCount = useSelector((state) => state.parts.count);

  return (
    <div className="parts-page details-page">
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>PARTS</h2>
        <p>{partsCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {parts.map((part) => (
          <li key={`${part.ManufacturerId} + ${part.Name}`}>
            {part.Name}
            <div className="more">
              <p>{part.ManufacturerId}</p>
              <i className="fa-regular fa-circle-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
