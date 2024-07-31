import React from 'react';

const Item = ({name, image}) => {
  return (
    <div className="flex flex-col justify-between min-h-[260px] border border-slate-300 rounded-xl cursor-pointer hover:border-blue-500">
      <img src={image} className="scale-150"/>
      <div className="font-bold p-[20px] text-center">{name}</div>
    </div>
  );
}

export default Item;
