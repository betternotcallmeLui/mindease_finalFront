import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { AiOutlineArrowRight } from 'react-icons/ai'

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

    const navigate = useNavigate();

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mindeasefinalback-production.up.railway.app/directory/create", {
                title: directoryTitle,
                description: directoryBody,
                services: directoryServices,
                payment: directoryPayment,
                address: directoryAddress,
                phone: directoryPhone,
                website: directoryWebsite
            })

            navigate("/directory")

        } catch (error) {
            return console.log(error.message);
        }
    }

    const handleSumbitBlog = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://mindeasefinalback-production.up.railway.app/blog/create", {
                title: blogTitle,
                body: blogBody
            })
        } catch (error) {
            return console.log(error.message);
        }
    }

    const username = localStorage.getItem('username');

    return (
        <>
            <main className="homePage_main">
                <div className="homePage">
                    <div className="homePage_container">
                        {username === "admin123" ? (
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
                                        <textarea
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
                        ) :
                            <>
                                <div className="homePage_container_pretty">
                                    <div className="homePage_container_top">
                                        <div className="homePage_container_topLeft">
                                            <p className="homePage_left_title">MindEase</p>
                                            <p className="homePage_left_subtitle">
                                                Toma el primer paso, y empieza a sentirte mejor.
                                            </p>
                                            <Link to="/signup" className='createacc_homepage'>
                                                <span>Crea una cuenta ya</span>
                                                <AiOutlineArrowRight />
                                            </Link>
                                        </div>
                                        <div className="homePage_container_topRight">
                                            <Link to="/community" className='container_top_right'>
                                                <p className='title_top_right'>MindCommunity</p>
                                                <p className='description_top_right'>Nuestra plataforma te brinda la oportunidad de compartir tus experiencias, intereses y preocupaciones, y al mismo tiempo, estar allí para otros que necesitan tu apoyo.</p>
                                            </Link>
                                            <Link to="/directory" className='container_top_right'>
                                                <p className='title_top_right'>Directorio</p>
                                                <p className='description_top_right'>Te proporcionamos información detallada sobre una amplia variedad de lugares de atención, desde clínicas presenciales hasta servicios gratuitos y públicos en diferentes áreas de México.</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="custom-shape-divider-bottom-1685561057">
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                                    </svg>
                                </div>
                            </>
                        }
                    </div>
                </div>

            </main>

        </>
    );
}

export default HomePage;
