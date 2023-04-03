import React from "react";
import Button from './Button'


const Header =({onAdd , showcreate}) =>{
    return(
        <header className="header">
            {/* <h1 style={{}}>Zomdbu</h1> */}
            <div>
            <Button 
                color={showcreate ? 'green' : 'red'}
                text={showcreate ?  'exit' : 'Add'}
                onClick={onAdd}>
            </Button>
        </div>
        </header>
    )
}



export default Header