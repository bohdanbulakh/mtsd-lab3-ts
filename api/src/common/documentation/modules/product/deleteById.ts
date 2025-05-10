import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { ProductResponse } from '@mtsd-lab3/utils';

export const DeleteById: ApiDocumentationParams = {
  isAuth: true,
  ok: {
    type: ProductResponse,
  },
  unauthorized: 'default',
  badRequest: {
    description: `\n
    InvalidEntityIdException:
      Product with such id is not found`,
  },
  params: [{
    name: 'id',
    required: true,
    description: 'Product id',
  }],
};
