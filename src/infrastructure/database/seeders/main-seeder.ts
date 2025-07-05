import { PrismaClient } from "@prisma/client";
import { seedCategories } from "./category-seeder";

const prisma = new PrismaClient();

const main = async () => {
    try {
        await seedCategories();
    }catch (error) {
        console.error("Error seeding database:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}

main();


