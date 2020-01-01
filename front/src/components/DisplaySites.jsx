import React from 'react';
import './DisplaySites.css';

const DisplaySites = ({ siteInfos }) => {
  const { id, site_name, country, inscription_year, main_pic, pic2, pic3} = siteInfos
  return(
    <div className="container">
      {siteInfos
      .map(site => 
        <figure className="site-figure">
          <h4 className="site-name">{site.site_name}</h4>
          <p className="site-country">{site.country}</p>
          <img src={site.main_pic} />
        </figure>
        )}
    </div>
  )
}

export default DisplaySites;