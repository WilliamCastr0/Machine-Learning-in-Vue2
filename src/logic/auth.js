import axios from "axios";

const endPointPath = "http://localhost:3000/content/";

export default {
    addInfo(name, age) {
        let user = { name, age };
        return axios.post(endPointPath, user);
        
    },
    addPoints(skeleton) {
        let points = {skeleton};
        return axios.post(endPointPath, points); 
    }
};