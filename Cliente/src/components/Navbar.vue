<template>
    <div>
        <b-navbar class="custom-navbar">
            <b-navbar-brand href="#" class="custom-navbar-brand">
                <b-link :to="{ name: 'home' }" class="iconStyle">
                    <i class="bi bi-house"></i>
                </b-link>
                Examen Unidad 1
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<style scoped>
.custom-navbar {
    background-color: #D51208;
}
.iconStyle {
    color: #fff;
    margin-right: 100px;
}

.custom-navbar-brand {
    color: #fff;
    margin-left: 16%;
}
</style>
