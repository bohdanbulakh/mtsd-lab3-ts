import { client } from '../instance';
import { LoginDTO, RegisterDTO } from '@mtsd-lab3/utils';

class AuthAPI {
  async register (body: RegisterDTO) {
    const { data } = await client.post<void>('/auth/register', body);
    console.log(data);
    return data;
  }

  async login (body: LoginDTO) {
    const { data } = await client.post<void>('/auth/login', body);
    return data;
  }

  async logout (body: LoginDTO) {
    const { data } = await client.post<void>('/auth/logout', body);
    return data;
  }
}

export default new AuthAPI();
