import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function PasarelaPago() {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const { idCoupon } = useParams();

    const handleCardNumberChange = (e) => {
        const value = e.target.value;
        setCardNumber(value);
        if (value.length !== 16) {
            setErrorMessage("El número de tarjeta debe tener 16 dígitos.");
        } else {
            setErrorMessage("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idCoupon) {
            navigate(`/compra/${idCoupon}`);
        } else {
            console.error("idCoupon no encontrado.");
        }
    };

    return (
        <div>
            <h2>Formulario de Compra de cupón</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="num_tarjeta">Número de tarjeta</label>
                <br/>
                <input
                    id="num_tarjeta"
                    type="text"
                    pattern="[0-9]{16}"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                />
                <p className="error">{errorMessage}</p>

                <label htmlFor="nombre">Nombre del titular</label>
                <br/>
                <input
                    id="nombre"
                    type="text"
                    value={cardHolderName}
                    onChange={(e) => setCardHolderName(e.target.value)}
                    pattern="[^\d]*"
                    required
                />

                <div className="exp_cvv">
                    <div>
                        <label htmlFor="fecha_exp">Vence</label>
                        <br/>
                        <input
                            id="fecha_exp"
                            type="month"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV</label>
                        <br/>
                        <input
                            type="password"
                            id="cvv"
                            min="100"
                            max="999"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <br/>
                <button type="submit">Finalizar compra</button>
            </form>
        </div>
    );
}
