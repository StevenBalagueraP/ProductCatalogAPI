# Product Catalog API

**Product Catalog API** is a RESTFull backend application with **TypeScript**, **Express.js** and **Prisma ORM**, following the principles of **Clean Architecture**  it provides core functionality to manage a digital product including categories, products, brands, users, reviews and images.
This project is ideal for e-commerce platforms, inventory systems or ani application that needs structured product management


## Technologies
- TypeScript
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Clean Architecture
- Swagger (OpenAPI)


## Project Structure (Clean Architecture)

```
├── config/                           
│   └── index.ts                     

├── src/                             
│   ├── application/                 
│   │   ├── DTOs/                     
│   │   ├── use-cases/              
│   │   └── utils/                   

│   ├── domain/                      
│   │   ├── entities/                
│   │   └── repositories/            

│   ├── infrastructure/             
│   │   ├── database/
│   │   │   ├── prisma/             
│   │   │   │   ├── client.ts        
│   │   │   │   └── schema.prisma     
│   │   │   ├── migrations/          
│   │   │   └── seeders/             
│   │   ├── models/                   
│   │   └── repositories/             
│   ├── interfaces/                  
│   │   ├── controllers/              
│   │   ├── docs/
│   │   │   └── swagger/             
│   │   ├── middlewares/             
│   │   └── routes/                   
│   └── server.ts                     
├── tests/                           
│   ├── unit/
│   └── integration/
├── .env                         
├── .gitignore
├── package.json
├── tsconfig.json
├── nodemon.json                     
├── README.md
```

## Installation and Setup Instructions

1. Install PostgreSQL on your device
2. Install dbeaver or any tool that allows to interact with your database
3. Create a new Database with the following name: **ProductCatalog**
4. Clone the repository

    - you can clone the repository with **GitHub Desktop**
    - Open a terminal and write the following command: `Git clone https://github.com/StevenBalagueraP/ProductCatalogAPI.git`
5. Create .env file on the root folder
    
    - when you make the connection with the postgreSQL database you have to make a connection between database and prismaORM
    - Put the following command on your .env file `DATABASE_URL="postgresql://yourUser:yourDBPassword@localhost:DBport/ProductCatalog"`
6. Install all the project dependencies

    - Open the project with an IDE 
    - then Open a terminal
    - write the following command on the terminal `npm install`
7. Run the project

    - Open the terminal and write: `npm run dev`

8. Open the Swagger link

    - Open the following link in your browser: http://localhost:3000

## How to make a Migration?

1. Create a new model with all the fields about the table on

    - `src/infrastructure/database/prisma/schema.prisma`
2. Open the IDE terminal
3. Run the migration with the following command:
    
    - `npx prisma migrate dev --name create-category --schema=src/infrastructure/database/prisma/schema.prisma`
4. Check if everything is Ok

    - `npx prisma migrate status --schema=src/infrastructure/database/prisma/schema.prisma`
5. Check the local database if the table was created sucessfully



## Available EndPoints

### 🟢 Categories
- POST /categories → Create a new category
- GET /categories → Get all categories
- GET /categories/:id → Get a specific category by ID
- PUT /categories/:id → Update a category
- DELETE /categories/:id → Delete a category (optional: only if it has no products)

### 🔵 Products
- POST /products → Create a new product
- GET /products → List all products (with optional pagination and filters)
- GET /products/:id → Get a specific product by ID
- GET /categories/:id/products → Get all products under a specific category
- PUT /products/:id → Update a product
- DELETE /products/:id → Delete a product

### 🟠 Brands
- POST /brands → Create a new brand
- GET /brands → List all brands

### 🧑 Users (Authentication planned)
- POST /register → Register a new user
- POST /login → Log in and receive access token

### ⭐ Reviews
- POST /products/:id/reviews → Add a review to a product
- GET /products/:id/reviews → Get all reviews for a product

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

You are free to use, modify, and distribute this software for personal or commercial purposes, provided that the original license and copyright notice are included.