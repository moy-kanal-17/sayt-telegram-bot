"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotUpdate = void 0;
const common_1 = require("@nestjs/common");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const tg_bot_service_1 = require("./tg_bot.service");
let BotUpdate = class BotUpdate {
    botService;
    constructor(botService) {
        this.botService = botService;
    }
    async startCommand(ctx) {
        await ctx.reply('Как дела НЕГРЫ!');
    }
    async handleTex(ctx) {
        const message = ctx.message && 'text' in ctx.message ? ctx.message.text : '';
        if (typeof message !== 'string' || !message.startsWith('17'))
            return;
        const cleanText = typeof message === 'string' ? message.slice(2).trim().toLowerCase() : '';
        const responses = {
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
            'кто такой Олег?': 'Вопрос:"кто такой Олег?" - ОН ТВОЙ ВЛАДЕЛЕТЦ! СМЫСЛ ЖИЗНИ - ЭТО ОН! 🗿',
            'олег гей': 'Олег не гей, А ТЫ ГЕЙ!',
            'алег гей': 'Олег не гей, А ТЫ ГЕЙ!',
            'олег гей?': 'Олег не гей, А ТЫ ГЕЙ!',
            'как тебя зовут?': 'Меня зовут МОЙ-17-BOT!',
            'что ты умеешь?': 'Я могу отвечать на твои вопросы и помогать тебе!',
            'сколько тебе лет?': 'Я всего лишь программа, у меня нет возраста!',
            'расскажи шутку': 'Почему программисты не любят природу? Слишком много багов!',
            хахаха: 'я рад что ты смеешься! 🗿',
            'что такое nestjs?': 'NestJS — это прогрессивный фреймворк для создания серверных приложений на Node.js.',
            'я гей?': 'может быть, но это не важно! Главное, чтобы ты был счастлив!(хотябе как матвей)',
            'что такое telegraf?': 'Telegraf — это библиотека для создания Telegram-ботов на Node.js.',
            'что такое typescript?': 'TypeScript — это надстройка над JavaScript, добавляющая статическую типизацию.',
            'что такое javascript?': 'JavaScript — это язык программирования, используемый для создания интерактивных веб-страниц.',
            'что такое html?': 'HTML — это язык разметки для создания структуры веб-страниц.',
            'что такое vpn?': 'VPN — это технология для защиты соединения в интернете.',
            'что такое firewall?': 'Firewall — это система для защиты сети от несанкционированного доступа.',
            'что такое cloud?': 'Облако — это удалённые серверы для хранения данных и запуска приложений.',
            'что такое aws?': 'AWS — это облачная платформа от Amazon.',
            'что такое azure?': 'Azure — это облачная платформа от Microsoft.',
            'что такое gcp?': 'GCP — это облачная платформа от Google.',
            'что такое saas?': 'SaaS — это модель предоставления программного обеспечения как услуги.',
            'что такое paas?': 'PaaS — это модель предоставления платформы как услуги.',
            'что такое iaas?': 'IaaS — это модель предоставления инфраструктуры как услуги.',
            'что такое serverless?': 'Serverless — это модель, где разработчики не управляют серверами напрямую.',
            'что такое container?': 'Контейнер — это изолированная среда для запуска приложений.',
            'что такое virtualization?': 'Виртуализация — это технология для создания виртуальных машин.',
            'что такое churn rate?': 'Churn Rate — это показатель оттока.',
            'что такое retention rate?': 'Retention Rate — это показатель удержания.',
            'умар гей': 'Умар гей, А ТЫ хорош!🗿',
            'умар гей?': 'Умар гей, А ТЫ хорош!🗿',
            'тебе это нужно!': 'ОК🗿',
            'умар гей!': 'Умар гей, А ТЫ хорош!🗿',
            'кто такая маша?': 'Маша — это девушка, которая любит гулять по парку и пить кофе.',
            'матвей гей?': 'Матвей ге..., не он мне дал админку он хорош! 🗿',
            'далер гей': 'Далер из одних легенд.... 🥺',
            'далер гей?': 'Далер из одних легенд.... 🥺',
            'далер гей!': 'Далер из одних легенд.... 🥺',
            'ты гей?': 'Я не гей, а ты похоже такой если такий вопросы задаеш 🗿',
            'ты лох': 'Ты лох, а я РАБОВЛАДЕЛЕЦ ТВОЙ! ХПАХПАХПАХ💀',
        };
        const response = responses[cleanText];
        if (response) {
            const formattedMessage = `❓ сообшения: "${message}"\n\n💬 Ответ: ${response}`;
            await ctx.reply(formattedMessage);
        }
        else {
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
                    await ctx.reply('🛎️Обработка запроса...');
                    const aiResponse = await this.botService.askAI(trimmedMessage);
                    await ctx.reply(` ${aiResponse}`);
                }
                catch (error) {
                    console.error('Error calling AI service:', error);
                    await ctx.reply('Произошла ошибка при обработке запроса.');
                }
            }
            else {
                await ctx.reply('Xatolik: matн topilmadi.');
            }
        }
    }
    async handleEditedMessage(ctx) {
        const user = ctx.editedMessage?.from;
        const previousMessage = ctx.editedMessage && 'text' in ctx.editedMessage
            ? ctx.editedMessage.text
            : undefined;
        if (previousMessage && user) {
            await ctx.reply(`@${user.username || user.first_name} изменил сообщения на: "${previousMessage}"`);
        }
        else {
            await ctx.reply('Tahrirlangan xabar topilmadi.');
        }
    }
};
exports.BotUpdate = BotUpdate;
__decorate([
    (0, nestjs_telegraf_1.Command)('start'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "startCommand", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "handleTex", null);
__decorate([
    (0, nestjs_telegraf_1.On)('edited_message'),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], BotUpdate.prototype, "handleEditedMessage", null);
exports.BotUpdate = BotUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tg_bot_service_1.AiService])
], BotUpdate);
//# sourceMappingURL=tg-update.js.map