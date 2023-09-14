import React from 'react';

const Footer = (props) => {
    const data = [
        {
          icon: "fas fa-fire-alt",
          name: "Trending",
          link: "/"
        },
        {
          icon: "fas fa-film",
          name: "Movies",
          link: "/movies"
        },
        {
          icon: "fas fa-tv",
          name: "TV Series",
          link: "/TV"
        },
      ];
      return (
        <>
        <div className="">
          <div className="">
            <div className="grid grid-cols-3">
              {data.map((Val) => {
                return (
                  <>
                    <button className="rounded-md text-white hover:bg-slate-500">
                      <i className={`${Val.icon}`} id="fire"></i>
                      <br />
                      <h5 className="">{Val.name}</h5>
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
      )
}

export default Footer;
