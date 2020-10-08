import React from 'react';
import Search from './filter';

const Header =(props)=>{
    return(<>
    <Search searchT={props.searchT} searchR={props.searchR} />
    </>
    )
}
export default Header;