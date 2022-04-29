import locationIcon from "../images/location.png";

export default function SightCard(props) {
  console.log(props.data.imageUrl);
  return (
    <div className="sight-card">
      <img src={props.data.imageUrl} alt=""></img>
      <article className="sight-info">
        <div className="location">
          <img src={locationIcon} alt=''></img>
          <p className="country">{props.data.location}</p>
          <a
            href={props.data.googleMapsUrl}
            className="google-link"
            target="_blank"
            rel='noreferrer'
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.data.title}</h2>
        <article className="description">
          <p className="date">{`${props.data.startDate} - ${props.data.endDate}`}</p>
          <p className="text">{props.data.description}</p>
        </article>
      </article>
    </div>
  );
}
