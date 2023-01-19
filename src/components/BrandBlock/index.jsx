import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrandValue } from '../../redux/slices/itemSlice';

const BrandBlock = () => {
    const brand = [
        { title: "Nikon", index: 9 },
        { title: "Canon", index: 1 },
      ];
    const dispatch = useDispatch();
    function searchBrand(obj) {
        dispatch(setBrandValue(obj))
    }
    return (
        <div className='filter_brand-wrapper'>
            <h3>Бренд</h3>
            <div className='filter_brand-field'>
                {brand.map((item, index) => (<div className='filter_brand-field-wrapper' key={index}> 
                    <input id={index} name={'value' + index} type="checkbox" onClick={() => searchBrand(item)}></input>
                    <label htmlFor={index}>{item.title}</label>
                </div>))}
            </div>
        </div>
    );
};

export default BrandBlock;