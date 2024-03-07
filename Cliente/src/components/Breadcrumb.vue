<template>
    <nav aria-label="breadcrumb" class="custom-breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" :class="{ 'active': isActive('summary') }">
                <b-link :to="{ name: 'summary' }" :style="{ color: isActive('summary') ? 'blue' : 'grey' }">Resumen</b-link>
            </li>
            <li class="breadcrumb-item" :class="{ 'active': isActive('form') }">
                <b-link :to="{ name: 'form' }" :style="{ color: isActive('form') ? 'blue' : 'grey' }">Formulario</b-link>
            </li>
            <li class="breadcrumb-item" :class="{ 'active': isActive('content') }">
                <b-link :to="{ name: 'content' }" :style="{ color: isActive('content') ? 'blue' : 'grey' }">Contenido</b-link>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    methods: {
        isActive(routeName) {
            return this.$route.name === routeName;
        }
    }
}
</script>
<style>

.custom-breadcrumb .breadcrumb-item.active {
    font-weight: bold; 
}

</style>