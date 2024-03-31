import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import TodoApp from './todos/TodoApp';
import {addMyProducts} from '../redux/MyProduceSlice';

let items = [
  {
    id: 1,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 85,
    bar: '6 Bars',
    qty: 0,
  },
  {
    id: 2,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 50,
    bar: '6 Bars',
    qty: 0,
  },
  {
    id: 3,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 66,
    bar: '6 Bars',
    qty: 0,
  },
  {
    id: 4,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 60,
    bar: '6 Bars',
    qty: 0,
  },
  {
    id: 5,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 40,
    bar: '6 Bars',
    qty: 0,
  },
  {
    id: 6,
    image: require('../images/coke.webp'),
    brand: 'Jack Daniel',
    name: 'coke Bottle',
    price: 20,
    bar: '6 Bars',
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);
  return <TodoApp />;
};
export default Main;
