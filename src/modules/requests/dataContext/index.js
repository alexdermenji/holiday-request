import { httpService } from '../../../core/httpService';
class RequestsContext {
  getRequest() {
    return httpService.get('requests');
  }
  addRequest(data) {
    return httpService.post('requests', data);
  }
}

export const requestsContext = new RequestsContext();
