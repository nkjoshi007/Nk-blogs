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
     
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://updatesmarathi.in/partimages/20230114_122750.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrKRHaICkSIGeO9WNt1aoHFBOV-xX8qqgqBpoabFIA45MsicVIzu1YHkdDiuQVPBd2mb3jI73Vum-9_0PXVUAN_ekOMtKMb_0iRxEkR0GCZ7Gk8iHhC4ez8UDUZR4ysYR8Os2niKToDD8aacvPyL-vwC45Dkdm7vGHo3uUYK3hv1bjxrHd1wgkRfTDSw/s1080/n3780337441650199991083dcdfe2a061d4db10597aa9ab52e63ed21a2dc33d1ad572b11dd364cc40fa2f72.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://fullform.blog/wp-content/uploads/2021/12/ISRO.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='text-start text-light bg-dark my-4'>
  <h1 className='text-center'>Isro Missions</h1>
<p>Indian Space Research Organisation (ISRO) is the space agency of India. The organisation is involved in science, engineering and technology to harvest the benefits of outer space for India and the mankind. ISRO is a major constituent of the Department of Space (DOS), Government of India. The department executes the Indian Space Programmeprimarily through various Centres or units within ISRO.

ISRO was previously the Indian National Committee for Space Research (INCOSPAR), set up by the Government of India in 1962, as envisioned by Dr. VikramA Sarabhai. ISRO was formed on August 15, 1969 and superseded INCOSPAR with an expanded role to harness space technology. DOS was set up and ISRO was brought under DOS in 1972.

The prime objective of ISRO/DOS is the development and application of space technology for various national needs. To fulfil this objective, ISRO has established major space systemsfor communication, television broadcasting and meteorological services; resources monitoring and management; space-based navigation services. ISRO has developed satellite launch vehicles, PSLV and GSLV, to place the satellites in the required orbits.

Alongside its technological advancement, ISRO contributes to science and science education in the country. Various dedicated research centres and autonomous institutions for remote sensing, astronomy and astrophysics, atmospheric sciences and space sciences in general function under the aegis of Department of Space. ISRO's own Lunar and interplanetary missions along with other scientific projects encourage and promote science education, apart from providing valuable data to the scientific community which in turn enriches science.

ISRO has its headquarters in Bengaluru. Its activities are spread across various centres and units. Launch Vehicles are built at VikramSarabhai Space Centre (VSSC), Thiruvananthapuram; Satellites are designed and developed at U R Rao Satellite Centre (URSC), Bengalure; Integration and launching of satellites and launch vehicles are carried out from Satish Dhawan Space Centre (SDSC), Sriharikota; Development of liquid stages including cryogenic stage is carried out at Liquid Propulsion Systems Centre (LPSC), Valiamala& Bengaluru; Sensors for Communication and Remote Sensing satellites and application aspects of the space technology are taken up at Space Applications Centre (SAC), Ahmedabad and Remote Sensing satellite data reception processing and dissemination is entrusted to National Remote Sensing Centre (NRSC), Hyderabad.</p>
</div>
        <div className='container-fluid	'>
        <div className="row gy-5">
        {data.map((item)=>(
        <>
        <div class="col-lg-4 col-md-6 col-sm-6">
       
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
<div className='bg-dark'>
  <p className='text-center text-light'>© 2023 website tells about Isro Missions</p>
</div>
      </>  
      );
}
export default App;
