import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Thumbnail ,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import '../Styles/home.css'
export default class TourPlace extends Component{
    render(){
        return(

            <Grid>

                <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail  src="assets/img/places/chardham.jpg"  alt="242x200">
                        <h3>Chardham</h3>
                        <h4>5 Nights, 6 days</h4>
                        <p><h5>Include:</h5>Hotel, Breakfast, Lunch, Dinner</p>
                        {/* <p>
                        2 Night Haridwar, 1 Night Rishikesh, 1 Nights Kedarnath
                        </p> */}
                        <Link to="/chardham">
                    <Button bsStyle="primary" >More</Button></Link>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/goa.jpg"  alt="242x200">
                        <h3>Goa</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/simla.jpg"  alt="242x200">
                        <h3>Simla-Manali</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/ladakh.jpg"  alt="242x200">
                        <h3>Ladakh</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/kedarnath.jpg"  alt="242x200">
                        <h3>Kedarnath</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/manali.jpg"  alt="242x200">
                        <h3>Simla-Manali</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/rajasthan.jpg"  alt="242x200">
                        <h3>Rajasthan</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/nainital.jpg"  alt="242x200">
                        <h3>Nainital</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/turkey.jpg" alt="242x200">
                        <h3>Turkey</h3>
                        <p>Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                </Row>
                       </Grid>
        )}}