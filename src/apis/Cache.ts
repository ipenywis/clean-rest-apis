import { NextFunction, Request, Response } from "express";
import app from "../app";

// ❌ Bad

// NOT USING CACHE AT ALL OR NOT USING IT PROPERLY!!!

// ✅ Good

const setCache = function (req: Request, res: Response, next: NextFunction) {
  // Keep cahce for 5 minutes (in seconds)
  const period = 60 * 5;

  // you only want to cache for GET requests
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    // for the other requests set strict no caching parameters
    res.set("Cache-control", `no-store`);
  }

  // remember to call next() to pass on the request
  next();
};

app.use(setCache);
