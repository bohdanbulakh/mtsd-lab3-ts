import {
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCookieAuth,
  ApiForbiddenResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiTooManyRequestsResponse, ApiCreatedResponse,
} from '@nestjs/swagger';
import { ApiDocumentationParams } from './types/api-documentation-params.type';
import { DefaultForbiddenResponse, DefaultUnauthorizedResponse } from './default-responses.constants';

export function addDocumentationDecorators (summary: string, description: string, documentation?: ApiDocumentationParams) {
  const responseTypes = [
    { key: 'ok', decorator: ApiOkResponse, default: {} },
    { key: 'created', decorator: ApiCreatedResponse, default: {} },
    { key: 'badRequest', decorator: ApiBadRequestResponse },
    { key: 'forbidden', decorator: ApiForbiddenResponse, default: DefaultForbiddenResponse },
    { key: 'unauthorized', decorator: ApiUnauthorizedResponse, default: DefaultUnauthorizedResponse },
    { key: 'tooManyRequests', decorator: ApiTooManyRequestsResponse },
  ];

  const decorators = [
    ApiOperation({ summary, description }),
    ...(documentation?.isAuth ? [ApiCookieAuth()] : []),
  ];

  decorators.push(
    ...responseTypes
      .filter((responseType) => documentation?.[responseType.key])
      .map((responseType) => {
        const response = documentation?.[responseType.key];
        return responseType.decorator(response !== 'default' ? response : responseType.default);
      })
  );

  if (documentation?.params) {
    decorators.push(
      ...documentation.params.map((query) => ApiParam(query))
    );
  }

  if (documentation?.queries) {
    decorators.push(
      ...documentation.queries.map((query) => ApiQuery(query))
    );
  }

  if (documentation?.body) {
    decorators.push(ApiBody(documentation.body));
  }

  return decorators;
}
