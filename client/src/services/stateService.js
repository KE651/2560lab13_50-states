import axios from 'axios'
export default {
    getAllStates() {
        console.log('getAllStates')
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        console.log("stateService.js, setVisited for ", stateName, visited)
        return axios.patch(`/api/state/${stateName}`, { visited: visited })
        .then(response => {
            return response.data
        })
    },
    getOneState(stateName) {
        console.log('getOneState ', stateName)
        return axios.get(`/api/state/${stateName}`).then(response => {
            return response.data
        })
    }
}
// calls axios to get/prepare JSON data from the routes that are defined
// URL api/states/stateName is not defined - where does this happen? 