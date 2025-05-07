import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { ProductResponse } from '@mtsd-lab3/utils';

export const Create: ApiDocumentationParams = {
  isAuth: true,
  ok: {
    type: ProductResponse,
  },
  badRequest: {
    description: `\n
    InvalidBodyIdException:
      Name cannot be empty
      Name must be a string
      Icon must be a string
      Price cannot be empty
      Price must be a string
      Description must be a string`,
  },
}
