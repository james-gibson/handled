<template>
    <div>
        <div :class="$style.links">
            <router-link to="/vue-nest-cloud-function/" :class="$style.link">Main</router-link>
            <router-link to="/vue-nest-cloud-function/about" :class="$style.link">About</router-link>
            <router-link to="/vue-nest-cloud-function/contact" :class="$style.link">Contact</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style module>
body  {
    background-color: pink;

}
</style>
