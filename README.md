# Foodtruck API

REST API for managing foodtrucks, menus, orders and reviews built with Node.js, TypeScript, Express, TypeORM and PostgreSQL.

## Features

- **User Management** - Authentication and user CRUD
- **Foodtrucks** - Manage foodtruck entities and assignments
- **Menus & Dishes** - Organize menus with dishes (platos)
- **Orders (Comandas)** - Handle orders with dishes
- **Events** - Manage foodtruck events
- **Reviews (Reseñas)** - User reviews for foodtrucks
- **JWT Authentication** - Secure endpoints with tokens
- **PostgreSQL + TypeORM** - Relational data modeling
- **Docker Support** - Easy local setup

## Tech Stack

- Node.js, TypeScript, Express 5
- TypeORM, PostgreSQL
- JWT Authentication
- Nodemon, ts-node

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

## API Resources

| Resource | Description |
|---|---|
| /users | User management |
| /foodtrucks | Foodtruck CRUD |
| /menus | Menu management |
| /platos | Dishes management |
| /comandas | Orders management |
| /eventos | Events management |
| /resenyas | Reviews management |

## Scripts
- 
pm run dev - Start dev server
- 
pm run build - Compile TypeScript
- 
pm run migrations:generate - Generate migration
- 
pm run migrations:run - Run migrations
- 
pm run migrations:run:fresh - Reset and run migrations

## Project Structure
`
src/
├── controllers/
├── service/
├── entities/
├── routes/
├── middlewares/
├── helpers/
└── model/
`

## License
ISC

