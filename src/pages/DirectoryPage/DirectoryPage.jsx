import { useEffect, useState } from 'react';

import './DirectoryPage.css';

function DirectoryPage() {

    const [directories, setDirectories] = useState([])

    const fetchDirectory = async () => {
        try {
            const response = await fetch('https://mindeaseservidor-production.up.railway.app/directory');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error', error);
        }
    };

    useEffect(() => {
        const getDirectories = async () => {
            const data = await fetchDirectory();
            setDirectories(data);
        };
        getDirectories();
    }, [])

    return (
        <div className="me_directoryPage">
            <div className="directoryPage">
                <div className="directoryPage_container">
                    <h1>Directorio de especialistas:</h1>
                    {directories.map((directory) => (
                        <div className="directory_container" key={directory._id}>
                            <p className="directory_title">{directory.title}</p>
                            <p className="directory_description">{directory.description}</p>
                            <p className="directory_services"><span>Servicios que se ofrecen:</span><br />{directory.services}</p>
                            <p className="directory_payment">
                                <span>Métodos de pago:</span> <br />
                                {directory.payment}</p>
                            <p className="directory_address">
                                <span>Dirección:</span> <br />
                                {directory.address}</p>
                            <p className="directory_phone">
                                <span>Teléfono: &nbsp;</span>
                                {directory.phone}</p>
                            <div className="directory_website">
                                <span>Website: &nbsp;</span>
                                {directory.website}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DirectoryPage