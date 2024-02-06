<template>
    <section class="hero">
        <div class="hero-image">
            <img src="../images/nata.jpg" alt="Imagen de inicio">
        </div>
        <h1>Examen Unidad 1</h1>
        <h2>Bienvenido al examen de desarrollo web profesional</h2>
        <b-button variant="warning" class="buttonIngresar" @click="redirigir">Ingresar</b-button>
    </section>
</template>

<script>
export default {
    methods: {
        redirigir() {
            this.$router.push('/summary');
        }
    }
}
</script>

<style scoped>
.hero {
    text-align: center;
    padding: 50px;
}

.hero-image img {
    width: 25%;
    height: 10%;
    display: block;
    margin: 0 auto;
}

h1 {
    font-size: 36px;
    margin-top: 20px;
}

.buttonIngresar {
    font-size: 20px;
    color: #fff;
    margin-top: 25px;
}
</style>