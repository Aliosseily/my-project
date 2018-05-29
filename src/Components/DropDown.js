import React from 'react'
import './DropDown.css'

const DropDown = ({title, children, isOpen, change}) => {
   
    
            let openclose = isOpen ? 'open' : 'close';
            
       
        return (
            <div className={'dropdown dropdown-'+openclose}>
            
                <div className="dropdown-header" onClick={change}>
                   <span className="plus-sign">&#43;</span> <a>{title}</a>
                </div>
                <div className="dropdown-content">
                    {children}
                </div>
            </div>
           
        )
    }
    export default DropDown