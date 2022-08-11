import { buildSchema } from "graphql";
import { readFileSync } from "fs";

export const schema = buildSchema(
  readFileSync("./schema.gql").toString("utf-8")
);

export const root = {
  // Case One
  numbersCaseOneNull: () => {
    throw new Error("Cant connect to shopify");
  },
  numbersCaseOneEmptyArray: () => {
    return [];
  },
  numbersCaseOneIntArray: () => {
    return [1, undefined];
  },
  numbersCaseOneNullArray: () => {
    return [null];
  },

  // Case Two
  numbersCaseTwoNull: () => {
    throw new Error("Cant connect to shopify");
  },
  numbersCaseTwoEmptyArray: () => {
    return [];
  },
  numbersCaseTwoIntArray: () => {
    return [1];
  },
  numbersCaseTwoNullArray: () => {
    return [null];
  },

  // Case Three
  numbersCaseThreeNull: () => {
    return null;
  },
  numbersCaseThreeEmptyArray: () => {
    return [];
  },
  numbersCaseThreeIntArray: () => {
    return [1];
  },
  numbersCaseThreeNullArray: () => {
    return [null];
  },

  // Real Use Case One
  userCaseOne: {
    nameOne: () => {
      return "Fred";
    },
    photoOne: () => {
      throw new Error("Could not connect to S3");
    },
  },

  // Real Use Case Two
  userCaseTwo: {
    nameTwo: () => {
      return "Fred";
    },
    photoTwo: () => {
      throw new Error("Could not connect to S3");
    },
  },
};
