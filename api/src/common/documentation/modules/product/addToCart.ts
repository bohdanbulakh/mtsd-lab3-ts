import { ApiDocumentationParams } from '../../types/api-documentation-params.type';

export const AddToCart: ApiDocumentationParams = {
  isAuth: true,
  created: 'default',
  unauthorized: 'default',
  params: [{
    name: 'id',
    required: true,
    description: 'Product id',
  }],
};
