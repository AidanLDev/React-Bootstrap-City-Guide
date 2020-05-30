import React, { useContext } from 'react';
import { InfoContext } from '../../context';
import Info from '../Info';
export default function Home() {
  const contextValue = useContext(InfoContext);
  console.log(contextValue);
  return (
    <div className='container'>
      <div className='row mt-5'>
        {contextValue.info.map((item) => {
          return <Info key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
