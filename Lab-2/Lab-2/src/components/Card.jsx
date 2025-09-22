
export default function Card(props) {

    console.log(props);

    return (

    <div className="Card-Component">
       
        <img src={props.image} alt="" className="BannerImage" />

        <div className="Card-Info">
             <h3>{props.countryName}</h3>
             <h4 className="custom-font-color">{props.resortName}</h4>
             {props.ratings > 4.0? <p className="Card-Ratings-Green">{props.ratings} ★</p> : <p className="Card-Ratings-Red">{props.ratings} ★</p>}
             <p className="custom-font-color">${props.price}/night</p>
        
        </div>

    </div>

 );

}