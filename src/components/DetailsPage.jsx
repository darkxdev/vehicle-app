import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const DetailsPage = () => {
  const { id } = useParams();
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);
  const currentManufacturer = manufacturers.find(
    (manufacturer) => manufacturer.Mfr_ID === parseInt(id, 10),
  );

  return (
    <div>
      <h1>Details Page</h1>
      <p>{currentManufacturer ? `${currentManufacturer.Mfr_Name}` : 'Manufacturer not found'}</p>
    </div>
  );
};

export default DetailsPage;
