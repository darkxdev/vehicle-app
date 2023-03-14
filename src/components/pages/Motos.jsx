import { useSelector } from 'react-redux';

const Motos = () => {
  const motos = useSelector((state) => state.motos.motos);
  const motosCount = useSelector((state) => state.motos.count);

  return (
    <div className="motos-page page">
      <h1>Motos</h1>
      <p>{motosCount}</p>
      <ul>
        {motos.map((moto) => (
          <li key={moto.MakeId}>
            {moto.MakeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Motos;
