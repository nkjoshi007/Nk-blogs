import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { Post } from './Posts';


function App() {
  
  const {data} = useSelector((state)=>state.Post)
  const dispatch = useDispatch()
  console.log("Data:", data)
  useEffect(()=>{
    dispatch(Post())
  },[dispatch])
  return (
<>     
 <nav>
  <div className="navbar">
    <h1>Isro Missions</h1>
      <ul className="nav-list py-3" >
        <li className="mx-4">Home</li>
        <li className="mx-4">About</li>
        <li className="mx-4">Contact us</li>
      </ul>
      </div>
      </nav>
      
        <div className='container-fluid	'>
        <div className="row gy-5">
        {data.map((item)=>(
        <>
        <div class="col-lg-4">
       
        <div className="card m-3" style={{width: "18rem"}}>
   <div className="card-body bg-dark">
    <p className="card-text text-light">Mission Name- <a href={item.Link}>{item.Name}</a></p>
    <p className="card-text text-light">Mission LaunchDate- {item.LaunchDate}</p>
    <p className="card-text text-light">Mission Payload- {item.Payload}</p>
    <p className="card-text text-light">Mission Status- {item.MissionStatus}</p>
  </div>
</div>


</div>
</>

))}
</div>
</div>
      </>  
      );
}
export default App;
