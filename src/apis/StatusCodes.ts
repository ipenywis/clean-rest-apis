import { Prisma, PrismaClient } from "@prisma/client";
import app, { router } from "../app";

const prisma = new PrismaClient();

// ❌ Bad

router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw Error();
    const post = await prisma.post.findFirstOrThrow({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ post });
  } catch (err) {
    //Wrong code (400 = BAD Request)
    res.status(404).json({ message: "No posts found with provided id" });
  }
});

// ✅ Good

router.get("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw Error();
    console.log("Here: ", id);
    const post = await prisma.post.findFirstOrThrow({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ post });
  } catch (err) {
    //404 for Not Found
    res.status(404).json({ message: "No posts found with provided id" });
  }
});
