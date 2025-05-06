import { ApiDocumentationParams } from '../../types/api-documentation-params.type';
import { LoginDTO } from '@mtsd-lab3/utils';

export const Login: ApiDocumentationParams = {
  created: 'default',
  unauthorized: 'default',
  badRequest: {
    description: `\n
    InvalidBodyException:
      Email cannot be empty
      Password cannot be empty
      
    InvalidEntityIdException  
      User with such id is not found`,
  },
  body: {
    type: LoginDTO,
  },
};
