declare module "pdy-sdk-tracker" {
  interface DefaultOptions {
    uuid?: string;
    requestUrl?: string;
    historyTracker: boolean;
    hashTracker: boolean;
    domTracker: boolean;
    sdkVersion: string | number;
    extra?: Record<string, any>;
    jsError: boolean;
  }
  interface Options extends Partial<DefaultOptions> {
    requestUrl: string;
  }

  declare class Tracker {
    data: Options;
    constructor(options: Options);
    private initDef;
    sendTracker<T>(data: T): void;
    /**
     *
     * @param events
     * @param targetKey 一个枚举值 一般和后端协商好 例如"history-pv"
     */
    private capturEvent;
    private domTracker;
    /**
     * hashTracker和historyTracker的实现
     */
    private installTracker;
    setUserId<T extends DefaultOptions["uuid"]>(uuid: T): void;
    setExtra<T extends DefaultOptions["extra"]>(extra: T): void;
    private targetKeyReport;
    private reportTracker;
    private errorEvent;
    private promiseEroor;
    private jsError;
  }

  export { Tracker as default };
}
