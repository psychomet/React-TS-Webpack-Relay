import axios from "axios";

export const login = (data: any) => axios.post("/auth/login", data);

export const register = (data: any): Promise<any> =>
  new Promise((resolve, reject) =>
    axios
      .post("/auth/register", data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );
