import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Dosa',
      description: 'Crispy, savory, slightly tangy delight!',
      price: 45.99,
    },
    {
      id: 'm2',
      name: 'Chicken Biryani',
      description: 'Rich, aromatic, spicy, tender indulgence.',
      price: 249.99,
    },
    {
      id: 'm3',
      name: 'Double ka Meeta',
      description: 'Sweet, creamy, bread-based dessert delight.',
      price: 119.99,
    },
    {
      id: 'm4',
      name: 'Samosa',
      description: 'Crispy, savory, spiced potato pastry....',
      price: 49.99,
    },
  ];

const AvailabeMeals=()=>{
    return (<section className={classes.meals}>
        <Card>
            <ul>
                {DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)}
            </ul>
        </Card>
    </section>)
};

export default AvailabeMeals;