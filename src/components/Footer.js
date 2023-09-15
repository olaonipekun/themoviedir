import React from 'react';

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
          link: "/TV",
          color: "Mediumslateblue",
          fontColor: "text-[#7b68ee]"
        },
      ];
      return (
        <>

          <div className="grid grid-cols-3">
            {data.map((Val) => {
              return (
                <>
                  <button key={Val.id} className="rounded-md text-white hover:bg-slate-700">
                    <i className={`${Val.icon}`} id="fire" style={{color: `${Val.color}`}}></i>
                    <br />
                    <h5 className={`${Val.fontColor}`}>{Val.name}</h5>
                  </button>
                </>
              );
            })}
          </div>
      </>
      )
}

export default Footer;
