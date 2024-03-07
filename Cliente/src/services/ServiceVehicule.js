import axios from "axios";

const API_URL = "http://localhost:8080/api/vehiculos";

const registrarVehiculo = async (vehicule) => {
    try {
        const response = await axios.post(API_URL, vehicule, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


const obtenerVehiuculos = async (page, size) => {
    try {
        const response = await axios.post(API_URL + "page", {
            params: {
                page,
                size,
            },
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default {
    registrarVehiculo,
    obtenerVehiuculos,
};