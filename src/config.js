const ENV_API_URL = import.meta.env.VITE_BASE_API_URL;

const PRODUCTION_API_URL = "http://127.0.0.1:8000/api";

const BASE_API_URL = ENV_API_URL ? ENV_API_URL : PRODUCTION_API_URL;

export default BASE_API_URL;
