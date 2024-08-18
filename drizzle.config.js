/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://sparklescriptdb_owner:ITXdPn5eoL2g@ep-square-star-a5tprdds.us-east-2.aws.neon.tech/sparklescriptdb?sslmode=require',
    }
  };