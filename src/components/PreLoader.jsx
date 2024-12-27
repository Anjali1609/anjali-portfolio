import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';
import './preloader.css';

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    <div className="preloader">
        <div className="texts-container drop-shadow-lg shadow-orange-400">
            <span>Resilience</span>
            <span>BY</span>
            <span>Anjali</span>
        </div>
    </div>
  );
};

export default PreLoader;