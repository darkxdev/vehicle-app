import { useSelector } from 'react-redux';

const Parts = () => {
  const parts = useSelector((state) => state.parts.parts);

  return (
    <div className="parts-page page">
      <h1>Parts</h1>
      <ul>
        {parts.map((part) => (
          <li key={part.ManufacturerId}>
            {part.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parts;
