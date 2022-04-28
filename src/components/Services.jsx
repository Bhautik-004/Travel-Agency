import React, { Component } from 'react';
import {Thumbnail,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import '../Styles/services.css'
export default class Home extends Component{
    render(){
        return( <div>
        <div className="content-wrapper">    
                <Image src="/assets/img/services.jpg" />
                <h2 className="heading">Our services</h2>              
                <h5 className="sub-heading">With us you’ll find a perfect destination among hundreds available.</h5>
                
            </div>
           <Grid>
            <Row className= "show-grid text-center">
                 <Col xs={12} sm={3} className="place">
                    <Thumbnail >
                    <i class="fas fa-plane-departure fa-7x"></i>
                        <h3>AIR TICKETS</h3>
                        <p> Joshi's tour provide service for booking plane Ticket for your trip.You can also book your return ticket from here. </p>
                        
                        <p>
                        
                        </p>
                    </Thumbnail>                   
                </Col>

                 <Col xs={12} sm={3} className="place">
                    <Thumbnail >
                    <i class="fas fa-train fa-7x"></i>
                        <h3>Train Ticket</h3>
                        <p> Joshi's tour provide service for booking Train Ticket for your trip.You can also book your return ticket from here.</p>
                        <p>
                        
                        </p>
                    </Thumbnail>                   
                </Col>

                 <Col xs={12} sm={3} className="place">
                    <Thumbnail >
                    <i class="fas fa-hotel fa-7x"></i>
                        <h3>HOTEL BOOKINGS</h3>
                        <p>Joshi's tour provide facility for hotel booking for any tours.You can book AC room's, Non AC rooms, Rooms for Couple whatever you want. 
                        </p>
                         <p>
                        
                        </p>
                    </Thumbnail>                   
                </Col>

                 <Col xs={12} sm={3} className="place">
                    <Thumbnail>
                        <i class="fas fa-sun fa-7x"></i>
                        <h3>SUMMER TOURS</h3>
                        <p> If you wish to go for Summer trip, Joshi's tour help you throught providing best package for best places. </p>
                        <p>
                       
                        </p>
                    </Thumbnail>                   
                </Col>

                   

                   
                </Row>
                   </Grid>
                 
                   </div>
            )}}