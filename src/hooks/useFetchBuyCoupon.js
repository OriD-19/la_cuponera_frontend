export async function useFetchBuyCoupon(couponId) {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hdGFseTEucEBob3RtYWlsLmNvbSIsImV4cGlyZXMiOjE3NDAxMjc4ODEsInJvbGUiOiJjbGllbnQiLCJ1c2VybmFtZSI6Im5hdGFseTEifQ.BMUHgMCZar1qE_e_66nfSGRJZmX_BuPxZdmmUgqwnYI";
        const response = await fetch(`/api/coupons/${couponId}/buy`, {
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
