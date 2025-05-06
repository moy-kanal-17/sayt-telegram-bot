import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AiService {
  constructor(private readonly httpService: HttpService) {}

  async askAI(prompt: string): Promise<string> {
    try {
      const res = await this.httpService.axiosRef.post<{ reply: string }>(
        'http://localhost:8000/ask',
        {
          prompt,
        },
      );
      return res.data.reply;
    } catch (err) {
      console.error('Error communicating with AI:', err.message);
      return 'AI не смог ответить.';
    }
  }
}
