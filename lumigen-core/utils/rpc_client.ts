import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
    credentials,
    envConfig
} from "@lumigen-core/config"

const rpcServerUrl = envConfig.chatXbtrpcServerUrl

/**
 * Makes an RPC call to the specified URL with the given method name and parameters.
 * 
 * @param methodName The name of the RPC method to be called.
 * @param params Optional parameters for the RPC method (object or array).
 * @param url The URL of the RPC server (defaults to rpcServerUrl).
 * @param timeout Timeout in milliseconds (default is 900000, i.e., 15 minutes).
 * @param event Whether to use the 'event' endpoint or not (default is true).
 * @returns The JSON response from the RPC server.
 * @throws An error if the request fails.
 */
async function rpcCall(
    methodName: string,
    params?: Record<string, any> | any[],
    url: string = rpcServerUrl!,
    timeout: number = 900000,
    event: boolean = true
): Promise<Record<string, any>> {
    const headers = {
        'Content-Type': 'application/json',
    };

    const auth = {
        username: credentials.rpcServer.auth.username,
        password: credentials.rpcServer.auth.password
    };

    const payload = {
        method: methodName,
        params: params,
        jsonrpc: '2.0',
        id: uuidv4(),
    };

    if (event) {
        url = `${url}event`;
    }

    const config: AxiosRequestConfig = {
        headers,
        auth,
        timeout,
    };

    try {
        const response = await axios.post(url, payload, config);
        return response.data;
    } catch (error: any) {
        console.error(`Error making RPC call: ${error}`);
        throw new Error(`Error making RPC call: ${error}`);
    }
}

export { rpcCall };
