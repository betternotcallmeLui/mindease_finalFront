import { useState } from 'react';
import axios from 'axios';

import './HomePage.css';

function HomePage() {

    const [directoryTitle, setDirectoryTitle] = useState("");
    const [directoryBody, setdirectoryBody] = useState("");
    const [directoryServices, setdirectoryServices] = useState("");
    const [directoryPayment, setdirectoryPayment] = useState("");
    const [directoryAddress, setdirectoryAddress] = useState("");
    const [directoryPhone, setdirectoryPhone] = useState("");
    const [directoryWebsite, setdirectoryWebsite] = useState("");


    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/directory/create", {
                title: directoryTitle,
                description: directoryBody,
                services: directoryServices,
                payment: directoryPayment,
                address: directoryAddress,
                phone: directoryPhone,
                website: directoryWebsite
            })

            
        } catch (error) {
            return console.log(error.message);
        }
    }

    const username = localStorage.getItem('username');

    return (
        <main className="homePage_main">
            <div className="homePage">
                <div className="homePage_container">
                    {username === "admin123" && (
                        <form onSubmit={handleSumbit}>
                            <div className="login_inputContainer">
                                <span>Nombre del lugar</span>
                                <input
                                    type="text"
                                    value={directoryTitle}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setDirectoryTitle(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Descripción del lugar:</span>
                                <input
                                    type="text"
                                    value={directoryBody}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryBody(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Servicios que ofrece:</span>
                                <input
                                    type="text"
                                    value={directoryServices}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryServices(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Métodos de pago:</span>
                                <input
                                    type="text"
                                    value={directoryPayment}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryPayment(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Dirección del lugar:</span>
                                <input
                                    type="text"
                                    value={directoryAddress}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryAddress(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Teléfono del lugar:</span>
                                <input
                                    type="text"
                                    value={directoryPhone}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryPhone(e.target.value);
                                    }}
                                />
                            </div>

                            <div className="login_inputContainer">
                                <span>Website del lugar: </span>
                                <input
                                    type="text"
                                    value={directoryWebsite}
                                    className="signupPage_input"
                                    onChange={(e) => {
                                        setdirectoryWebsite(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="login_inputContainer">
                                <button type='submit' className="login_button">
                                    Crear Directorio
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}

export default HomePage;
