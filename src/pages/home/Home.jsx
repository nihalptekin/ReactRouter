import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [ülkeler, setUlkeler] = useState([]);
  
  const navigate=useNavigate()
  const url = ("https://restcountries.com/v3.1/all");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ülkeler);
 

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
  <div>
  <Container>
    <Row className='g-3 text-center mt-4'>
      {ülkeler.map(({name, id, cca2}) => {
        return (
          <Col className='d-flex justify-content-center' key={id} sm={12} md={6} lg={4}>
          <Card style={{ width: '18rem', height:"15rem" }}>
      <Card.Img variant="top" src={`https://flagcdn.com/${cca2.toLowerCase()}.svg`} onClick={()=>navigate(`/${name.common}`)}
                alt="" style={{height:"150px", }}
           />  
                
      <Card.Body>
      <Card.Title>{name.common}</Card.Title>
    <Card.Text>
    {/* <strong>Country:</strong>{capital[0]}
    <strong>Country:</strong>{languages} */}
    {/* <strong>Country:</strong>{re} */}
    {/* <strong>Country:</strong>{population} */}

   
    </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        );
      })}
      </Row>
      </Container>
      </div>
  );
}

export default Home