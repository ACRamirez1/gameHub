import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e761246d4d9d48838fc57aabb1c814b7'
    }
})

