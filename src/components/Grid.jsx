import { NavLink } from "react-router-dom";

const Grid = () => {
  const categories = [
    {
      category: 'Makes',
      path: '/makes',
      id: '1',
    },
    {
      category: 'Manufacturers',
      path: '/manufacturers',
      id: '2',
    },
  ]

  return (
    <div>
      <h2>Grid</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={category.path}>{category.category}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Grid;
