import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedBrand = async () => {
    const brands = [
        {
            name: "Nike",
            description: "Nike, Inc. is an American multinational corporation that designs, develops, manufactures, and sells footwear, apparel, equipment, accessories, and services.",
            idCountry: 1
        },
        {
            name: "Adidas",
            description: "Adidas AG is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. It is the largest sportswear manufacturer in Europe, and the second-largest in the world.",
            idCountry: 2
        },
        {
            name: "Puma",
            description: "Puma SE is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel, and accessories.",
            idCountry: 3
        },
        {
            name: "Reebok",
            description: "Reebok International Limited is an American-inspired global brand that creates and markets sports and lifestyle products.",
            idCountry: 4
        },
        {
            name: "Under Armour",
            description: "Under Armour, Inc. is an American sports equipment company that manufactures footwear, sports, and casual apparel.",
            idCountry: 5
        },
        {
            name: "New Balance",
            description: "New Balance Athletics, Inc. is an American multinational corporation that designs and manufactures athletic footwear, apparel, and accessories.",
            idCountry: 6
        },
        {
            name: "Asics",
            description: "Asics Corporation is a Japanese multinational corporation that produces sports equipment designed for a wide range of sports.",
            idCountry: 1
        },
        {
            name: "Fila",
            description: "Fila is an Italian sportswear brand that designs and manufactures athletic apparel, footwear, and accessories.",
            idCountry: 2
        },
        {
            name: "Skechers",
            description: "Skechers USA, Inc. is an American lifestyle and performance footwear company that designs, develops, and markets a diverse range of footwear.",
            idCountry: 3
        },
        {
            name: "Converse",
            description: "Converse Inc. is an American shoe company that primarily produces basketball shoes and lifestyle brand footwear.",
            idCountry: 4
        },
        {
            name: "Vans",
            description: "Vans is an American manufacturer of skateboarding shoes and related apparel, known for its distinctive style and association with the skateboarding culture.",
            idCountry: 5
        },
        {
            name: "Hoka One One",
            description: "Hoka One One is a French athletic shoe company known for its maximalist running shoes that provide extra cushioning and support for runners.",
            idCountry: 6
        }
    ];
    for (const brand of brands) {
        const existingBrand = await prisma.brand.findUnique({
            where: { name: brand.name }
        });
        if (!existingBrand) {
            await prisma.brand.create({
                data: brand
            });
        }
    }
    console.log("Brands seeded successfully");
}