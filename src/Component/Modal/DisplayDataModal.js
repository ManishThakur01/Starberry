import { useState } from 'react';
import heart from '../../images/heart.png';
import share from '../../images/share.png';
import home from '../../images/home.png';
import './DisplayModal.css';

const closeBtn = ""//"https://www.iciciprulife.com/content/icici-prudential-life-insurance/custAppForm/expBuy_UR/images/close.png";


const DisplayDataModal = (props) => {
    console.log(props.dataSelect);
    const [showDataModal, setShowDataModal] = useState(true);

    const hideDataModal = () => {
        props.onClick();
    }
    let showBed = true;
    props.dataSelect.Building_Type == "Apartment" || props.dataSelect.Building_Type == "Penthouse" || props.dataSelect.Building_Type == "House" ? showBed = true : showBed = false; 
    
    const description = props.dataSelect.Description;
    
    return (
        <>
            <div className="data-sec">
                <div className='btn-sec'>
                    <div className='close' onClick={hideDataModal}>Back</div>
                </div>
                <div className="main-sec">
                    {props.dataSelect && 
                    <>
                        <div className='left-sec'>
                            <div className='banner-img-sec'>
                                <img className='banner-img' alt="Clear with periodic clouds" src={props.dataSelect.Images[0].url} />
                            </div>
                            <div className='thumbnail-sec'>
                                <div className='first-thumb'>
                                  {props.dataSelect.Images[2] && <img className='thumbnail-img' alt="Clear with periodic clouds" src={props.dataSelect.Images[2].formats.thumbnail.url} />}
                                </div>
                                <div className='second-thumb'>
                                   {props.dataSelect.Images[3] && <img className='thumbnail-img' alt="Clear with periodic clouds" src={props.dataSelect.Images[3].formats.thumbnail.url} />}
                                </div>
                            </div>
                        </div>
                        <div className='right-sec' id="right-sec">
                            <div className='share-sec'>
                                <img className='social-icons' alt="socail media icons" src={share}/>
                               <img className='social-icons' alt="socail media icons" src={heart}/>
                            </div>
                            <div className='price-sec'>
                                <span className='price'>&euro; {props.dataSelect.Price}</span>
                               {showBed && <span className='bed'> {props.dataSelect.Bedrooms} bed</span>}
                               <span className='area'>| {props.dataSelect.Floor_Area} sqm</span>
                            </div>
                            <div className='detail-sec'>{props.dataSelect.Bedrooms} bedroom Apartment for sale in the Fontvieille</div>
                            <div className='contact-us-sec'>
                                <img className='social-icon-home' src={home}/>
                                <span className='contact-us-text'>Please contact us</span>
                            </div> 
                            <div className='contact-btn'>CONTACT AGENT</div> 
                            <div className='label-text'>FACTS & FEATURES</div>
                            <div className='features-sec'>
                                <span className='feature-left'>Neighbourhood:</span>
                                <span className='feature-right'>Fontvieille</span>
                            </div>
                            <div className='features-sec'>
                                <span className='feature-left'>Price per sqm:</span>
                                <span className='feature-right'>Fontvieille</span>
                            </div>
                            <div className='features-sec'>
                                <span className='feature-left'>Brochure:</span>
                                <span className='feature-right'>Fontvieille</span>
                            </div>
                            <div className='features-sec'>
                                <span className='feature-left'>Floor Plan:</span>
                                <span className='feature-right'>Fontvieille</span>
                            </div>
                            <div className=''
                                dangerouslySetInnerHTML={{__html: description}}
                            />
                            <div className='agent-info-sec'>
                                <div className='agent-pic'>
                                    <img src={props.dataSelect.Negotiator.Image.formats.thumbnail.url} alt="agent phopgraph" />
                                </div>
                                <div className='agent-contact-sec'>
                                    <div className='agent-name'>{props.dataSelect.Negotiator.Name}</div>
                                    <div className='agent-work'>{props.dataSelect.Negotiator.Designation}</div>
                                    <span className='agent-contact'>{props.dataSelect.Negotiator.Phone} | <span className='agent-email'>{props.dataSelect.Negotiator.Email}</span></span>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default DisplayDataModal;
