<!-- each state is a separate component-->
<template>
<div class="state-info">
    <span class="state-name">{{state.name}}</span>
    <div>
        <input class="visit-state" type="checkbox" v-model="visited" 
               v-on:change="updateVisited">
        <!-- update state visited status when checkbox changes -->
    </div>
    <router-link v-bind:to="{ name: 'StateMap', params: {state: state.name} }">
        <img class="map-icon" src="@/assets/map_icon.png">
        <!-- link map icon to state map component -->
    </router-link>
</div>
</template>

<script>
// child component - if need to modify prop, then copy as data and modify that
// can emit msg to parent to notify of changes
console.log('statedetail.vue')
export default {
    name:'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object
        },
    data() {
        return {
            visited: this.state.visited // from state prop, checkbox in stateList
        }
    },
    methods: {
        updateVisited() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}
</script>

<style scoped>
.state-info {
    padding: 1rem;
    height: 6rem;
    width: 10rem;
    border: 2px lightgoldenrodyellow;
    border-radius: .3rem;
    background-color: darkgreen;
    color: white;
    font-size: x-large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.visit-state {
    margin: 1rem;
}

.map-icon {
    width: 2rem;
    height: 2rem;
}
</style>