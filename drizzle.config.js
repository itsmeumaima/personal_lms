import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_ZlheHEibA2G9@ep-fragrant-star-a8xuxbfj-pooler.eastus2.azure.neon.tech/AI-Study-material-gen?sslmode=require'
  }
});
