import React from 'react';
import modelsData from '../data/models.json'
import ItemContainer from '../components/items/ItemContainer';

const HomePages = () => {
  return (
    <div className="w-full sm:max-w-lg mx-auto px-[20px] py-[20px]">
      <div className="mb-[40px]">
        <h1 className="font-bold text-[42px]">AR Examples</h1>
        <div>Try augmented reality using the following catalogue</div>
      </div>
      <ItemContainer data={modelsData}/>
    </div>
  );
}

export default HomePages;
