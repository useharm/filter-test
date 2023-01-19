import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceValue } from '../../redux/slices/itemSlice';

const SearchBlock = () => {
    const items = useSelector(state => state.items);
    const minPrice = items.map(item => item.price).reduce((acc, next) => Math.min(acc, next), 0);
    const maxPrice = items.map(item => item.price).reduce((acc, next) => Math.max(acc, next), 0);
    const [price, setPrice] = useState({
        min: '',
        max: '',
    })
    const [value, setValue] = useState({
        firstValue: '',
        secondValue: '',   
     })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPriceValue(value))
    }, [value])
    /* useEffect(() => {
        setPrice({
            min: items.map(item => item.price).reduce((acc, next) => Math.min(acc, next), 0),
            max: items.map(item => item.price).reduce((acc, next) => Math.max(acc, next), 0),
        })
    }, [items]) */

    return (
        <div>
            <span>Товаров 147</span>
            <h2>Объективы</h2>
            <div className='filter_price-wrapper'>
                <h3>Цена, ₽</h3>
                 <div className='filter_price-field'>
                    <input 
                    placeholder={new Intl.NumberFormat('ru-RU').format(minPrice)}
                    value={value.firstValue}
                    onChange={e => setValue((prev) => ({
                        firstValue: /\d+/.test(Number(e.target.value))
                          ? e.target.value
                          : prev.firstValue,
                        secondValue: value.secondValue
                      }))}
                    ></input>
                    <input 
                    placeholder={new Intl.NumberFormat('ru-RU').format(maxPrice)}
                    value={value.secondValue}
                    onChange={e => setValue((prev) => ({
                        firstValue: value.firstValue,
                        secondValue: /\d+/.test(Number(e.target.value))
                        ? e.target.value
                        : prev.secondValue,
                      }))}
                    
                    ></input>
                 </div>
            </div>
        </div>
    );
};

export default SearchBlock;
/* <input
     value={value1}
     onChange={e => setValue1(prev => /\d+/.test(Number(e.target.value)) ? e.target.value : prev)} 
     ></input> */