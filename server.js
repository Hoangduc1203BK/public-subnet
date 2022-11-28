import Express from "express";
import dotenv from "dotenv";
import { UserAPI } from "./router/user/user.api.js";

const Main = async () => {
  dotenv.config();

  const app = new Express();
  const port = process.env.PORT || 3010;
  app.use(Express.json());

  app.use('/user', UserAPI())

  app.get("/get-private-data", (req, res) => {
    res.json("1");
  });

  app.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log("App listening on port ", port);
  });
};
Main().catch((err) => console.log(err));
