import React from 'react';
import BrandBlock from './BrandBlock';
import SearchBlock from './SearchBlock';

const FilterBlock = () => {
    return (
        <div className='container_filter'>
            <div className='container_filter-wrapper'>
                <SearchBlock />
                <BrandBlock />
            </div>
        </div>
    );
};

export default FilterBlock;