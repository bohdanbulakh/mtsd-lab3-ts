import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { OrderResponse } from '@mtsd-lab3/utils';

export const GetOrder: ApiDocumentationParams = {
  isAuth: true,
  ok: {
    type: OrderResponse,
  },
  unauthorized: 'default',
};
