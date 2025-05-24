import React from 'react';

function Categories({value, onClickCategory}) {
  console.log(value)
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  
    return (
      <div className="categories">
      <ul>
      {
      categories.map((categoryName, i) => (<li onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
        {categoryName}</li>)
    )}
      </ul>
    </div>
    
    
  );
        
  }
  export default Categories;