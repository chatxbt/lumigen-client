import { axiosInstance } from './axios-instance'
import { credentials, envConfig } from "@lumigen-core/config";
import { isAuthed, getAuthToken, customlocalStorage } from "@lumigen-core/utils/toolkits";
import axios, { Axios, AxiosInstance } from "axios"

//set up api connect
export const privateApiConnect = (carrier: 'axios' | 'jquery' | 'super-agent' = 'axios' ): AxiosInstance | any | undefined => {
    try {
       // headers
      let headers: any = {
         // "x-token": signXToken,
         // "secret-token": encryptAES,
         // gRecaptcha: captcha
      };
         
      // check to see if can add dynamic authorization
      if (isAuthed()) {
         headers.Authorization = `Bearer ${getAuthToken()}`;
      }

      switch (carrier) {
         case 'axios':
            return axiosInstance({
               baseURL: envConfig.chatXbtV1ServerUrl,
               headers
            })
            break;
         
         default:
            return axiosInstance({
               baseURL: envConfig.chatXbtV1ServerUrl,
               headers
            })
               
            break;
      }
      return axiosInstance({
         baseURL: envConfig.chatXbtV1ServerUrl,
         headers
      })
    } catch (error: any) {
      // throw new Issue(500, error.message);
    }
 };

 //set up api connect
export const publicApiConnect = (carrier: 'axios' | 'jquery' | 'super-agent' = 'axios' ): Axios | any | undefined => {
   try {
      switch (carrier) {
         case 'axios':
            return axios
            break;
        
         default:
            return axios
              
            break;
        }
   } catch (error: any) {
   //   throw new Issue(500, error.message);
   }
};
