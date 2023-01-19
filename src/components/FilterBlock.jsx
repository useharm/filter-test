import React from 'react';
import BrandBlock from './BrandBlock';
import SearchBlock from './SearchBlock';

const FilterBlock = () => {
    return (
        <div className='container_filter'>
                <SearchBlock />
                <BrandBlock />
        </div>
    );
};

export default FilterBlock;