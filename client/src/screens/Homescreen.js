import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Room from '../components/Room';
import Loader from '../components/Loader';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function Homescreen() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [duplicaterooms, setDuplicateRooms] = useState([]);
    const [fromdate, setFromDate] = useState();
    const [todate, setToDate] = useState();
    const [searchKey, setSearchKey] = useState('');
    const [type, setType] = useState('All');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                setLoading(true);
                const data = (await axios.get('/api/rooms/getallrooms')).data;
                setRooms(data);
                setDuplicateRooms(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching rooms:', error);
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    function filterByDate(dates) {
        if (!dates || !dates[0] || !dates[1]) {
            return;
        }

        const fromDateFormatted = dates[0].format('DD-MM-YYYY');
        const toDateFormatted = dates[1].format('DD-MM-YYYY');
        setFromDate(fromDateFormatted);
        setToDate(toDateFormatted);

        const tempRooms = duplicaterooms.filter(room => {
            for (const booking of room.currentbookings) {
                if (
                    moment(fromDateFormatted, 'DD-MM-YYYY').isBetween(booking.fromdate, booking.todate, null, '[]') ||
                    moment(toDateFormatted, 'DD-MM-YYYY').isBetween(booking.fromdate, booking.todate, null, '[]')
                ) {
                    return false;
                }
            }
            return true;
        });

        setRooms(tempRooms);
    }

    function filterBySearch() {
        const tempRooms = duplicaterooms.filter(room =>
            room.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        setRooms(tempRooms);
    }

    function filterByType(event) {
        const selectedType = event.target.value;
        setType(selectedType);

        const filteredRooms = duplicaterooms.filter(room => {
            if (selectedType === 'All') {
                return true;
            } else {
                return room.type === selectedType;
            }
        });

        setRooms(filteredRooms);
    }

    return (
        <div className='container'>
            <div className="row mt-5 cont">
                <div className="col-md-3">
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} className='range-picker' />
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        value={searchKey}
                        onChange={e => setSearchKey(e.target.value)}
                        onKeyUp={filterBySearch}
                        className='form-control'
                        placeholder='Search Rooms'
                    />
                </div>
                <div className="col-md-3 cont-2">
                    <select value={type} onChange={filterByType} className='sel-1'>
                        <option value="All">All</option>
                        <option value="Delux">Delux</option>
                        <option value="Non Delux">Non Delux</option>
                    </select>
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                {loading ? (
                    <Loader />
                ) : (
                    rooms.map(room => (
                        <div className="col-md-9 mt-3" key={room.id}>
                            <Room room={room} fromdate={fromdate} todate={todate} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Homescreen;
