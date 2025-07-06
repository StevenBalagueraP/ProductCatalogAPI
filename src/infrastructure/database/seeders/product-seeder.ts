import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedProducts = async () => {
    const products = [
        {
            name: "Nike Air Max",
            description: "A classic sneaker with air cushioning for comfort.",
            price: 120.00,
            stock: 50,
            idCategory: 5,
            idBrand: 1
        },
        {
            name: "Adidas Ultraboost",
            description: "High-performance running shoes with Boost technology.",
            price: 180.00,
            stock: 30,
            idCategory: 5,
            idBrand: 2
        },
        {
            name: "Puma RS-X",
            description: "Retro-inspired sneakers with bold colors and cushioning.",
            price: 110.00,
            stock: 40,
            idCategory: 5,
            idBrand: 3
        },
        {
            name: "Reebok Classic",
            description: "Timeless sneakers with a clean design, perfect for casual wear.",
            price: 85.00,
            stock: 60,
            idCategory: 5,
            idBrand: 4
        },
        {
            name: "Under Armour HOVR",
            description: "Running shoes with HOVR technology for energy return.",
            price: 150.00,
            stock: 20,
            idCategory: 4,
            idBrand: 5
        },
        {
            name: "New Balance 990",
            description: "Iconic running shoes known for their comfort and stability.",
            price: 175.00,
            stock: 25,
            idCategory: 4,
            idBrand: 6
        },
        {
            name: "Asics Gel-Kayano",
            description: "Premium running shoes with Gel cushioning for support.",
            price: 160.00,
            stock: 35,
            idCategory: 5,
            idBrand: 7
        },
        {
            name: "Fila Disruptor",
            description: "Chunky sneakers with a bold design and comfortable fit.",
            price: 90.00,
            stock: 45,
            idCategory: 5,
            idBrand: 8
        },
        {
            name: "Skechers Go Walk",
            description: "Comfortable walking shoes with responsive cushioning.",
            price: 75.00,
            stock: 55,
            idCategory: 5,
            idBrand: 9
        },
        {
            name: "Converse Chuck Taylor All Star",
            description: "Classic canvas sneakers with a timeless design.",
            price: 65.00,
            stock: 70,
            idCategory: 5,
            idBrand: 10
        },
        {
            name: "Vans Old Skool",
            description: "Iconic skate shoes with a low-top silhouette and side stripe.",
            price: 70.00,
            stock: 80,
            idCategory: 5,
            idBrand: 11
        },
        {
            name: "Hoka One One Clifton",
            description: "Lightweight running shoes with maximum cushioning for comfort.",
            price: 140.00,
            stock: 30,
            idCategory: 5,
            idBrand: 12
        },
        {
            name: "Nike Air Force 1",
            description: "Classic basketball sneakers with a leather upper and Air cushioning.",
            price: 110.00,
            stock: 50,
            idCategory: 5,
            idBrand: 1
        },
        {
            name: "Adidas Stan Smith",
            description: "Iconic tennis shoes with a minimalist design and perforated stripes.",
            price: 85.00,
            stock: 60,
            idCategory: 5,
            idBrand: 2
        },
        {
            name: "Puma Suede Classic",
            description: "Stylish sneakers with a suede upper and retro design.",
            price: 80.00,
            stock: 40,
            idCategory: 5,
            idBrand: 3
        },
        {
            name: "Reebok Nano X",
            description: "Cross-training shoes designed for versatility and performance.",
            price: 130.00,
            stock: 20,
            idCategory: 4,
            idBrand: 4
        },
        {
            name: "Under Armour Charged Assert",
            description: "Running shoes with Charged Cushioning for responsiveness.",
            price: 100.00,
            stock: 25,
            idCategory: 5,
            idBrand: 5
        },
        {
            name: "New Balance Fresh Foam",
            description: "Running shoes with Fresh Foam cushioning for a plush ride.",
            price: 120.00,
            stock: 35,
            idCategory: 5,
            idBrand: 6
        },
        {
            name: "Asics Gel-Nimbus",
            description: "Premium running shoes with Gel cushioning for long-distance comfort.",
            price: 170.00,
            stock: 30,
            idCategory: 5,
            idBrand: 7
        },
        {
            name: "Fila Ray Tracer",
            description: "Retro sneakers with a chunky silhouette and bold colors.",
            price: 95.00,
            stock: 45,
            idCategory: 5,
            idBrand: 8
        },
        {
            name: "Skechers D'Lites",
            description: "Comfortable sneakers with a lightweight design and cushioned insole.",
            price: 80.00,
            stock: 50,
            idCategory: 5,
            idBrand: 9
        },
        {
            name: "Converse One Star",
            description: "Casual sneakers with a suede upper and star logo.",
            price: 75.00,
            stock: 65,
            idCategory: 5,
            idBrand: 10
        },
        {
            name: "Vans Sk8-Hi",
            description: "High-top skate shoes with padded collars and signature side stripe.",
            price: 85.00,
            stock: 70,
            idCategory: 5,
            idBrand: 11
        },
        {
            name: "Hoka One One Bondi",
            description: "Maximum cushioning running shoes for a smooth ride.",
            price: 160.00,
            stock: 25,
            idCategory: 5,
            idBrand: 12
        },
        {
            name: "Nike Zoom Pegasus",
            description: "Versatile running shoes with responsive cushioning and support.",
            price: 130.00,
            stock: 40,
            idCategory: 5,
            idBrand: 1
        },
        {
            name: "Adidas NMD",
            description: "Stylish sneakers with Boost cushioning and a modern design.",
            price: 160.00,
            stock: 30,
            idCategory: 5,
            idBrand: 2
        },
        {
            name: "Puma Future Rider",
            description: "Retro running-inspired sneakers with a lightweight feel.",
            price: 100.00,
            stock: 35,
            idCategory: 5,
            idBrand: 3
        },
        {
            name: "Reebok Zig Kinetica",
            description: "Innovative sneakers with Zig Energy Shell for comfort and style.",
            price: 140.00,
            stock: 20,
            idCategory: 5,
            idBrand: 4
        },
        {
            name: "Under Armour Project Rock",
            description: "Training shoes designed for performance and durability.",
            price: 150.00,
            stock: 25,
            idCategory: 4,
            idBrand: 5
        },
        {
            name: "New Balance 574",
            description: "Classic sneakers with a retro design and comfortable fit.",
            price: 90.00,
            stock: 55,
            idCategory: 5,
            idBrand: 6
        },
        {
            name: "Asics Gel-Quantum",
            description: "High-performance running shoes with Gel cushioning for support.",
            price: 180.00,
            stock: 30,
            idCategory: 5,
            idBrand: 7
        },
        {
            name: "Fila Venom",
            description: "Bold sneakers with a chunky silhouette and vibrant colors.",
            price: 100.00,
            stock: 40,
            idCategory: 5,
            idBrand: 8
        },
        {
            name: "Skechers Flex Advantage",
            description: "Comfortable sneakers with a flexible design for everyday wear.",
            price: 85.00,
            stock: 60,
            idCategory: 5,
            idBrand: 9
        },
        {
            name: "Converse Chuck Taylor All Star High Top",
            description: "High-top version of the classic canvas sneakers.",
            price: 70.00,
            stock: 70,
            idCategory: 5,
            idBrand: 10
        },
        {
            name: "Vans Authentic",
            description: "Classic low-top skate shoes with a simple design.",
            price: 65.00,
            stock: 80,
            idCategory: 5,
            idBrand: 11
        },
        {
            name: "Hoka One One Speedgoat",
            description: "Trail running shoes with maximum cushioning and grip.",
            price: 170.00,
            stock: 25,
            idCategory: 5,
            idBrand: 12
        }
    ];
    for (const product of products) {
        const existingProduct = await prisma.product.findFirst({
            where: { 
                name: product.name,
                idBrand: product.idBrand,
             }
        });
        if (!existingProduct) {
            await prisma.product.create({
                data: product
            });
        }
    }
    console.log("Products seeded successfully");
}