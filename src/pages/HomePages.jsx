import React from 'react';
import { Link } from "react-router-dom";
import modelsData from '../data/models.json'

const HomePages = () => {
  return (
    <div className="w-full sm:max-w-lg mx-auto px-[20px] py-[20px]">
      <div className="mb-[40px]">
        <h1 className="font-bold text-[42px]">AR Examples</h1>
        <div>Try augmented reality using the following catalogue</div>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        {modelsData.map(model =>
          <Link to={`/xr-tree-beech/${model.id}`} key={model.id} className="flex flex-col justify-between min-h-[260px] border border-slate-300 rounded-xl cursor-pointer">
            <img src={model.image} className="scale-150"/>
            <div className="font-bold p-[20px] text-center">{model.name}</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePages;
