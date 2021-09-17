<template>
    <main-layout>
        <template slot="main-header">
            <main-header></main-header>
            <router-view></router-view>
        </template>
    </main-layout>
</template>

<script>
import { MainLayout } from "@/App/Common/Helpers/Layout";
import { MainHeader } from "@/App/Common/Helpers/Layout" 

export default {
    name: "Home",
    components: {
        MainLayout,
        MainHeader
    }
}
</script>