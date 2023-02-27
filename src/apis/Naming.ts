import app, { router } from "../app";

// ❌ Bad

//Don't use verbs
router.get("/getPosts", (req, res) => {});

//Split to use params
router.get("/postsById", (req, res) => {});

//Prepend version
router.get("/postsByIdV1", (req, res) => {});

//Prepend version
router.get("/posts-ForUsers", (req, res) => {});

router.get("/storeinventory", (req, res) => {});

// ✅ Good

//Pluralized nouns for resources
router.get("/posts", (req, res) => {});

router.get("/posts/:id", (req, res) => {});

//Use forward slash (/) to indicate hierarchical relationships
router.get("/posts/:id/user", (req, res) => {});

router.get("/posts/:id/user", (req, res) => {});

//Easier to read
router.get("/store-inventory", (req, res) => {});
