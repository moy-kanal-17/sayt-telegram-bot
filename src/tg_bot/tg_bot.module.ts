// src/ai/ai.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AiService } from './tg_bot.service';
import { BotUpdate } from './tg-update';

@Module({
  imports: [HttpModule],
  providers: [AiService, BotUpdate],
  exports: [AiService],
})
export class AiModule {}
