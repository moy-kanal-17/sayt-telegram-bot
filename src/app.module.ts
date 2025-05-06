import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './tg_bot/tg_bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN!,
      botName: process.env.BOT_NAME!,
    }),
    AiModule,
  ],
})
export class AppModule {}
