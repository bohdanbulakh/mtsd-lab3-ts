import { client } from '../instance';
import { ProductResponse, ProductsResponse } from '@mtsd-lab3/utils';

class ProductAPII {
  async getAll () {
    const { data } = await client.get<ProductsResponse>('/product');
    return data;
  }

  async getById (id: string) {
    const { data } = await client.get<ProductResponse>(`/product/${id}`);
    return data;
  }

  async addToChart (id: string) {
    const { data } = await client.post<void>(`/product/${id}/addToChart`);
    return data;
  }
}

export default new ProductAPII();
