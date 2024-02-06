<template>
    <div>
        <h1>Registro de Vehículo</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label for="marca">Marca:</label>
                <input type="text" id="marca" v-model="marca" @blur="validarMarca">
                <div v-show="marcaError" style="color: red;">{{ marcaError }}</div>
            </div>
            <br />
            <div>
                <label for="modelo">Modelo:</label>
                <input type="text" id="modelo" v-model="modelo" @blur="validarModelo">
                <div v-show="modeloError" style="color: red;">{{ modeloError }}</div>
            </div>
            <br />
            <div>
                <label for="anioFabricacion">Año de Fabricación:</label>
                <input type="number" id="anioFabricacion" v-model="anioFabricacion" @blur="validarAnioFabricacion">
                <div v-show="anioFabricacionError" style="color: red;">{{ anioFabricacionError }}</div>
            </div>
            <br />
            <div>
                <label for="numeroSerie">Número de Serie:</label>
                <input type="text" id="numeroSerie" v-model="numeroSerie" @blur="validarNumeroSerie">
                <div v-show="numeroSerieError" style="color: red;">{{ numeroSerieError }}</div>
            </div>
            <br />
            <br />
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
import  ServiceVehicule  from '../services/ServiceVehicule.js';

export default {
    data() {
        return {
            marca: '',
            modelo: '',
            anioFabricacion: '',
            numeroSerie: '',
            marcaError: '',
            modeloError: '',
            anioFabricacionError: '',
            numeroSerieError: ''
        };
    },
    methods: {
        validarMarca() {
            const regex = /^[a-zA-Z0-9]+$/;
            this.marcaError = !regex.test(this.marca) ? 'La marca debe ser alfanumérica' : '';
        },
        validarModelo() {
            const regex = /^[a-zA-Z0-9]+$/;
            this.modeloError = !regex.test(this.modelo) ? 'El modelo debe ser alfanumérico' : '';
        },
        validarAnioFabricacion() {
            const anioActual = new Date().getFullYear();
            if (parseInt(this.anioFabricacion) > anioActual) {
                this.anioFabricacionError = 'El año de fabricación no puede ser mayor al actual';
            } else {
                this.anioFabricacionError = '';
            }
        },
        validarNumeroSerie() {
            const regex = /^[A-Z]{4}\d{3}-\d{2}[A-Z]{2}$/;
            if (!regex.test(this.numeroSerie)) {
                this.numeroSerieError = 'El número de serie debe tener el formato XXXX000-00XX';
            } else {
                this.numeroSerieError = '';
            }
        },
        validarFormulario() {
            this.validarMarca();
            this.validarModelo();
            this.validarAnioFabricacion();
            this.validarNumeroSerie();
        },
        async submitForm() {
            this.validarFormulario();

            if (this.marcaError || this.modeloError || this.anioFabricacionError || this.numeroSerieError) {
                return;
            }

            const vehicule = {
                brand: this.marca,
                model: this.modelo,
                year: this.anioFabricacion,
                serie: this.numeroSerie,
            };

            try {
                await ServiceVehicule.registrarVehiculo(vehicule);
                alert("Vehículo creado con éxito");
            } catch (error) {
                console.error("Error al enviar los datos:", error);
            }
        },
    }
};
</script>
