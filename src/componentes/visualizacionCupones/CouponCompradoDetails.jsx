import { useNavigate } from "react-router";

export const CouponCompradoDetails = ({offer, coupon, isPublic}) => {
    const navigate = useNavigate();
  return (
    <div className="relative bg-fondo p-4 rounded-lg shadow-md w-full h-auto mx-auto">
    <div className="container mx-auto p-4  bg-white rounded-lg shadow-lg max-w-2xl">
        <h2 className="text-3xl text-center text-primary font-extrabold mb-4">¡Gracias por tu compra! Estos son los detalles de tu cupón:</h2>
        <img src="https://blog.facialix.com/wp-content/uploads/2024/11/css-fundamentals-comprehensive-training-for-web-developers-curso-cupon-noviembre-jpg.webp" alt="de cada cupon" />
        <h3 className="text-2xl font-semibold text-resaltador mb-2 mt-2 text-center">ID del cupón {offer.id}</h3>
        <p className="text-lg">{coupon.title}</p>
        <p className="text-resaltador text-lg font-semibold mt-2">Válido hasta {new Date(offer.validUntil).toLocaleDateString()}</p>
        <p className="text-primary text-lg font-semibold capitalize text-center">¡Gracias por comprar con nosotros!</p>
        <button onClick={() => !isPublic ? navigate("/") : navigate(-1)} className="bg-primary py-2.5 w-full mt-4 rounded-lg text-white items-center text-center hover:bg-resaltador transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-96">Regresar</button>
    </div>
</div>
)
}
