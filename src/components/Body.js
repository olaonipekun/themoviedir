import React from 'react';
import Moviemap from './Moviemap';

const Body = (props) => {
    const bodystyle = props.bodystyle;

  return (
    <div className={bodystyle}>
      <div className='inline-grid grid-flow-col place-content-center w-full h-20 pb-6'>
        <i className="text-2xl fas fa-fire mx-4 text-danger" style={{color: "tomato"}}></i>
        <h4 className='text-2xl font-bold text-slate-800 hover:transition-all'> Trending Today </h4>
      </div>
      <div className="md:container min-w-full md:mx-auto grid grid-cols-3 gap-4">
        <Moviemap />
      </div>
    </div>
  );
}

export default Body;
