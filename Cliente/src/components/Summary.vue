<script setup>
import Navbar from '../components/Navbar.vue'
import Breadcrumb from './Breadcrumb.vue';
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
    <div>
        <header>
            <Navbar />
        </header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <Sidebar />
                </div>
                <div class="col-9">
                    <Breadcrumb />
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>