# Node rasmi
FROM node:18

# Ishchi papka
WORKDIR /app

# Paket fayllarni ko‘chirish
COPY package*.json ./

# @nestjs/cli ni global o‘rnatish va paketlarni o‘rnatish
RUN npm install -g @nestjs/cli
RUN npm install

# Loyiha fayllarini ko‘chirish
COPY . .

# Execute ruxsat berish (agar kerak bo‘lsa)
RUN chmod +x node_modules/.bin/nest

# Build qilish
RUN npm run build

# Server ishga tushish komandasi
CMD ["node", "dist/main.js"]

# Portni ochish (NestJS standart porti 3000)
EXPOSE 3000
