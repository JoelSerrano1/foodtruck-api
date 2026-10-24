# Foodtruck API

REST API for managing foodtrucks, menus, orders and reviews built with Node.js, TypeScript, Express, TypeORM and PostgreSQL.

## Features

- User Management
- Foodtrucks
- Menus & Dishes
- Orders
- Events
- Reviews
- JWT Authentication
- PostgreSQL + TypeORM
- Docker Support

## Tech Stack

Node.js, TypeScript, Express 5, TypeORM, PostgreSQL, JWT

## Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository
`ash
git clone https://github.com/JoelSerrano1/foodtruck-api.git
cd foodtruck-api
`

2. Install dependencies
`ash
npm install
`

3. Set up environment variables
`ash
cp .env.example .env
`
Configure your DB credentials in .env.

4. Run with Docker
`ash
docker-compose up -d
`

5. Run migrations
`ash
npm run migrations:run
`

6. Start dev server
`ash
npm run dev
`

API available at http://localhost:3000

## License
ISC

