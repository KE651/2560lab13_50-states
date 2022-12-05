<template>
    <div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <p v-if="state.visited">You have visited this state!</p>
        <p v-else>You have not visited this state.  There's no time like the present!</p>

        <div id="map-container" v-if="dataReady">
            <!-- map is turned on when API data is available-->
            <l-map ref="map" v-on:ready="onMapReady" v-bind:zoom="state.zoom" v-bind:center="mapCenter">
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors">
                </l-tile-layer>
            </l-map> <!-- leaflet map -->
        </div>
    </div>
</template>
<!-- z-zoom, x,y relate to lon, lat. https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames -->


<script>
console.log('statemap.vue')

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer //leaflet
    },
    data() {
        return {
            state: {},
            dataReady: false,
            mapReady: false
            // these will be set to true when data fetched from API & map ready
        }
    },
    mounted() {
        this.state.name = this.$route.params.state
        console.log('StateMap', this.state.name)
        // /map/~~~ in route ~~~=this.$route.params.state
        this.fetchStateData()
    },
    methods: {
        onMapReady() {
            console.log('onMapReady')
            this.mapReady = true
            this.setMapView()
        },
        setMapView() {
            console.log('setMapView, dataReady, mapReady: ', this.dataReady, this.mapReady)
            if (this.dataReady && this.mapReady) {
                console.log('setMapView if; zoom=', this.state.zoom)
                this.$refs.map.leafletObject.setView(this.mapCenter, this.state.zoom)
            }
            //when data, map ready, show correct location in map
        },
        fetchStateData() {
            console.log('fetchStateData 1 ', this.state.name)
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state
                console.log('fetchStateData 2', state)
                this.dataReady = true
                this.setMapView()
                console.log(this.lat, this.lon)
            }).catch(err=>{
                if (err.response && err.response.status === 404) {
                    this.state.name = '?'
                // if 404 not found, not a state or misspelled
                }
                else { // error other than 404
                alert("Sorry, received an error when fetching this state's data.")
                console.error(err)
                }
            })
        } //end fetchStateData
    }, // end methods
    computed: {
        mapCenter() {
            return[this.state.lat, this.state.lon]
        }
    }
}
</script>

<style scoped>
#map-container {
    height: 30em;
}
</style>
