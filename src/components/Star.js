import React from 'react';
import {FaStar} from 'react-icons/fa';
const Star=(props)=>{
    
    const starRate =props.rating;
    const rateCase = function(x) {  let res = "";
    switch (x) { case 1: res="rate1"; 
    break; case 2: res="rate2"; 
    break; case 3: res="rate3"; 
    break; case 4: res="rate4"; 
    break; case 5: res="rate5"; 
    break; default: res="rate0";}
    return res ; }
    //   const [rating, setRating]=useState(null);
    return(
        <div  className={rateCase(starRate)}>
            <i><FaStar className ="star1" /></i>
            <i><FaStar className ="star2" /></i>
            <i><FaStar className ="star3" /></i>
            <i><FaStar className ="star4" /></i>
            <i><FaStar className ="star5" /></i> 
        {/* {[...Array(5)].map((x,y)=>{ const ratingValue=y+1; 
        
            return <label key={Math.random()}><input 
            type="radio" 
            name="rating" 
            value={ratingValue} className="rate" 
            onClick={()=>setRating(ratingValue)}></input>
            <FaStar className="starcolor" color={ratingValue <= rating?"#3d83df":"#747474"}/> 
        </label> } 
             ) }  */}
</div>    )
}
export default Star;