import { HttpService } from '@nestjs/axios';
export declare class AiService {
    private readonly httpService;
    constructor(httpService: HttpService);
    askAI(prompt: string): Promise<string>;
}
