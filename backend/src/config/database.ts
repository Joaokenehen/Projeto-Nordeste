import { Sequelize } from "sequelize";

const sequelize = new Sequelize("northway", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
