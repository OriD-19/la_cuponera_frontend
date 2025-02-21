export async function useFetchBuyCoupon(idCoupon) {
    try {
        const response = await fetch(`/v1/coupons/${idCoupon}/buy`);
        if (!response.ok) {
            throw new Error("Error al comprar cupón");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default useFetchBuyCoupon;