<template>
    <div class="overflow-auto">
        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <b-table id="my-table" :items="vehicules" :per-page="perPage" :current-page="currentPage" :fields="fields"
            :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"></b-table>
        <b-pagination v-model="currentPage" :total-rows="vehicules.length" :per-page="perPage"
            aria-controls="my-table"></b-pagination>
    </div>
</template>

<script>
import ServiceVehicule from "../services/ServiceVehicule.js";

export default {
    data() {
        return {
            perPage: 10,
            currentPage: 1,
            fields: [
                { key: "brand", sortable: true },
                { key: "model", sortable: true },
                { key: "year", sortable: true },
                { key: "serie", sortable: true },
            ],
            vehicules: [],
        };
    },
    mounted() {
        this.obtenerVehiculos();
    },
    methods: {
        async obtenerVehiculos() {
            try {
                const data = await ServiceVehicule.obtenerVehiuculos(
                    parseInt(this.currentPage),
                    parseInt(this.perPage)
                );
                console.log(data);
                this.vehicules = data.content;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>