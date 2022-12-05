<template>
<!-- footer template contains links for page and credits for icons -->
<div class="footer">
    <div class="m-2">
        <span class="p-3">
            <router-link to="/">Home</router-link>
        </span>
        <span><a>&nbsp;&nbsp;</a></span>
        <span class="p-3">
            <router-link to="/about">About this site</router-link>
        </span>
    </div>
<!-- to: attribute must match path attribute in router config -->
    <div class="credits">
    <p class="text-right p-2">Header image by
        <a target="_blank" href="https://unsplash.com/photos/1lfI7wkGWZ4">@nasa on Unsplash</a>
    </p> 
    <p><a target="_blank" href="https://icons8.com/icon/114417/map-marker">Map icon</a> by
    <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
</div>
</template>

<script>
console.log('pagefooter.vue')
export default {
    name: 'PageFooter'
}
</script>
<style scoped>
</style>
