import React, { useState } from 'react'
import ReclamarCuponDetalles from './ReclamarCuponDetalles'

const ReclamarCupones = () => {

    const [codigoCupon, setCodigoCupon] = useState("");
    const [error, setError] = useState("");
    const [offerData, setOfferData] = useState({});

    const handleChangeCodigoCupon = (e) => {
        setCodigoCupon(e.target.value);
    }

    const handleConsultarCupon = () => {
        // fetch data from the API

        setError("");
        const authToken = localStorage.getItem('authToken'); // get the employee token from localStorage

        fetch(`https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/${codigoCupon}`, {
            headers: {
                "Authorization": "Bearer " + authToken
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Ingresa un número de cupón válido");
            }
            return res.json();
        })
        .then(data => setOfferData(data))
        .catch((err) => {
            setError(err.message);
        })
    }

    return (
        <div className="bg-base h-full">

            <div>
                <div className="flex justify-center align-items-center lg:p-8 md:p-6 p-4 bg-base">
                    <h1 className="lg:text-3xl md:text-2xl text-xl text-resaltador">
                        Canjear Cupones
                    </h1>
                </div>

                <div className="flex justify-center items-center lg:flex-row flex-col bg-fondo p-12 my-24 lg:mx-24 md:mx-12 mx-6 lg:gap-x-10 lg:gap-y-0 gap-y-10">
                    <p className="text-primary text-xl w-48 text-center">Ingresar Código</p>
                    {error.trim() !== "" && <p className="text-red-600 text-xl">{error}</p>}
                    <input type="text" className="w-full bg-white border-primary border-4 h-12 text-xl p-4" onChange={handleChangeCodigoCupon} value={codigoCupon}/>
                    <div>
                        <button className="hover:cursor-pointer hidden lg:block" onClick={handleConsultarCupon}>
                            <img src="../../../public/verified.svg" alt="Verified Icon" />
                        </button>
                        <button className="bg-primary text-white hover:cursor-pointer block lg:hidden p-6 text-xl" onClick={handleConsultarCupon}>
                            Consultar
                        </button>
                    </div>
                </div>

                {/* Detalles del cupon consultado */}

                {offerData.offer && <ReclamarCuponDetalles offer={offerData.offer} enterprise={offerData.enterprise} client={offerData.client}/>}

            </div>

        </div>
    )
}

export default ReclamarCupones