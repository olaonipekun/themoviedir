import React from 'react';
import Moviemap from './Moviemap';

const Body = (props) => {
    const bodystyle = props.bodystyle;

  return (
    <>
      
        <div className={bodystyle}>
      
      <div className='inline-grid grid-flow-col place-content-center w-full h-20 pb-6'>
        <i className="text-2xl fas fa-fire mx-4 text-danger" style={{color: "tomato"}}></i>
      </div>
      <div className="md:container min-w-full sm:grid-cols-1 md:mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Moviemap />
      </div>
      </div>
    </>
    
  );
}

export default Body;
