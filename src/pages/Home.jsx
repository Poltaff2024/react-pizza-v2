import React from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);

    React.useEffect(() => {
      //  setIsLoading(true);
    fetch('https://68232c2e65ba0580339593e4.mockapi.io/items').then((res) => {
        return res.json();
    })
    .then((arr) => {
        setTimeout(() => {
        setItems(arr);
        setIsLoading(false);
        });
    });
    window.scrollTo(0, 0);
    }, []);

return (
<div className="container">
<div className="content__top">
<Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
<Sort />
</div>
<h2 className="content__title">Все пиццы</h2>
<div className="content__items">
{isLoading 
? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
}
</div>
</div>
)
}

export default Home;