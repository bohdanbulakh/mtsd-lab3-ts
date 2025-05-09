import { UserResponse } from '@mtsd-lab3/utils/responses';
import { ApiDocumentationParams } from '../../types/api-documentation-params.type';

export const Me: ApiDocumentationParams = {
  isAuth: true,
  ok: {
    type: UserResponse,
  },
  unauthorized: 'default',
};
