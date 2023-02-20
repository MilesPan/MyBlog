/**localstorage 过期时间设置 */
export interface IData{
  expires?: number;
  data: any;
}
export default {
  set(key: string, data: any, expires?: number): void {
    let cache: IData = { data };
    if (expires) {
      cache.expires = Date.now() + expires * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key: string): any {
    const cacheStore = localStorage.getItem(key);
    if (cacheStore) {
      const cache: IData = JSON.parse(cacheStore);
      const expires = cache.data?.expires;
      // 过期时间小于当前时间，说明过期了，应该删掉
      if (expires && expires < Date.now()) {
        localStorage.removeItem(key);
        return null;
      }
      // 否则返回数据
      return cache.data;
    }
    return null;
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
