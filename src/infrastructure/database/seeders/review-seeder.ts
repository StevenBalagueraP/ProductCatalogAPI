import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedReviews = async () => {
    const reviews = [
        {
            rating: 5,
            comment: "Excellent product, highly recommend!",
            idUser: 1,
            idProduct: 1
        },
        {
            rating: 4,
            comment: "Very good quality, but a bit expensive.",
            idUser: 2,
            idProduct: 2
        },
        {
            rating: 3,
            comment: "Average experience, nothing special.",
            idUser: 3,
            idProduct: 3
        },
        {
            rating: 2,
            comment: "Not satisfied with the product quality.",
            idUser: 4,
            idProduct: 4
        },
        {
            rating: 1,
            comment: "Terrible experience, will not buy again.",
            idUser: 5,
            idProduct: 5
        },
        {
            rating: 5,
            comment: "Absolutely love these shoes, very comfortable!",
            idUser: 1,
            idProduct: 6
        },
        {
            rating: 4,
            comment: "Great value for the price, would buy again.",
            idUser: 2,
            idProduct: 7
        },
        {
            rating: 3,
            comment: "Decent product, but expected better quality.",
            idUser: 3,
            idProduct: 8
        },
        {
            rating: 2,
            comment: "Not worth the money, disappointing.",
            idUser: 4,
            idProduct: 9
        },
        {
            rating: 1,
            comment: "Worst purchase ever, do not recommend.",
            idUser: 5,
            idProduct: 10
        },
        {
            rating: 5,
            comment: "Fantastic shoes, exceeded my expectations!",
            idUser: 1,
            idProduct: 11
        },
        {
            rating: 4,
            comment: "Good quality and comfortable fit.",
            idUser: 2,
            idProduct: 12
        },
        {
            rating: 3,
            comment: "Average performance, nothing extraordinary.",
            idUser: 3,
            idProduct: 13
        },
        {
            rating: 2,
            comment: "Not impressed with the quality.",
            idUser: 4,
            idProduct: 14
        },
        {
            rating: 1,
            comment: "Extremely disappointed with this purchase.",
            idUser: 5,
            idProduct: 15
        },
        {
            rating: 5,
            comment: "Best shoes I've ever owned, highly recommend!",
            idUser: 1,
            idProduct: 16
        },
        {
            rating: 4,
            comment: "Very comfortable and stylish.",
            idUser: 2,
            idProduct: 17
        },
        {
            rating: 3,
            comment: "Good quality, but a bit pricey.",
            idUser: 3,
            idProduct: 18
        },
        {
            rating: 2,
            comment: "Not worth the hype, average product.",
            idUser: 4,
            idProduct: 19
        },
        {
            rating: 1,
            comment: "Terrible quality, do not buy!",
            idUser: 5,
            idProduct: 20
        },
        {
            rating: 5,
            comment: "Amazing shoes, very comfortable and stylish!",
            idUser: 1,
            idProduct: 21
        },
        {
            rating: 4,
            comment: "Good quality and great fit.",
            idUser: 2,
            idProduct: 22
        },
        {
            rating: 3,
            comment: "Decent product, but expected more.",
            idUser: 3,
            idProduct: 23
        },
        {
            rating: 2,
            comment: "Not satisfied with the quality.",
            idUser: 4,
            idProduct: 24
        },
        {
            rating: 1,
            comment: "Very disappointed with this purchase.",
            idUser: 5,
            idProduct: 25
        },
        {
            rating: 5,
            comment: "Excellent shoes, very comfortable and stylish!",
            idUser: 1,
            idProduct: 26
        },
        {
            rating: 4,
            comment: "Good quality and great fit.",
            idUser: 2,
            idProduct: 27
        },
        {
            rating: 3,
            comment: "Decent product, but expected more.",
            idUser: 3,
            idProduct: 28
        },
        {
            rating: 2,
            comment: "Not satisfied with the quality.",
            idUser: 4,
            idProduct: 29
        },
        {
            rating: 1,
            comment: "Very disappointed with this purchase.",
            idUser: 5,
            idProduct: 30
        },
        {
            rating: 5,
            comment: "Fantastic shoes, very comfortable and stylish!",
            idUser: 1,
            idProduct: 31
        },
        {
            rating: 4,
            comment: "Great quality and fit.",
            idUser: 2,
            idProduct: 32
        },
        {
            rating: 3,
            comment: "Good product, but expected more.",
            idUser: 3,
            idProduct: 33
        },
        {
            rating: 2,
            comment: "Not satisfied with the quality.",
            idUser: 4,
            idProduct: 34
        },
        {
            rating: 1,
            comment: "Very disappointed with this purchase.",
            idUser: 5,
            idProduct: 35
        },
        {
            rating: 5,
            comment: "Best shoes ever, very comfortable and stylish!",
            idUser: 1,
            idProduct: 36
        }
    ];

    for (const review of reviews) {
        const existingReview = await prisma.review.findFirst({
            where: {
                idUser: review.idUser,
                idProduct: review.idProduct
            }
        });
        if (!existingReview) {
            await prisma.review.create({
                data: review
            });
        }
    }
    console.log("Reviews seeded successfully");
};
