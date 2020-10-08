 import React from 'react';

const Trailer = (props) => {
    return ( 
        <div >
{props.MoviesList.filter(el=>el.id==props.match.params.id).map(el=><div >
    <div className="block2">
    <p>{el.trailer}</p>
    <p className="description">{el.description}</p>
    </div>
</div>
)}
<button className="btn2" onClick={()=>props.history.push("/")} ><b>Back</b></button>
        </div>
);
}
export default Trailer;