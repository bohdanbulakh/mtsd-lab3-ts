import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { ProductsResponse } from '@mtsd-lab3/utils';

export const GetAll: ApiDocumentationParams = {
  ok: {
    type: ProductsResponse,
  }
}
