import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const Ticket = ["Bus", "AC Bus"];
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const [selectedTicket, setSelectedTicket] = useState(null);
    const [tempSeats, setTempSeats] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [bookedSeats, setBookedSeats] = useState({});

    useEffect(() => {
        const stored = localStorage.getItem("bookedSeats");
        if (stored) {
            setBookedSeats(JSON.parse(stored));
        } else {
            const initial = {};
            Ticket.forEach(t => initial[t] = []);
            setBookedSeats(initial);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("bookedSeats", JSON.stringify(bookedSeats));
    }, [bookedSeats]);

    const handleOpenModal = (ticket) => {
        setSelectedTicket(ticket);
        setTempSeats([]);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTicket(null);
        setTempSeats([]);
    };

    const handleSeatSelect = (seat) => {
        const alreadyBooked = bookedSeats[selectedTicket]?.includes(seat);
        if (alreadyBooked) return;

        if (!tempSeats.includes(seat)) {
            setTempSeats([...tempSeats, seat]);
        } else {
            setTempSeats(tempSeats.filter(s => s !== seat));
        }
    };

    const handleSubmit = () => {
        if (tempSeats.length > 0 && selectedTicket) {
            const updated = {
                ...bookedSeats,
                [selectedTicket]: [
                    ...(bookedSeats[selectedTicket] || []),
                    ...tempSeats,
                ],
            };
            setBookedSeats(updated);
        }
        handleCloseModal();
    };

    return (
        <div className='container'>
            <h3 className='mt-4'>Available Tickets</h3>
            <div className='row mt-3'>
                {Ticket.map((item, index) => (
                    <div className='col-4 mb-4' key={index}>
                        <div className='border p-3'>
                            <h5>{item}</h5>
                            <button
                                className='btn btn-primary mt-2'
                                onClick={() => handleOpenModal(item)}
                            >
                                Book {item}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <h4 className='mt-5'>Booked Seats</h4>
            <div className='row'>
                {Ticket.map((ticket, index) => (
                    bookedSeats[ticket]?.length > 0 && (
                        <div className='col-4 mb-4' key={index}>
                            <div className='border p-3'>
                                <p><strong>Ticket Type:</strong> {ticket}</p>
                                <p><strong>Seats:</strong> {bookedSeats[ticket].sort((a, b) => a - b).join(", ")}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Modal */}
            {showModal && selectedTicket && (
                <div className="modal d-block bg-dark bg-opacity-75" tabIndex="-1">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Select seats for {selectedTicket}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className='row'>
                                    {count.map((seat) => {
                                        const alreadyBooked = bookedSeats[selectedTicket]?.includes(seat);
                                        const isSelected = tempSeats.includes(seat);

                                        return (
                                            <div
                                                key={seat}
                                                className={`col-2 m-1 p-2 text-center border rounded 
                                                    ${alreadyBooked ? 'bg-danger text-white' :
                                                        isSelected ? 'bg-success text-white' : ''}`}
                                                style={{ cursor: alreadyBooked ? 'not-allowed' : 'pointer' }}
                                                onClick={() => handleSeatSelect(seat)}
                                            >
                                                {seat}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                                <button className="btn btn-success" onClick={handleSubmit}>Confirm Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
