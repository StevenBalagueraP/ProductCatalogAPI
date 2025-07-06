import { PrismaClient } from "@prisma/client";
import { seedCategories } from "./category-seeder";
import { seedRoles } from "./role-seeder";
import { seedUsers } from "./user-seeder";
import { seedCountries } from "./country-seeder";
import { seedBrand } from "./brand-seeder";
import { seedProducts } from "./product-seeder";
import { seedReviews } from "./review-seeder";

const prisma = new PrismaClient();

const main = async () => {
    try {
        await seedCategories();
        await seedRoles();
        await seedUsers();
        await seedCountries();
        await seedBrand();
        await seedProducts();
        await seedReviews();
    }catch (error) {
        console.error("Error seeding database:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}

main();


