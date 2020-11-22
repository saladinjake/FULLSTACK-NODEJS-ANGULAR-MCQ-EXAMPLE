export const API_URL ="http://localhost:12000/api/v1";
export const DEFAULT_AUTH_TOKEN = "MY_LIFE_IS_SECURED_TURRING_EXAMS_SCALED_UP";
export const Config = {
  //Imagine a life with out configurations...
  api:API_URL,
  allowCorsOrigin: true,
  allowHttps: true,
  store: {},

  setItem:(item, value) =>{
    if(this.store[item]){
      this.store[item] = value;
    }
    this.store[item] = value;

  },

  getItem:(key) =>{
    return this.store[key]
  }
};
