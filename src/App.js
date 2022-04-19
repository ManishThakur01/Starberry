import { useEffect, useState } from 'react';
import { DarkBackgroundSection } from './Component/darkBackground/darkBackground';
import FilterSection from './Component/FilterSection/FilterSection';
import Listing from './Component/ListingofData/Listing';
import LoginModal from './Component/Modal/LoginModal';
import DisplayDataModal from './Component/Modal/DisplayDataModal';
import world from './images/world.png';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [loginState, setloginState] = useState(false);
  const [showSelectedData, setshowSelectedData] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const restEndpoint = "https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50";

  const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  };

  useEffect(() => {
    callRestApi().then(
            result => setApiResponse(result)
        );
    //console.log(process.env.Username);
  },[]);

  const showHotelDetail = (item) => {
    setSelectedData(item);
    setshowSelectedData(true);
  } 
  const hideHotelDetail = () => {
    setshowSelectedData(false);
  }
  const hideState = (pol) => {
    pol ? setloginState(true) : setloginState(false)
  }
  const logoutHandler = () => {
    setloginState(false);
  }
  return (
    <>
      {!loginState && <LoginModal onhide={hideState}/>}
      <header>
        <div className='header-sec'>
          <div className='header-left-sec'>
            <img src={world} className="world-icon" alt="company icon" />
            <span className='world-icon-text'>Properties</span>
          </div>
          <div className='logout-sec' onClick={logoutHandler}>
          {!showSelectedData && <span className='logout-text'>Logout!</span>}
          </div>
        </div>
      </header>
      {!showSelectedData && <div className='middleTextSec'>Property for Sales</div>}
      <section className='main-page'>
        {!showSelectedData && <FilterSection/> }
        {!showSelectedData && <Listing dataType={apiResponse} showHotelDetail={showHotelDetail}/> }
        {showSelectedData && <DisplayDataModal dataSelect={selectedData} onClick={hideHotelDetail}/>}
      </section>
      <DarkBackgroundSection text="Footer Section"></DarkBackgroundSection>
      
    </>
  );
}

export default App;
