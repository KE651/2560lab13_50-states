<template>
<div>
     <state-summary v-bind:states="states"></state-summary>
    
    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail 
            v-bind:state="state"
            v-on:update-visited="updateVisited"> <!-- see method below-->
        </state-detail>
        </div>
    </div>
</div>
</template>
<!-- uses bootstrap classes, displays in grid -->

<script>
console.log('statelist.vue')
import StateDetail from './StateDetail.vue' // registered as child component below
import StateSummary from './StateSummary.vue'

export default  {
    components: {
        StateDetail,
        StateSummary
    },
    name: 'StateList',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then(states => {
                this.states = states
            }).catch(err => {
                alert('Sorry, unable to fetch list of states.')
                console.error(err)
            })
        },
        updateVisited(stateName, visited) {
            this.$stateService.setVisited(stateName, visited)
            .then( states => {
                this.fetchAllStates()
                //update the array after updating visited
            }).catch(err=>{
                alert('Sorry, unable to update this state.')
                console.error(err)
            })
        }
    } // end methods
    
}
</script>

<style scoped>
.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.state-container {
    margin: 1rem;
}
</style>
// to display in grid use flexiwrap
