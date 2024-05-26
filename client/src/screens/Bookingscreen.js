import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';

    function Bookingscreen() {
        const { roomid, fromdate, todate } = useParams();
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [room, setRoom] = useState(null);
        const [totaldays, setTotalDays] = useState(null);
        const [totalAmount, setTotalAmount] = useState(null);

        useEffect(() => {
            if(!localStorage.getItem('currentUser')){
                window.location.reload='/login';
            }
            const fetchRoom = async () => {
                try {
                    setLoading(true);
                    const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data;
                    setRoom(data);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                    setLoading(false);
                }
            };

            fetchRoom();
        }, [roomid]);

        useEffect(() => {
            const calculateTotalDays = () => {
                const start = moment(fromdate, 'DD-MM-YYYY');
                const end = moment(todate, 'DD-MM-YYYY');
                const days = end.diff(start, 'days');
                setTotalDays(days);
            };

            if (fromdate && todate) {
                calculateTotalDays();
            }
        }, [fromdate, todate]);

        useEffect(() => {
            if (totaldays != null && room && room.rentperday != null) {
                const amount = (totaldays + 1) * room.rentperday;
                setTotalAmount(amount);
            }
        }, [totaldays, room]);

        async function onToken(token) {
            console.log(token);
            const bookingDetails = {
                room: room,
                userid: JSON.parse(localStorage.getItem('currentUser'))._id,
                fromdate,
                todate,
                totalAmount: totalAmount,
                totaldays,
                token
            };
            try {
                setLoading(true)
                const result = await axios.post('/api/bookings/bookroom', bookingDetails);
                setLoading(false)
                Swal.fire('Congratulations','Your Room Booked Successfully','success').then(result=>{
                    window.location.href='/profile'
                });
            } catch (error) {
                setLoading(false)
                Swal.fire('Oops','Something Went Wrong','error')
            }
        }
        return (
            <div className='m-5'>
                {loading ? (
                    <Loader />
                ) : room ? (
                    <div>
                        <div className="row justify-content-center mt-5 bs">
                            <div className="col-md-6">
                                <h1 style={{ textAlign: 'left' }}>{room.name}</h1>
                                <img src={room.imageurls[0]} className='bigimg' alt={room.name} />
                            </div>
                            <div className="col-md-6">
                                <div style={{ textAlign: 'center' }} >
                                    <h1>Booking Details</h1>
                                    <hr />
                                    <span className='a'>Name : </span>
                                    <span>{JSON.parse(localStorage.getItem('currentUser')).name}</span><br /><br />
                                    <span className='a'>Room ID : </span>
                                    <span>{room ? room._id : ''}</span><br /><br />
                                    <span className='a'>From Date : </span>
                                    <span>{fromdate}</span><br /><br />
                                    <span className='a'>To Date : </span>
                                    <span>{todate}</span><br /><br />
                                    <span className='a'>Max Count : </span>
                                    <span>{room.capacity}</span><br /><br />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <hr />
                                    <span className='a'>Total Days : </span>
                                    <span>{totaldays + 1}</span><br /><br />
                                    <span className='a'>Rent Per Day : </span>
                                    <span>{room.rentperday}</span><br /><br />
                                    <span className='a'>Total Amount : </span>
                                    <span>{totalAmount}</span><br /><br />
                                </div>
                                <div style={{ textAlign: 'right' }}>

                                    <StripeCheckout
                                        token={onToken}
                                        currency='USD'
                                        amount={totalAmount * 100}
                                        stripeKey="pk_test_51OvmokSCaD0LYlxJRpyYPVW0P2a8Vw58fEiskgXfvOXFQGirCti0jXOZZnLfMH0N0BvSMluw1bJabmKqADguFJnD00PJGGmC5t"
                                    ><button className='btn btn-primary'>Pay Now</button>
                                    </StripeCheckout>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Error />
                )}
            </div>
        );
    }

export default Bookingscreen;
