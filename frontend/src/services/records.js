import axios from 'axios'
import BASEURL from './config'

export const getRecords = async () => {
    const response = await axios.get(
        BASEURL + 'search?lookfor=sibelius',
    )
    return response
}