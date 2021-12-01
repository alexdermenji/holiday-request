import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://619b9d0727827600174456df.mockapi.io/',
});

httpService.defaults.headers.common['Accept'] = '*/*';

export { httpService };
