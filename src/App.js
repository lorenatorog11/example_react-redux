import React, { Component } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import CantidadPokemon from './components/CantidadPokemos';
import CompraPokemon from './components/CompraPokemon';
import store from './redux/store'

class App extends Component {
  render (){
    console.log(store.getState())
    return(
      <Container className='App'>
        <Row>
          <Col>
            <Card className='card mt-2'>
              <Row className='m-0'>
                <Col  className='col-4'>
                  <img className='pokemon' alt='pokemon' src={'https://phantom-marca.unidadeditorial.es/9265f61b4b94fe9d71cff8ad932d3a7d/resize/660/f/webp/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg'}/>
                </Col>
                <Col className='col-8 p-2'>
                  <Col className='col-12 justify-content-center text-center mb-2'>
                    <CantidadPokemon/>
                  </Col>
                  <Col className='col-12 d-flex justify-content-between'>
                    <CompraPokemon/>
                  </Col>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;

