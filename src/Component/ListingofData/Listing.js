import './Listing.css';

function Listing(props){
    return(
        <div className="hotel-list-container">
            {props.dataType && props.dataType.length > 0 &&
                props.dataType.map((item, index) => {
                    if(typeof item == "object" && index <= 20){
                        return (
                            <div className="hotelList" key={index} onClick= {() => props.showHotelDetail(item)}>
                                <div><img alt="Clear with periodic clouds" src={item.Images[0].formats.thumbnail.url} /></div>
                                <div>{item.Title}</div>
                                <div>{item.Building_Type} for {item.Property_Type}</div>
                            </div>
                        )
                    }

                })}
        </div>
    )
}
export default Listing