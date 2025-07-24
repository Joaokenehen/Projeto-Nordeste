import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class UserModel extends Model {
  id!: number;
  name!: string;
  password!: string;
  cpf!: string;
  email!: string;
  birth_date!: string;
} // Vai usar o use model para ter acesso aos metodos da classe model do sequelize

UserModel.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserModel",
    tableName: "users",
    timestamps: false,
  }
);

export default UserModel;
