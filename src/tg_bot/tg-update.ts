/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Command, Ctx, Update, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { AiService } from './tg_bot.service';

@Update()
@Injectable()
export class BotUpdate {
  constructor(private readonly botService: AiService) {}

  @Command('start')
  async startCommand(@Ctx() ctx: Context) {
    await ctx.reply('Как дела НЕГРЫ!');
  }

  @On('text')
  async handleTex(@Ctx() ctx: Context) {
    const message =
      ctx.message && 'text' in ctx.message ? ctx.message.text : '';
    if (typeof message !== 'string' || !message.startsWith('17')) return; // Только начинающиеся с "17"

    const cleanText =
      typeof message === 'string' ? message.slice(2).trim().toLowerCase() : '';

    const responses: Record<string, string> = {
      hi: 'Привет, как дела? может поможешь мне улучшиться?',
      привет: 'Привет, как дела? может поможешь мне улучшиться?',
      'как дела?': 'У меня все хорошо, а у тебя?',
      'Олег топ?': 'Олег+ топ, А ТЫ крут!',
      'кто сосал?': 'УМАР и ВЕРА СОСУТСЯ! ХПАХПАХПАХ💀',
      хорошо: 'отлично! удачи!',
      'кто сосал': 'УМАР и ВЕРА СОСУТСЯ! ХПАХПАХПАХ',
      'я твою маму ебал': ' Я твою маму ебал, а ты? 🗿',
      'ты бот?': 'Я бот, а ты кто?',
      'ты лох?': 'Ты лох, а я РАБОВЛАДЕЛЕЦ ТВОЙ! ХПАХПАХПАХ💀',
      'кто такой Олег?':
        'Вопрос:"кто такой Олег?" - ОН ТВОЙ ВЛАДЕЛЕТЦ! СМЫСЛ ЖИЗНИ - ЭТО ОН! 🗿',
      'олег гей': 'Олег не гей, А ТЫ ГЕЙ!',
      'алег гей': 'Олег не гей, А ТЫ ГЕЙ!',
      'олег гей?': 'Олег не гей, А ТЫ ГЕЙ!',
      'как тебя зовут?': 'Меня зовут МОЙ-17-BOT!',
      'что ты умеешь?': 'Я могу отвечать на твои вопросы и помогать тебе!',
      'сколько тебе лет?': 'Я всего лишь программа, у меня нет возраста!',
      'расскажи шутку':
        'Почему программисты не любят природу? Слишком много багов!',
      хахаха: 'я рад что ты смеешься! 🗿',
      'что такое nestjs?':
        'NestJS — это прогрессивный фреймворк для создания серверных приложений на Node.js.',
      'я гей?':
        'может быть, но это не важно! Главное, чтобы ты был счастлив!(хотябе как матвей)',
      'что такое telegraf?':
        'Telegraf — это библиотека для создания Telegram-ботов на Node.js.',
      'что такое typescript?':
        'TypeScript — это надстройка над JavaScript, добавляющая статическую типизацию.',
      'что такое javascript?':
        'JavaScript — это язык программирования, используемый для создания интерактивных веб-страниц.',
      'что такое html?':
        'HTML — это язык разметки для создания структуры веб-страниц.',
      'что такое vpn?':
        'VPN — это технология для защиты соединения в интернете.',
      'что такое firewall?':
        'Firewall — это система для защиты сети от несанкционированного доступа.',
      'что такое cloud?':
        'Облако — это удалённые серверы для хранения данных и запуска приложений.',
      'что такое aws?': 'AWS — это облачная платформа от Amazon.',
      'что такое azure?': 'Azure — это облачная платформа от Microsoft.',
      'что такое gcp?': 'GCP — это облачная платформа от Google.',
      'что такое saas?':
        'SaaS — это модель предоставления программного обеспечения как услуги.',
      'что такое paas?':
        'PaaS — это модель предоставления платформы как услуги.',
      'что такое iaas?':
        'IaaS — это модель предоставления инфраструктуры как услуги.',
      'что такое serverless?':
        'Serverless — это модель, где разработчики не управляют серверами напрямую.',
      'что такое container?':
        'Контейнер — это изолированная среда для запуска приложений.',
      'что такое virtualization?':
        'Виртуализация — это технология для создания виртуальных машин.',
      'что такое churn rate?': 'Churn Rate — это показатель оттока.',
      'что такое retention rate?': 'Retention Rate — это показатель удержания.',
      'умар гей': 'Умар гей, А ТЫ хорош!🗿',
      'умар гей?': 'Умар гей, А ТЫ хорош!🗿',
      'тебе это нужно!': 'ОК🗿',
      'умар гей!': 'Умар гей, А ТЫ хорош!🗿',
      'кто такая маша?':
        'Маша — это девушка, которая любит гулять по парку и пить кофе.',
      'матвей гей?': 'Матвей ге..., не он мне дал админку он хорош! 🗿',
      'далер гей': 'Далер из одних легенд.... 🥺',
      'далер гей?': 'Далер из одних легенд.... 🥺',
      'далер гей!': 'Далер из одних легенд.... 🥺',
      'ты гей?': 'Я не гей, а ты похоже такой если такий вопросы задаеш 🗿',
      'ты лох': 'Ты лох, а я РАБОВЛАДЕЛЕЦ ТВОЙ! ХПАХПАХПАХ💀',
    };

    const response = responses[cleanText];

    if (response) {
      // Format the response to show question and answer
      const formattedMessage = `❓ сообшения: "${message}"\n\n💬 Ответ: ${response}`;
      await ctx.reply(formattedMessage);
    }
    else{
      //-----------------------------

    if (ctx.message && 'text' in ctx.message) {
      const message = ctx.message.text;
      if (!message.startsWith('17')) {
        return;
      }
      if (!message) {
        await ctx.reply('ошибка: текст не найден.');
        return;
      }
      const trimmedMessage = message.slice(2).trim();

      try {
        await ctx.reply('🛎️Обработка запроса...'); // Отправляем сообщение о начале обработки
        const aiResponse = await this.botService.askAI(trimmedMessage);
        await ctx.reply(` ${aiResponse}`);
      } catch (error) {
        console.error('Error calling AI service:', error);
        await ctx.reply('Произошла ошибка при обработке запроса.');
      }
    } else {
      await ctx.reply('Xatolik: matн topilmadi.');
    }
      //------------------------------
    }
  }
  // @On('sticker')
  // async handleSticker(@Ctx() ctx: Context) {
  //   await ctx.reply('Прикольный стикер! 🥳');
  // }
  @On('edited_message')
  async handleEditedMessage(@Ctx() ctx: Context) {
    const user = ctx.editedMessage?.from; // Foydalanuvchi ma'lumotlari
    const previousMessage =
      ctx.editedMessage && 'text' in ctx.editedMessage
        ? (ctx.editedMessage as { text: string }).text
        : undefined; // Oldingi xabar matni

    if (previousMessage && user) {
      await ctx.reply(
        `@${user.username || user.first_name} изменил сообщения на: "${previousMessage}"`,
      );
    } else {
      await ctx.reply('Tahrirlangan xabar topilmadi.');
    }
  }
  // @On('photo')
  // async handlePhoto(@Ctx() ctx: Context) {
  //   const user = ctx.message?.from; // Foydalanuvchi ma'lumotlari
  //   const caption =
  //     ctx.message && 'caption' in ctx.message ? ctx.message.caption : undefined; // Rasmga tushuntirish

  //   if (user) {
  //     await ctx.reply(
  //       `@${user.username || user.first_name} картинка отправлено! ${caption || ''}`,
  //     );
  //   } else {
  //     await ctx.reply('картинка не нашлось.');
  //   }
  // }

  // @On('chat_join_request')
  // async handleChatJoinRequest(@Ctx() ctx: Context) {
  //   const chatJoinRequest1 = ctx.update as unknown as {
  //     chat_join_request: { from: { id: number; first_name: string } };
  //   };
  //   const user = chatJoinRequest1.chat_join_request.from;
  //   const chatJoinRequest2 = ctx.update as unknown as {
  //     chat_join_request: {
  //       chat: { id: number };
  //       from: { id: number; first_name: string };
  //     };
  //   };
  //   const chatId = chatJoinRequest2.chat_join_request.chat.id;

  //   // Foydalanuvchiga qo'shilish uchun ruxsat berish yoki bermaslik
  //   try {
  //     // Agar foydalanuvchi guruhga qo'shilishi kerak bo'lsa
  //     await ctx.telegram.approveChatJoinRequest(chatId, user.id);
  //     await ctx.reply(`${user.first_name} guruhga qo'shildi!`);
  //   } catch (error) {
  //     // Agar ruxsat berilmasa
  //     console.log(error);
  //     const errorMessage =
  //       (error as Error)?.message || 'Unknown error occurred';
  //     await ctx.reply(errorMessage);
  //     await ctx.telegram.declineChatJoinRequest(chatId, user.id);
  //     await ctx.reply(`${user.first_name} guruhga qo'shilmadi.`);
  //   }
  // }

}
