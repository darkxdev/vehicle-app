import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMakes } from '../redux/makesSlice';
import { fetchManufacturers } from '../redux/manufacturersSlice'
import { fetchParts } from '../redux/partsSlice';

const Grid = () => {
  //Importing methods from libraries
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  //Categories' states selectors
  const makes = useSelector((state) => state.makes.makes);
  const manufacturers = useSelector((state) => state.manufacturers.manufacturers);
  const parts = useSelector((state) => state.parts.parts);

  const makesCount = useSelector((state) => state.makes.count);
  const manufacturersCount = useSelector((state) => state.manufacturers.count);
  const partsCount = useSelector((state) => state.parts.count);

  //Fetching data when mounting the components
  useEffect(() => {
    if (makes.length === 0) {
      dispatch(fetchMakes());
    }
  });

  useEffect(() => {
    if (manufacturers.length === 0) {
      dispatch(fetchManufacturers());
    }
  });

  useEffect(() => {
    if (parts.length === 0) {
      dispatch(fetchParts());
    }
  });

  //Object storing the categories and their properties
  const categories = [
    {
      category: 'Makes',
      path: '/makes',
      id: '1',
      count: makesCount,
    },
    {
      category: 'Manufacturers',
      path: '/manufacturers',
      id: '2',
      count: manufacturersCount,
    },
    {
      category: 'Parts',
      path: '/parts',
      id: '3',
      count: partsCount,
    },
  ];

  //Search bar filter methods
  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  //Rendering the component
  return (
    <div>
      <h3>STATS BY CATEGORY</h3>
      <input type="text" placeholder="Search categories" value={query} onChange={handleQueryChange} />
      <ul>
        {filteredCategories.map((category) => (
          <li key={category.id}>
            <NavLink to={category.path}>
              {category.category}
              {category.count && <p>{category.count}</p>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
