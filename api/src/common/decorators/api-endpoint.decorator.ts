import { ApiEndpointParams } from '../documentation/types/api-endpoint-params.type';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { addDocumentationDecorators } from '../documentation/get-documentation-decorators';

export function ApiEndpoint ({
  summary,
  guards,
  documentation,
}: ApiEndpointParams) {
  let description = '';

  if (guards) {
    const guardNames = typeof guards === 'function' ? guards.name : guards.map((g) => g.name).join(', ');
    description += `<b>Guards: ${guardNames}</b>`;
    guards = typeof guards === 'function' ? [guards] : guards;
  }

  const decorators = addDocumentationDecorators(summary, description, documentation);

  if (guards) {
    decorators.push(UseGuards(...guards));
  }

  return applyDecorators(...decorators);
}
