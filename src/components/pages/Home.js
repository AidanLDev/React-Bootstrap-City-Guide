import React, { useContext } from 'react';
import { InfoContext } from '../../context';

export default function Home() {
  const contextValue = useContext(InfoContext);
  console.log(contextValue);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
