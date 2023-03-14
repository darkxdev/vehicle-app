import { useSelector } from 'react-redux';

const Makes = () => {
  const makes = useSelector((state) => state.makes.makes);

  return (
    <div className="makes-page">
      <h1>Makes</h1>
      <ul>
        {makes.map((maker) => (
          <li key={maker.Make_ID}>
            {maker.Make_Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Makes;
