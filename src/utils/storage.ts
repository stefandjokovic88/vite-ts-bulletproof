const storagePrefix = 'unifi_';

const storage = {
  //   getToken: () => {
  //     return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  //   },
  //   setToken: (token: string) => {
  //     window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  //   },
  //   clearToken: () => {
  //     window.localStorage.removeItem(`${storagePrefix}token`);
  //   },
  get: (key: any) => {
    return localStorage.getItem(`${storagePrefix}${key}`);
  },
  set: (key: any, value: any) => {
    localStorage.setItem(`${storagePrefix}${key}`, value);
  },
  clear: (key: any) => {
    localStorage.removeItem(`${storagePrefix}${key}`);
  },
  clearStorage: () => {
    localStorage.clear();
  },
};

export default storage;
