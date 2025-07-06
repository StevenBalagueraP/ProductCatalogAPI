import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedCountries = async () => {
    const countries = [
        {
            name: "Colombia"
        },
        {
            name: "United States"
        },
        {
            name: "Mexico"
        },
        {
            name: "Spain"
        },
        {
            name: "Argentina"
        },
        {
            name: "Chile"
        }
    ];
    for ( const country of countries) {
        const existingCountry = await prisma.country.findUnique({
            where: { name: country.name }
        });
        if (!existingCountry) {
            await prisma.country.create({
                data: country
            });
        }
    }
    console.log("Countries seeded successfully");
}