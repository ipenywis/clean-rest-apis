import { PrismaClient } from "@prisma/client";
import { router } from "../app";

const prisma = new PrismaClient();

// ❌ Bad

router.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: { author: true },
  });

  res.json(posts);
});

// ✅ Good

router.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    //Include the needed info to reduce the number of HTTP Requests
    //This will fetch the author object and put it in the response
    include: { author: true },
  });

  res.json(posts);
});
