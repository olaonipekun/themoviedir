import React from 'react';

const Footer = () => {
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
            <div className="">
              {data.map((Val) => {
                return (
                  <>
                    <button className="">
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
