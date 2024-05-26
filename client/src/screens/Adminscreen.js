import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Adminscreen() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.isAdmin) {
            setIsAdmin(true);
        } else {
            window.location.href = '/home';
        }
    }, []);

    if (!isAdmin) {
        return null;
    }

    const items = [
        {
            key: '1',
            label: 'Bookings',
            content: <Booking_Admin />,
        },
        {
            key: '2',
            label: 'Rooms',
            content: <Rooms_Admin />,
        },
        {
            key: '3',
            label: 'Add Rooms',
            content: <Add_Room_Admin />,
        },
        {
            key: '4',
            label: 'Users',
            content: <Users_Admin />,
        },
    ];

    return (
        <div className='mt-3 ml-3 bs'>
            <h1 className='a2' style={{ textAlign: 'center' }}><b>Admin Panel</b></h1>
            <Tabs defaultActiveKey="1">
                {items.map(item => (
                    <TabPane tab={item.label} key={item.key}>
                        {item.content}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    );
}

function Booking_Admin() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('/api/bookings/getallbookings');
                setBookings(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className='row'>
            <div className="col-md-10 mx-auto">
                <h1 className="text-center">Bookings</h1>
                {loading && <Loader />}
                <table className='table table-striped text-center table mx-auto'>
                    <thead className='bs table-striped'>
                        <tr>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr key={booking._id}>
                                <td>{booking._id}</td>
                                <td>{booking.userid}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Rooms_Admin() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('/api/rooms/getallrooms');
                setRooms(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='row'>
            <div className="col-md-10 mx-auto">
                <h1 className="text-center">Rooms</h1>
                {loading && <Loader />}
                <table className='table table-striped text-center table mx-auto'>
                    <thead className='bs table-striped'>
                        <tr>
                            <th>Room ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Rent Per Day</th>
                            <th>Max Count</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.length && (rooms.map(room => {
                            return <tr key={room._id}>
                                <td>{room.name}</td>
                                <td>{room.userid}</td>
                                <td>{room.type}</td>
                                <td>{room.rentperday}</td>
                                <td>{room.capacity}</td>
                                <td>{room.phonenumber}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Users_Admin() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('/api/users/getallusers');
                setUsers(data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='row '>
            <div className="col-md-12">
                <h1>Users</h1>
                {loading && <Loader />}
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Is Admin?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? "YES" : "NO"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function Add_Room_Admin() {
    const [name, setName] = useState();
    const [rentPerDay, setRentPerDay] = useState();
    const [maxCount, setMaxCount] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [type, setType] = useState();
    const [imageUrl1, setImageUrl1] = useState();
    const [imageUrl2, setImageUrl2] = useState();
    const [imageUrl3, setImageUrl3] = useState();

    const handleAddRoom = () => {
        const newroom = {}
    };

    return (
        <div className='row'>
            <div className="col-md-5">
                <input type="text" className='form-control' placeholder='Room Name' value={name} onChange={(e) => setName(e.target.value)}/><br />
                <input type="text" className='form-control' placeholder='Rent Per Day' value={rentPerDay} onChange={(e) => setRentPerDay(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Max Count' value={maxCount} onChange={(e) => setMaxCount(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
            </div>
            <div className="col-md-5">
                <input type="text" className='form-control' placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Image Url 1' value={imageUrl1} onChange={(e) => setImageUrl1(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Image Url 2' value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} /><br />
                <input type="text" className='form-control' placeholder='Image Url 3' value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} /><br />
                <br />
                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' onClick={handleAddRoom}>Add Room</button>
                </div>
            </div>
        </div>
    );
}
export default Adminscreen;