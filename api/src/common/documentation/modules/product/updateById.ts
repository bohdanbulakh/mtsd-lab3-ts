import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { ProductResponse } from '@mtsd-lab3/utils';

export const UpdateById: ApiDocumentationParams = {
  isAuth: true,
  ok: {
    type: ProductResponse,
  },
  unauthorized: 'default',
  badRequest: {
    description: `\n
    InvalidEntityIdException:
      Product with such id is not found

    InvalidBodyIdException:
      Name must be a string
      Icon must be a string
      Price must be a string
      Description must be a string`,
  },
  params: [{
    name: 'id',
    required: true,
    description: 'Product id',
  }],
};
