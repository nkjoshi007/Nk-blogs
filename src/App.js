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
    <h1>Nk Blogs</h1>
      <ul className="nav-list py-3" >
        <li className="mx-4">Home</li>
        <li className="mx-4">About</li>
        <li className="mx-4">Contact us</li>
      </ul>
      </div>
      </nav>
      {data.map((item)=>(
        <>
        <h1>{item.title}</h1>
        </>
      ))}
      </>  
      );
}
export default App;
