import React from 'react'
import './Title.css'

const Title = ({ children, level=1, className }) => {
    className = className ? 'title '+className : 'title'
    if(level === 2) { return  (<h2 className={className}>{children}</h2>) }
    if(level === 3) { return  (<h3 className={className}>{children}</h3>) }
    if(level === 4) { return  (<h4 className={className}>{children}</h4>) }
    if(level === 5) { return  (<h5 className={className}>{children}</h5>) }
    if(level === 6) { return  (<h6 className={className}>{children}</h6>) }
    return  (<h1 className={className}>{children}</h1>)
}

export default Title