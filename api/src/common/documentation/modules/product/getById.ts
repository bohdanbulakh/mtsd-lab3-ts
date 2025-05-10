import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { ProductResponse } from '@mtsd-lab3/utils';

export const GetById: ApiDocumentationParams = {
  ok: {
    type: ProductResponse,
  },
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
