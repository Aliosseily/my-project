import React from 'react'

const Square = ({src,title,url,className,body}) => {
    const style = ( src
    ? { backgroundImage: `url(${src})` } 
    : null ||
    className ? {className} : null||
    body ? {body} : null
    )
    return(
      <div className={body || className} style={style}>
        <div className="square-content">
        { title 
        ? <p>{title}</p>
        : null 
        }
        { url 
        ? <p><a href={ url }>Read More</a></p>
        : null
        }
        </div>
      </div>
    )
  }
export default Square