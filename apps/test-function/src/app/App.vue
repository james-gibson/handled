<template>
    <div>
        <div :class="$style.links">
            <router-link to="/handled/" :class="$style.link">Main</router-link>
            <router-link to="/handled/about" :class="$style.link">About</router-link>
            <router-link to="/handled/contact" :class="$style.link">Contact</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style module>
body  {
    background-color: pink;

}
</style>
