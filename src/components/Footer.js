import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const data = [
        {
          id: 0,
          icon: "fas fa-fire-alt",
          name: "Trending",
          link: "/",
          color: "Tomato",
          fontColor: "text-[#ff6347]"
        },
        {
          id: 1,
          icon: "fas fa-film",
          name: "Movies",
          link: "/movies",
          color: "Dodgerblue",
          fontColor: "text-[#1e90ff]"
        },
        {
          id: 2,
          icon: "fas fa-tv",
          name: "TV Series",
          link: "/tvseries",
          color: "Mediumslateblue",
          fontColor: "text-[#7b68ee]"
        },
      ];
      return (
        <>

          <div className="grid grid-cols-3 w-full sm:sticky">
            {data.map((Val) => {
              return (
                <NavLink key={Val.id} to={`${Val.link}`}>
                  <button className="p-2 rounded-md text-white hover:bg-slate-700  w-full">
                    <i className={`${Val.icon}`} id="fire" style={{color: `${Val.color}`}}></i>
                    <br />
                    <h5 className={`${Val.fontColor}`}>{Val.name}</h5>
                  </button>
                </NavLink>
              );
            })}
          </div>
      </>
      )
}

export default Footer;
