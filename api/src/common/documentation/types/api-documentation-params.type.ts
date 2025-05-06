import {
  ApiBodyOptions,
  ApiQueryOptions,
  ApiParamOptions,
  ApiResponseOptions,
} from '@nestjs/swagger';

export class ApiDocumentationParams {
  isAuth?: boolean;
  ok?: ApiResponseOptions | 'default';
  created?: ApiResponseOptions | 'default';
  badRequest?: ApiResponseOptions;
  tooManyRequests?: ApiResponseOptions;
  forbidden?: ApiResponseOptions | 'default';
  unauthorized?: ApiResponseOptions | 'default';
  body?: ApiBodyOptions;
  params?: ApiParamOptions[];
  queries?: ApiQueryOptions[];
}
