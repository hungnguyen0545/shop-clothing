import React from 'react'

import './menu-item.style.scss'

const MenuItem = ({title,imageUrl,size}) =>
{
    const className = "menu-item "+ size;
    return(
        <div className= {className}>
    <div className="background-image" style = {{
        backgroundImage : "url("+imageUrl+")"
    }} ></div>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>                       
</div>
    )
}

export default MenuItem