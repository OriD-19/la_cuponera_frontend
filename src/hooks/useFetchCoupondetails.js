export async function useFetchCoupon(idCoupon) {
    try {
        const response = await fetch(
            `https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons/${idCoupon}`
        );

        if (!response.ok) {
            throw new Error("Error al cargar información del cupón");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default useFetchCoupon;
