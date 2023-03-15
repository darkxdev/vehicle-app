import { useSelector } from 'react-redux';

const Motos = () => {
  const motos = useSelector((state) => state.motos.motos);
  const motosCount = useSelector((state) => state.motos.count);

  return (
    <div className="motos-page details-page">
      <h3>CATEGORY BREAKDOWN</h3>
      <div className="details-header">
        <h2>MOTOS</h2>
        <p>{motosCount}</p>
      </div>
      <h3>ITEMS</h3>
      <ul>
        {motos.map((moto) => (
          <li key={moto.MakeId}>
            {moto.MakeName}
            <div className="more">
              <p>{moto.MakeId}</p>
              <i className="fa-regular fa-circle-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Motos;
