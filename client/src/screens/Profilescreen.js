import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabs } from 'antd';
import Loader from '../components/Loader';
import Error from '../components/Error';
import swal from 'sweetalert2'
import { Divider, Flex, Tag } from 'antd';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Profile',
        children: <MyProfile />,
    },
    {
        key: '2',
        label: 'Bookings',
        children: <MyBooking />,
    },
];

const user = JSON.parse(localStorage.getItem('currentUser'));

function Profilescreen() {
    useEffect(() => {
        if (!user) {
            window.location.href = '/login';
        }
    }, [])

    return (
        <div className='tabs'>
            <Tabs defaultActiveKey="1" style={{ marginLeft: '20px' }} onChange={onChange}>
                {items.map(item => (
                    <TabPane tab={item.label} key={item.key}>
                        {item.children}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
}

export function MyProfile() {
    return (
        <div className='profile-container'>
            <h1 className='mt-4'><u>My Profile</u></h1>
            <hr />
            <div style={{ display: ' inline', marginRight: 'auto' }}>
                <span className='a2'><b>Name :</b> </span>
                <span className='a3'>{user.name}</span><br />
                <span className='a2'><b>Email :</b></span>
                <span className='a3'>{user.email}</span><br />
                <span className='a2'><b>isAdmin : </b></span>
                <span className='a3'>{user.isAdmin ? 'YES' : 'NO'}</span><br />
            </div>
        </div>
    )
}

export function MyBooking() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.post('api/bookings/getbookingbyuserid', { userid: user._id });
                console.log(response.data);
                setbooking(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    const [booking, setbooking] = useState([]);

    async function cancelBooking(bookingid, roomid) {
        try {
            setLoading(true);
            const result = (await axios.post('/api/bookings/cancelbooking', { bookingid, roomid })).data;
            console.log(result);
            setLoading(false);
            swal.fire('Congrats', 'Your Booking Has Been Cancelled', 'success').then(result => {
                window.location.reload()
            })
        } catch (error) {
            console.log(error);
            setLoading(false)
            swal.fire("Oops...", "Something went wrong!", "error")
        }
    }
    return (
        <div>
            <div className="row" style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
                <div className="col-md-6">
                    {loading && (<Loader />)}
                    {booking && (booking.map(booking => {
                        return <div className='bs '>
                            <h1><u>{booking.room}</u></h1><br />
                            <span className='a2'>BookingId : </span>
                            <span className="a3">{booking._id}</span><br />
                            <span className='a2'>TransactionId : </span>
                            <span className="a3">{booking.transactionid}</span><br />
                            <span className='a2'>Check In Date : </span>
                            <span className="a3">{booking.fromdate}</span><br />
                            <span className='a2'>Check Out Date: </span>
                            <span className="a3">{booking.todate}</span><br />
                            <span className='a2'>Total Amount: </span>
                            <span className="a3">{booking.totalAmount}</span><br />
                            <span className='a2'>Status : </span>
                            <span className="a3">{booking.status == 'Cancelled' ? (<Tag color="red" style={{ marginBottom: '25px', padding: '5px' }}>Cancelled</Tag>) : (<Tag color="green" style={{ marginBottom: '25px', padding: '5px' }}>Confirmed</Tag>)}</span><br />

                            {booking.status !== 'Cancelled' && (
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <button className='btn btn-primary' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>Cancel Button</button>
                                </div>
                            )}
                        </div>
                    }))}
                </div>
            </div>
        </div>
    );
}

export default Profilescreen;
