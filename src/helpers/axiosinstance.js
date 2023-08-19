import axios from "axios";
import React from "react";

let baseURL="htpp//localhost:40000"
let axiosInsatance=axios.create({
    baseURL:baseURL
})
export default axiosInsatance;