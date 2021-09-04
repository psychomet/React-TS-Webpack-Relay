
import {setupInterceptorsTo} from "./interceptors";
import axios from "axios";
const specificAxios = setupInterceptorsTo(axios.create());
