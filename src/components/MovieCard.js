import {useState} from 'react';
// import  {useEffect} from 'react';
import React from 'react';
import Star from './Star';
import {BrowserRouter as Router,  withRouter } from 'react-router-dom';

const MovieCard =(props)=>{
const [Title, setTitle]=useState("");
const [Url, setUrl]=useState("");
// const [Description, setDescription]=useState("");
const [Rate, setRate]=useState(0);
// const [movie,setMovie]=useState(props.Movieslist)
// useEffect(() => {
// setMovie(props.Movieslist) 
// }, [props.Movieslist])
return(<Router>
  <div  className="block0">
    {props.MoviesList.filter(el=>el.rate>=props.Rates).filter(el=>el.title.toUpperCase().includes(props.Words.toUpperCase())).map(el=><div key={el.id} className="block1">
    <img  onClick={()=>props.history.push("/trailer/"+el.id)} src={el.url}  alt=""/>    
    <h5>{el.title}</h5>
    <Star rating={Number(el.rate)} />
    <p>{el.description}</p>
  <p >{el.trailer}</p>
    </div>)}
</div>
<div className="card " >
<input type="text" placeholder="Url" onChange={(e)=>{setUrl(e.target.value)}}/>
<input type="text"  placeholder="Title"onChange={(e)=>{setTitle(e.target.value)}}/>
{/* <input type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/> */}
<input type="number"  placeholder="Rate" onChange={(e)=>{setRate(e.target.value)}}/>
<div className="btn">
<button onClick={()=>props.add({url:Url,title:Title,rate:Rate} )}>Add</button>
</div> 
</div>
</Router>)
}
export default withRouter (MovieCard);