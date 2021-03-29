import axios from 'axios';
import { baseUrl } from "../.env";

export function getAllArticle() {
        
        return axios.get(baseUrl + 'article')
            .then((response) => (response.data))
            .catch((error) => console.log(error))
}