import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedUsers = async() => {
    const users = [
        {
            name: "Steven Balaguera",
            email: "jerstebalpe@gmail.com",
            password: "12345678",
            idRole: 1
        },
        {
            name: "John Doe",
            email: "john@gmail.com",
            password: "123456",
            idRole: 2
        },
        {
            name: "Maria Smith",
            email: "maria@gmail.com",
            password: "110623",
            idRole: 2
        },
        {
            name: "Alma Marcela Gozo",
            email: "alma@gmail.com",
            password: "1124",
            idRole: 2
        },
        {
            name: "Elver Galarga",
            email: "elver@gmail.com",
            password: "1234",
            idRole: 2
        }
    ];
    for (const user of users) {
        const existingUser = await prisma.user.findUnique({
            where: { email: user.email }
        });
        if (!existingUser) {
            await prisma.user.create({ data: user });
        }
    };
    console.log("Users seeded successfully");
}