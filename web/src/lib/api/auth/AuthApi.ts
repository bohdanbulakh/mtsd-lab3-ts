import { client } from '../instance';
import { LoginDTO, RegisterDTO } from '@mtsd-lab3/utils';

class AuthAPI {
  async register (body: RegisterDTO) {
    const { data } = await client.post<void>('/auth/register', body);
    return data;
  }

  async login (body: LoginDTO) {
    const { data } = await client.post<void>('/auth/login', body);
    return data;
  }

  async logout () {
    const { data } = await client.post<void>('/auth/logout');
    return data;
  }

  async me () {
    const { data } = await client.get<void>('/auth/me');
    return data;
  }
}

export default new AuthAPI();
