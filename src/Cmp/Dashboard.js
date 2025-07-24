import React, { useState } from 'react';

const Dashboard = () => {
    const Ticket = [
        "Bus",
        "AC Bus ",
        // "Railway",
        // "Flite",
        // "hellicopter",
        // "Bike",
        // "ticket1",
        // "ticket2"
    ]

    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    const [bookTicket, setBookTicket] = useState([]);
    const [bookSeat, setBookSeat] = useState([]);

    const handleSubmit = (item) => {
        // localStorage.setItem("dataaa",setBookTicket((prev) => [...prev, item]))
        setBookTicket((prev) => [...prev, item])
        // setBookTicket((prev) => [...prev, item])
        // localStorage.setItem("itemInputBox", item);
    }
    localStorage.setItem("data", Ticket)
    console.log("data", localStorage.getItem("data"))
    console.log("bookTicket", bookTicket)

    const handleBook = (item) => {
        setBookSeat((prev) => [...prev, item])
    }
    return (
        <div>
            <div className='col-8 m-auto'>
                <div className='row m-3'>
                    {Ticket?.map((item) => (
                        <div className='col-3 m-3 tickect'>
                            <h5>book your ticket</h5>
                            <p>{item}</p>
                            {/* <button className='btn-primary btn mt-2'}>book Ticket</button> */}

                            {/* <!-- Button trigger modal --> */}
                            <button type="button" onClick={() => { handleSubmit(item) }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div className='row'>
                                                {count?.map((item) => (
                                                    <div className='col-2' onClick={() => { handleBook(item) }}>{item}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* here display book ticket list */}
                <div>
                    <h5>Display book ticket list</h5>
                    <div className='row m-3'>
                        {bookTicket?.map((item) => (
                            <div className='col-3 m-3 tickect'>
                                <p>book ticket {item}</p>
                            </div>
                        ))}

                    </div>
                    <div className='row m-3'>
                        {bookSeat?.map((item) => (
                            <div className='col-3 m-3 tickect'>
                                <p>book seat NO. {item}</p>
                            </div>
                        ))}

                    </div>
                </div>


            </div>




        </div>
    );
}

export default Dashboard;
