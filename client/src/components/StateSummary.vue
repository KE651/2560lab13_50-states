<template>
    <div v-if="states.length > 0">
        <h3>You have visited {{ totalVisited }} {{ units }}</h3>
        <p id="all-visited-message" v-if="areAllVisited">You have visited everywhere!</p>
    </div>
</template>

<script>
console.log('statesummary.vue')
// determine how many states have been visited, and if all have been visited
export default {
    name: 'StateSummary',
    props: {
        states: Array },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if (state.visited) {
                    visitedCount++  }
            }) // end forEach
            return visitedCount
        }, // end totalVisited
        areAllVisited() {
            return this.totalVisited === this.states.length  },
        units() {
            if (this.totalVisited === 1) {
                return 'state'
            } else {
                return 'states'
            }
        } // end units
    } // end computed
} // end export
</script>
<style scoped>
#all-visited-message {
    color: purple;
    font-weight: 600; }
</style>