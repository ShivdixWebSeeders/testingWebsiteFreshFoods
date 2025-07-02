// MyProvider.js
import { useState } from 'react';
import UIContext from './UIContext';
import useWindowSize from '../hooks/useWindowSize';
export default function MyProvider({ children }) {

const {width} = useWindowSize();


  return (
    <UIContext.Provider value={{width}}>
      {children}
    </UIContext.Provider>
  );
}
