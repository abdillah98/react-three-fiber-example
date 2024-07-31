import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemContainer = ({data}) => {
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {data.map(model =>
        <Link to={`/view/${model.id}`} key={model.id}>
          <Item {...model}/>
        </Link>
      )}
    </div>
  );
}

export default ItemContainer;
