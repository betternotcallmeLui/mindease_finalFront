import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './ProfilePage.css'

function ProfilePage() {

    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")

    const handleEditAccount = () => {
        const newEmail = prompt("Introduce el nuevo correo electrónico:");
        const newUsername = prompt("Introduce el nuevo nombre de usuario:");

        axios
            .put(`https://mindeasefinalback-production.up.railway.app/users/${userId}`, {
                email: newEmail,
                username: newUsername,
            })
            .then((response) => {
                const updatedUser = response.data.user;
                localStorage.setItem("email", updatedUser.email);
                localStorage.setItem("username", updatedUser.username);
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="me_profilePage">
            <div className="profilePage">
                <div className="profilePage_container">
                    <div className="profileData_container">
                        <p className='profilePage_title'>Perfil</p>
                        <p className="profilePage_username">
                            <span>Nombre de usuario: </span>
                            {username}
                        </p>
                    </div>
                    <div className="profileButtons_container">
                        <button
                            className="signupPage_button profileButton"
                            onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("username");
                                localStorage.removeItem("userId");
                                navigate("/");
                                navigate(0)
                            }}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage