import { ApiDocumentationParams } from './api-documentation-params.type';

export class ApiEndpointParams {
  summary: string;
  documentation?: ApiDocumentationParams;
  guards?: any | any[];
}
