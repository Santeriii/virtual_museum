import axios from 'axios'
import BASEURL from './config'

export const getRecords = async searchTerm => {
    const response = await axios.get(`${BASEURL}search?lookfor=${searchTerm}`)
    return response
}
