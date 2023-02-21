import { store } from "@/utils";
import { CacheEnum } from "@/enum/cacheTypes";
import axios, { AxiosRequestConfig } from "axios";
import loading from "@/store/loading";
import { ElMessage } from "element-plus";
export default class Axios {
  private instance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors();
  }
  public async request<T, D = ResponseResult<T>>(
    config: AxiosRequestConfig
  ): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.instance.request<D>(config);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //   拦截器
  private interceptors() {
    this.interceptorsRequest();
    this.interceptorsResponse();
  }
  //   拦截器
  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config) => {
        if (!config.url?.includes("upload")) {
          console.log("request", config.url);
          loading().openLoading();
        }
        let token = store.get(CacheEnum.TOKEN_NAME);
        if (token && config.headers) {
          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      },
      (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        console.log("response", response.config.url);

        loading().closeLoading();
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      },
      (error) => {
        loading().closeLoading();
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        const errors: string[] | string =
          typeof error?.response?.data?.message === "object"
            ? Object.values(error?.response?.data?.message)
            : error?.response?.data?.message;
        if (errors && errors.length && Array.isArray(errors)) {
          errors.forEach((errorMsg) => {
            ElMessage.error(errorMsg);
          });
        } else {
          ElMessage.error(errors as string);
        }
        return Promise.reject(error);
      }
    );
  }
}
