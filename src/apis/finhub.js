import axios from "axios";

export default axios.create({
    baseURL : "https://finnhub.io/api/v1",
    params : {
        token :  "cn7p6n9r01qplv1e6h40cn7p6n9r01qplv1e6h4g"
    }
})
