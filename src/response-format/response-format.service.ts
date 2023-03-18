import { Injectable } from '@nestjs/common';
import { ResponseFormat } from '../utils/types/response-format';

@Injectable()
export class ResponseFormatService {
  formatResponse(data: string[], format: ResponseFormat): string | string[] {
    switch (format) {
      case 'html':
        const blockquoteInner = data.map((item) => `<p>${item}</p>`).join('');
        return `<blockquote>${blockquoteInner}</blockquote>`;
      case 'plain':
        return data.join('\n');
      default:
        return data;
    }
  }
}
