# Starvell

Современная торговая платформа, построенная на Next.js с красивым UI и удобным пользовательским интерфейсом.

## 🚀 Быстрый старт

### Запуск с Docker (рекомендуется)

```bash
# Клонировать репозиторий
git clone <your-repo-url>
cd starvell

# Запустить приложение
docker-compose up -d

# Приложение будет доступно по адресу http://localhost:3000
```

### Локальная разработка

```bash
# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## 🛠 Технологии

- **Next.js** - React фреймворк
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **Docker** - Контейнеризация
- **Inter Font** - Шрифты

## 🐳 Docker команды

```bash
# Запуск приложения
docker-compose up -d

# Пересборка и запуск
docker-compose up --build -d

# Остановка
docker-compose down

# Просмотр логов
docker-compose logs app

# Подключение к контейнеру
docker-compose exec app sh
```

## 🔧 Разработка

### Стили

Проект использует Tailwind CSS. Глобальные стили находятся в `src/app/globals.css`.

### Шрифты

Используется шрифт Inter. Конфигурация находится в `src/utils/fonts/`.

Сделано с ❤️ для Starvell
