<template>
    <b-nav vertical class="custom-sidebar">
        <b-nav-item :class="{ 'active': isActive('summary') }">
            <b-link :to="{ name: 'summary' }" class="linkStyle">Resumen</b-link>
        </b-nav-item>

        <b-nav-item :class="{ 'active': isActive('form') }">
            <b-link :to="{ name: 'form' }" class="linkStyle">Formulario</b-link>
        </b-nav-item>

        <b-nav-item :class="{ 'active': isActive('content') }">
            <b-link :to="{ name: 'content' }" class="linkStyle">Contenido</b-link>
        </b-nav-item>
    </b-nav>
</template>

<script>
export default {
    methods: {
        isActive(routes) {
            return routes.includes(this.$route.name);
        }
    }
}
</script>

<style>
.custom-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    background-color: #D51208;
    padding-top: 55px;
}

.linkStyle {
    color: #fff;
}

.custom-sidebar .active {
    background-color: #F74940;
}
</style>  