export async function useFetchBuyCoupon(couponId) {
    try {
        const token = localStorage.getItem("authToken");
        
        const response = await fetch(`https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/coupons/${couponId}/buy`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

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
