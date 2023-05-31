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

    const [blogTitle, setBlogTitle] = useState("")
    const [blogBody, setBlogBody] = useState("")


    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mindeaseservidor-production.up.railway.app/directory/create", {
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

    const handleSumbitBlog = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mindeaseservidor-production.up.railway.app/blog/create", {
                title: blogTitle,
                body: blogBody
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
                        <div className='homepage_forms_container'>
                            <form onSubmit={handleSumbit} className="directory_homepage_container">
                                <p className="directory_homepage_title">Crear directorio.</p>
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

                            <form onSubmit={handleSumbitBlog} className="blog_homepage">
                                <p className="directory_homepage_title">Crear Blog.</p>
                                <div className="login_inputContainer">
                                    <span>Título del blog:</span>
                                    <input
                                        type="text"
                                        value={blogTitle}
                                        className='signupPage_input'
                                        onChange={(e) => {
                                            setBlogTitle(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="login_inputContainer">
                                    <span>Contenido del blog:</span>
                                    <textarea
                                        type="text"
                                        value={blogBody}
                                        className='signupPage_input'
                                        onChange={(e) => {
                                            setBlogBody(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="login_inputContainer">
                                    <button type='submit' className='login_button'>Crear blog.</button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default HomePage;
