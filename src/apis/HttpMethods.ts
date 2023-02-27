import { PrismaClient } from "@prisma/client";
import app, { router } from "../app";

const prisma = new PrismaClient();

// ❌ Bad

router.get("/users", (req, res) => {});

// router.get("/users/:id", (req, res) => {});

//Creating new User 🤦‍♂️
router.get("/users/new", (req, res) => {});

//Deleting User 🤦‍♂️
router.get("/users/delete", (req, res) => {});

//Deleting User 🤦‍♂️
router.get("/users/update", (req, res) => {});

// ✅ Good

router.get("/users", (req, res) => {});

//This meant to return, so it's a GET
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const drafts = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(drafts);
});

router.post("/users", (req, res) => {});
//The HTTP method is the deciding factor
router.delete("/users", (req, res) => {});

router.put("/users", (req, res) => {});
