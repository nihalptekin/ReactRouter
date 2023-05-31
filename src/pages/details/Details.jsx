import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button, Container } from 'react-bootstrap';


const Details = () => {

  const [ülke, setUlke] = useState([]); 

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setUlke(data[0]))
      .catch((error) => console.log(error));
  }, [name]);

  console.log(ülke);

  const backgroundStyle = {
    backgroundImage: "url('https://cdn.pixabay.com/photo/2018/05/08/13/56/globe-3383088_1280.jpg')",
    backgroundSize: 'cover',
  };

  return (
    <div  style={backgroundStyle} >
    <Container className="text-center d-flex justify-content-center mt-5">
      <Card className="p-4" key={ülke.id} style={{ width: '30rem', height:"35rem", opacity:0.9 }}>
        <Card.Img
          variant="top"
          src={ülke.flags ? ülke.flags.svg : ""}
          alt={ülke.name ? ülke.name.common : ""}
          style={{ height: "300px",}}
        />
        <Card.Body>
          <Card.Title style={{fontSize:"30px"}}>{ülke.name ? ülke.name.common : ""}</Card.Title>
          <Card.Text style={{fontSize:"15px"}}>
            <strong>Region:</strong> {ülke.region}
            <br />
            <strong>Capital:</strong> {ülke.capital ? ülke.capital[0] : ""}
            <br />
            <strong>Population:</strong> {ülke.population}
            <br />
            <strong>Languages:</strong>
{ülke.languages && Object.entries(ülke.languages).map(([key, value]) => (
  <div key={key}>
    <span>{value}</span>
  </div>
))}

<Button variant="warning mx-2" className="btn btn-primary mt-2" 
 onClick={() => {
    const googleMapsUrl = ülke.maps.googleMaps; // Google Haritalar'ın URL'si burada alınır
    window.open(googleMapsUrl, "_blank");
  }}
   >View on Google Maps</Button>
          </Card.Text>
          <Button variant="success" className="btn btn-primary" onClick={() => navigate(-1)}>GO BACK</Button>
          {/* <Button variant="" className="btn btn-primary" onClick={() => navigate("/")}>GO HOME</Button> */}
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default Details;
