import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMakes } from '../redux/makesSlice';

const Grid = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const makes = useSelector((state) => state.makes.makes);
  const makesCount = useSelector((state) => state.makes.count);

  useEffect(() => {
    if (makes.length === 0) {
      dispatch(fetchMakes());
    }
  });

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
    },
  ];

  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2>Grid</h2>
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
