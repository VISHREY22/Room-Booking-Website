import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Room({ room, fromdate, todate }) {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    const captions = [
        "Luxury awaits in the Premium King Room, offering opulent comfort and modern amenities.Enjoy spacious accommodations, a king - size bed, and exquisite views.Indulge in a lavish stay that exceeds expectations.",
        "Experience unparalleled luxury in the Premium King Room, boasting lavish furnishings and sophisticated design.Relax in style with a spacious layout, deluxe amenities, and breathtaking views.Elevate your stay with unparalleled comfort and indulgence.",
        "Indulge in opulence with the Premium King Room, offering unparalleled comfort and style.Enjoy exquisite furnishings, modern amenities, and stunning city views.Experience luxury redefined in every aspect of your stay.",

    ];

    return (
        <div className='row bs'>
            <div className="col-md-4 abc">
                <img src={room.imageurls[0]} className='smallimg' />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1><br />
                <span className='a'>Max Count : </span>
                <span>{room.capacity}</span><br /><br />
                <span className='a'>Phone Number : </span>
                <span>{room.phonenumber}</span><br /><br />
                <span className='a'>Type : </span>
                <span>{room.type}</span><br /><br />

                <div style={{ float: 'right' }}>

                    {(fromdate && todate) && (
                        <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                            <button className='btn btn-primary' >Book Now</button>
                        </Link>
                    )}
                    <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='model-title'>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} >
                        {room.imageurls.map((url, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={url} className='d-block w-100 bigimg' />
                                <Carousel.Caption>
                                    <p className='b'>{captions[idx]}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <br />
                    <p>Check In : Allowed Between 5:00 AM To 9:00 PM</p>
                    <p>Room Size :{room.size}</p>
                    {Array.isArray(room.services) && (
                        <p>Services Provided: {room.services.join(', ')}</p>
                    )}

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Room;
