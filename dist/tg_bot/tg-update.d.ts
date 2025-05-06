import { Context } from 'telegraf';
import { AiService } from './tg_bot.service';
export declare class BotUpdate {
    private readonly botService;
    constructor(botService: AiService);
    startCommand(ctx: Context): Promise<void>;
    handleTex(ctx: Context): Promise<void>;
    handleSticker(ctx: Context): Promise<void>;
    handleEditedMessage(ctx: Context): Promise<void>;
}
