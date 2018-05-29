import React from 'react'
import './Section.css'

const Section = ({ children, color, src, ...rest }) => {
    const style = ( src
    ? { backgroundImage:`url("${src}")`}
    : ( color
      ? { backgroundColor:color }
      : null
      )
    )
    return (
      <section style={style} {...rest}>
        { children }
      </section>
    )
  }

export default Section