import '../../assets/styles/BrowseClinicCard.css';
console.log("Hi");

function BrowseClinicCard(props) {
    console.log(props.imgsrc);
    return (
        <div className="Cards">
            <img src={props.imgsrc} alt="" className="cardImage" />
            <p className="hospitalName">{props.hosName}</p>
            <p className="price">{props.price}</p>
        </div>
    );
}
export default BrowseClinicCard;
