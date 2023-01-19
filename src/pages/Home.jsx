import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/slices/itemSlice';
import FilterBlock from '../components/FilterBlock';
import ItemsBlock from '../components/ItemsBlock';
import debounce from "lodash.debounce";
import { useState } from 'react';

const Home = () => {
   const dispatch = useDispatch();
   const priceValue = useSelector(state => state.priceValue);
   const brandValue = useSelector(state => state.brandValue);
   const [searchValue, setSearchValue] = useState({
    firstValue: '',
    secondValue: '',
   });
   useEffect(() => {
    dispatch(fetchItems({searchValue, brandValue}));
   }, [searchValue, brandValue])
   const searchDelay = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 500),
    []
);
    useEffect(() => {
        searchDelay(priceValue)
    }, [priceValue])
   
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='content'>
                    <FilterBlock />
                    <ItemsBlock />
                </div>
            </div>
        </div>
    );
};

export default Home;