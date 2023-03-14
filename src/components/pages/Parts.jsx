import { useSelector } from 'react-redux';

const Parts = () => {
  const parts = useSelector((state) => state.parts.parts);

  return (
    <div className="parts-page">
      <h1>Parts</h1>
      <ul>
        {parts.map((parts) => (
          <li key={parts.ManufacturerId}>
            {parts.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
