import axios from "axios";

export const axiosInstance = ({
  baseURL,
  headers,
}: {
  baseURL: string;
  headers: object;
}) => {
  try {
    //new instance
    const axiosInstance = axios.create({
      baseURL,
      headers: { ...headers },
    });

    // interceptor
    axiosInstance.interceptors.response.use(
      (response) =>
        new Promise((resolve, reject) => {
          resolve(response);
        }),
      (error) => {
        if (!error.response) {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
        if (error.response.status === 401) {
          // localStorage.removeItem("token");
          // window.location = "/login" as any;
          return new Promise((resolve, reject) => {
            reject(error);
          });
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      }
    );

    return axiosInstance;
  } catch (error: any) {
    if (error?.response?.status === 500 || error?.response?.status === 403)
      console.log(error?.response?.message)

    throw new Error(error.message);
  }
};