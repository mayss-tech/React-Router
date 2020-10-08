import React,{useState} from 'react';
import './App.css';
import Header from './components/header'; 
import MovieCard from './components/MovieCard';
import Trailer from './components/trailer';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
const App = (props) => {
  let Card=[ {id:1,url:"https://img.discogs.com/F_MUVHkqRp49OQh_WKcArZ3nJCE=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1724965-1311442953.jpeg.jpg",
  title:"Charlotte's Web",
  rate:5},
  {id:2,url:"https://lumiere-a.akamaihd.net/v1/images/open-uri20160812-3094-q12ugh_dfd54a6e.jpeg?region=0%2C0%2C640%2C320",
  title:"Finding Nemo",
  rate:3},
  {id:3,url:"https://www.geekgeneration.fr/wp-content/uploads/2019/09/La-Reine-des-Neiges-2-Frozen-2-1.jpg",
  title:"Frozen",
rate:4}]

const [Movies, setMovies]=useState(Card)
let Card1=[ {id:1,
  description:"Charlotte's Web is a 2006 American fantasy-comedy film based on the 1952 novel of the same name by E. B. White."
,trailer:< iframe width="600" height="390" src="https://www.youtube.com/embed/m1UTcRNXB9s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>},
  {id:2,
description:"Finding Nemo is a 2003 American computer-animated adventure film produced by Pixar Animation Studios. "
,trailer:<iframe width="600" height="390" src="https://www.youtube.com/embed/2zLkasScy7A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
  {id:3,
description:"Frozen is a  American 3D computer-animated musical fantasy film produced by Walt Disney Animation Studios."
,trailer:< iframe width="600" height="390" src="https://www.youtube.com/embed/TbQm5doF_Uc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}]
const [Movies1, setMovies1]=useState(Card1)

const[Words,setWords]=useState("");
const searchT=(z)=>{
  setWords(z)
}
const[Rates,setRates]=useState("");
const searchR=(z)=>{
  setRates(z)
}
const add=(z)=>{
  console.log(z)
  setMovies([...Movies,z])
  console.log(Movies)
}

  return (<Router><div>
<Header  searchT={searchT} searchR={searchR} Rates={Rates} Words={Words}/> 
<Route exact path="/" component={()=> <MovieCard   MoviesList={Movies} Rates={Rates}  Words={Words} add={add}/>}/>
<Route path="/trailer/:id" component={(props)=><Trailer {...props} MoviesList={Movies1}/>} />
</div> </Router> );
}
export default App;