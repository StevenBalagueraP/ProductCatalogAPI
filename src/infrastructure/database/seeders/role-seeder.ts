import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedRoles = async () => {
    const roles = [
        {
            name: "Admin",
            description: "Administrator with full access to the system",
        },
        {
            name: "User",
            description: "Regular user with limited access"
        }
    ];
    for (const role of roles) {
        const existingRole = await prisma.role.findUnique({
            where: { name: role.name }
        })
        if (!existingRole) {
            await prisma.role.create({ data: role })
        }
    };
    console.log("Roles seeded successfully"); 
}