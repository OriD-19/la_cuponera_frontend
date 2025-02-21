export async function useFetchOffer(idOffer) {
    try {
        const response = await fetch(
            `https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1//offers/${idOffer}`, {
                method: "GET",
                headers: authToken ? { "Authorization": `Bearer ${authToken}` } : {},
            }
        );

        if (!response.ok) {
            throw new Error("Error al cargar información de la oferta");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export default useFetchCoupon;
