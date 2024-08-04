import type { AxiosResponse, Method, ResponseType } from 'axios';
import axios from 'axios';

interface ResponseInterface<D> {
  data?: D | null;
}
export type ResponseAPI<T = null> = ResponseInterface<T>;

export const useHttp = <Response = unknown, Formatted = unknown>({
  url = import.meta.env.VITE_BASE_URL,
  variables,
  // token,
  params = {},
  method = 'GET',
  timeout,
  beforeExecute = () => true,
  onComplete = () => true,
  formatter = () => true,
  onError = () => false,
  onFinally = () => false,
  useFormData = false,
  responseType
}: {
  /** */
  url?: string;

  variables?: Record<string, unknown>;

  /**
   * Similar to `params` in Axios, this is used to add query strings.
   * For dynamic and reactive values, you can use `computed` or `ref`.
   *
   * ### Example Usage:
   * @example
   * ```
   * // Example usage with a regular object
   * useHttp({ params: { userId: 123, status: 'active' } });
   * // Converted URL: /endpoint?userId=123&status=active
   *
   * // Example usage with computed or ref (Vue 3)
   * const userId = ref(123);
   * const userStatus = computed(() => 'active');
   * useHttp({ params: { userId, status: userStatus } });
   * // Converted URL: /endpoint?userId=123&status=active
   * ```
   *
   * @param params - An object containing key-value pairs for request parameters.
   */
  params?: Record<string, unknown>;

  // /**
  //  * Token for HTTP request authentication.
  //  * This is one of the parameters for the `useHttp` method.
  //  * Make sure to include the token with the prefix "Bearer" for the correct format.
  //  * If this parameter is not provided, the default token will be taken from
  //  * the currently logged-in user's session.
  //  *
  //  * ### Example Usage:
  //  * @example
  //  * ```
  //  * const token = `Bearer ${yourTokenString}`;
  //  * useHttp({ token });
  //  * ```
  //  *
  //  * @param token - Authentication token in string format.
  //  */
  // token?: string;

  method?: Method;

  timeout?: number;

  beforeExecute?: () => boolean;

  /**
   * Callback that is called after the request is successfully completed without errors.
   * The `data` parameter represents the successful response from Axios.
   * Use `data` to access the received response.
   *
   * ### Example Usage:
   * ```
   * onComplete(data) {
   *   console.log('Request completed!', data);
   * }
   * ```
   *
   * @param data - The response from Axios containing data and other information from the request.
   */
  onComplete?: (res: AxiosResponse<Response, unknown>) => void;

  /**
   * The `formatter` function is used to change the format of the response data.
   * The `data` parameter is a reference (`Ref`) to the `Formatted` type,
   * which is the second generic type of `useHttp`. The `Formatted` type
   * represents the expected data type after formatting by this function.
   * The `value` parameter is the response from Axios or `null` if no data is available.
   * `useHttp` itself has two generic types: `Response` for the response type from the endpoint,
   * and `Formatted` for the expected data type after formatting.
   *
   * ### Example Usage:
   * @example
   * ```
   * // Example usage of formatter in useHttp
   * const useHttp = <Response = any, Formatted = any> => {
   *   ...
   *   formatter(data, value) {
   *     // Change the data format here
   *     data.value = value?.data; // Example usage
   *   },
   *   ...
   * };
   * ```
   *
   * @param data - A reference to the formatted data.
   * @param value - The response from Axios or `null`.
   */
  formatter?: (data: Formatted | null, res: AxiosResponse<Response, unknown> | null) => void;

  /**
   *
   * ## 👉 Example:
   * > ```ts
   * const toast = useToast()
   * onError(data, errorMessage) {
   *   if (errorMessage) {
   *     toast.error(errorMessage);
   *   }
   * },
   * ```
   */
  onError?: (data: unknown, msg?: string | null) => void;

  /**
   * ## ✏️ Function
   * > Executed after the query is completed regardless of **error** or **success**
   */
  onFinally?: () => void;

  useFormData?: boolean;

  responseType?: ResponseType;
}) => {
  let isLoading: boolean = false;
  let data: Formatted | null = null;

  formatter(data, null);

  let err: unknown = null;
  let errMsg = '';

  const execute = async (
    replaceVariables?: Record<string, unknown> | null,
    replaceParams?: Record<string, unknown> | null
  ) => {
    if (!beforeExecute()) {
      onFinally();
      return;
    }

    isLoading = true;

    if (replaceVariables?.defaultPrevented != null) {
      replaceVariables = undefined;
    }

    const initialData: Record<string, unknown> = replaceVariables ?? variables ?? {};
    let requestData: Record<string, unknown> | FormData = initialData;

    if (useFormData) {
      const formData = new FormData();
      Object.keys(initialData).forEach((key) => {
        const value = initialData[key];

        if (Array.isArray(value)) {
          // If the key is 'files' and its value is an array
          value.forEach((val) => {
            if (val !== undefined && val !== null) {
              formData.append(
                key,
                typeof val === 'object' && !(val instanceof File)
                  ? JSON.stringify(val)
                  : String(val)
              );
            }
          });
        } else if (value !== undefined && value !== null) {
          formData.append(
            key,
            typeof value === 'object' && !(value instanceof File)
              ? JSON.stringify(value)
              : String(value)
          );
        }
      });
      requestData = formData;
    }

    return await axios({
      timeout: timeout ?? 60000,
      method,
      url: url,
      data: requestData,
      // headers: get(authStore),
      params: replaceParams ?? params,
      responseType: responseType
    })
      .then((res) => {
        isLoading = false;
        data = res?.data;

        onComplete(res);
        onFinally();
        formatter(data, res);

        err = null;
        errMsg = '';

        return res;
      })
      .catch((e) => {
        isLoading = false;
        err = e;

        if (e.response?.data?.message == 'Unauthorized') {
          errMsg = 'Bad form input request';
        } else {
          errMsg = e.response?.data?.message ?? 'A system error occured.';
        }

        onError(e, errMsg);
        onFinally();

        return e;
      });
  };
  const refetch = execute;
  return {
    data,

    isLoading,

    /**
     * Refetch the query
     */
    refetch,

    /**
     * Execute the query
     */
    execute,

    errMsg,

    /**
     * If there is no error, then null.
     * Error will be assigned null if fetch is successful
     */
    err
  };
};
