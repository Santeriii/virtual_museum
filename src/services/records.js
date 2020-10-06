import axios from 'axios'
import BASEURL from './config'

export const getRecords = async (tags) => {
    const response = await axios.get(
        BASEURL + '/api/events/fin/10/' + tags,
    )
    return response
}