import {setupInterceptorsTo} from "./interceptors";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
setupInterceptorsTo(axios);
