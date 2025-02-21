const useFetchOfferDetails = async (idOffer) => {

    const authToken = localStorage.getItem("authToken");

    try {
        const response = await fetch(
            `https://ez7weiqisc.execute-api.us-east-1.amazonaws.com/v1/offers/${idOffer}`, {
                headers: {
                    "Authorization": "Bearer " + authToken
                }
            }
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

export default useFetchOfferDetails;