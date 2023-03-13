import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchManufacturers } from "../redux/manufacturersSlice";

const Homepage = () => {
  const manufacturers = useSelector(state => state.manufacturers.manufacturers)
  const dispatch = useDispatch();

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(fetchManufacturers())
    }
  })

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

export default Homepage
