import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedCategories = async () => {
    const categories = [
        { 
            name: "Electronics",
            description: "Devices and gadgets"
        },
        { 
            name: "Books",
            description: "Printed and Digital Books"
        },
        { 
            name: "Home",
            description: "Future and home essentials"
        },
        { 
            name: "Technology",
            description: "Latest tech products"
        },
        { 
            name: "Sports and Outdoors",
            description: "Fitness and outdoor gear"
        },
        { 
            name: "Toys and Games",
            description: "Fun and educational toys"
        }
    ];
    for (const category of categories){
        const exists = await prisma.category.findUnique({
            where: { name: category.name }
        });
        if (!exists) {
            await prisma.category.create({data: category});
        }
    }
    console.log("Categories seeded successfully."); 
}