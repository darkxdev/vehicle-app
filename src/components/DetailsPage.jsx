import { useSelector } from "react-redux";
import { useParams } from "react-router";

const DetailsPage = () => {
  const { id } = useParams();
  const manufacturers = useSelector(state => state.manufacturers.manufacturers);
  console.log(manufacturers);
  const currentManufacturer = manufacturers.find(manufacturer => manufacturer.Mfr_ID === parseInt(id));
  console.log(currentManufacturer);

  return (
    <div>
      <h1>Details Page</h1>
      <p>{currentManufacturer ? <p>{currentManufacturer.Mfr_Name}</p> : <p>Manufacturer not found</p>}</p>
    </div>
  )
};

export default DetailsPage;
