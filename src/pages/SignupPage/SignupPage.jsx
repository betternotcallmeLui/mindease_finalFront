import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

import axios from "axios";

import './SignupPage.css';

function SignupPage({
    isLoggedIn,
    setIsLoggedIn,
    modal,
    setModal,
    refOne,
    focusOne,
}) {
    const [dropDown, setDropDown] = useState(false);
    const [login, setLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notify, setNotify] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, []);

    const registerHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setNotify("Password do not match");
        }

        try {
            const res = await axios.post("https://mindeaseservidor-production.up.railway.app/register", {
                username: username,
                password: password,
            });

            if (res.data.success === true) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("username", res.data.user.username);
                localStorage.setItem("userId", res.data.user._id);

                navigate("/community");
            }
        } catch (error) {
            setNotify(error.response.data.message);
        }
    };

    return (
        <div className="me_signupPage">
            <div className="signupPage">
                <div className="signupPage_container">
                    <div className="signupPage_container_left">
                        <p className="signupPage_left_title">MindEase</p>
                        <div className="signupPage_left_mini">
                            <p className="signupPage_left_mini_title">
                                MindBot
                            </p>
                            <p className="signupPage_left_mini_desc">
                                ¡MindBot que será tu amigo de confianza! MindEase te ofrece un compañero virtual que está aquí para escucharte y responder como si fuese un amigo. ¿Necesitas desahogarte después de un día difícil? ¿Quieres compartir tus alegrías y logros? Nuestro bot está preparado para estar a tu lado en todas las circunstancias.
                            </p>
                        </div>
                        <div className="signupPage_left_mini">
                            <p className="signupPage_left_mini_title">
                                Directorio
                            </p>
                            <p className="signupPage_left_mini_desc">
                                ¡Encuentra el especialista en salud mental adecuado para ti en nuestro directorio de especialistas! Te proporcionamos información detallada sobre una amplia variedad de lugares de atención, desde clínicas presenciales hasta servicios gratuitos y públicos en diferentes áreas de México.
                            </p>
                        </div>
                        <div className="signupPage_left_mini">
                            <p className="signupPage_left_mini_title">
                                MindCommunity
                            </p>
                            <p className="signupPage_left_mini_desc">
                                ¡Únete a nuestra comunidad en MindEase y descubre un espacio donde encontrarás apoyo, conexión y amistad en México! Aquí podrás interactuar con personas que han experimentado o están pasando por situaciones similares a las tuyas. Nuestra plataforma te brinda la oportunidad de compartir tus experiencias, intereses y preocupaciones, y al mismo tiempo, estar allí para otros que necesitan tu apoyo.
                            </p>
                        </div>
                    </div>
                    <div className="signupPage_container_right">
                        <p className="signupPage_title">Crea tu cuenta de MindEase</p>
                        <div className="signupPage_form">
                            <form onSubmit={registerHandler}>
                                <div className="signupPage_inputContainer">
                                    <span className="signupPage_inputTitle">Nombre de usuario:</span>
                                    <input
                                        type="text"
                                        value={username}
                                        className="signupPage_input"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                <div className="signupPage_inputContainer">
                                    <span className="signupPage_inputTitle">Contraseña:</span>
                                    <input
                                        type="password"
                                        value={password}
                                        required
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setNotify("");
                                        }}
                                        className="signupPage_input"
                                    />
                                </div>

                                <div className="signupPage_inputContainer">
                                    <span className="signupPage_inputTitle">Repetir contraseña:</span>
                                    <input
                                        required
                                        type="password"
                                        value={confirmPassword}
                                        className="signupPage_input"
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                            setNotify("");
                                        }}
                                    />
                                </div>

                                <div className="signupPage_inputContainer">
                                    <button className="signupPage_button">
                                        Crear Cuenta
                                    </button>
                                </div>
                            </form>
                            {notify && (<div>{notify}</div>)}

                            <div className="signupPage_finalLinks">
                                <p>¿Ya tienes una cuenta?</p>
                                <Link to="/login" className="linkfinal">Inicia con ella.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;