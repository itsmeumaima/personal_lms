import { db } from "@/configs/db";
import { inngest } from "./client";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm"; 

const extractNameFromEmail = (email) => {
  if (!email) return "Unknown User";
  return email.split("@")[0].replace(/[^a-zA-Z ]/g, " ");
};

export const CreateNewUser = inngest.createFunction(
  { id: "create-user" },
  { event: "user.create" },
  async ({ event, step }) => {
    const { user } = event.data;

    const result = await step.run('Check user and create new if not in db', async () => {
      const existingUser = await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

      console.log("Existing user check:", existingUser);

      if (existingUser.length === 0) {
        console.log("Received user data:", user);
        console.log("Extracted Name:", user?.fullName);
        console.log("Extracted Email:", user?.primaryEmailAddress?.emailAddress);

        const userName = user?.fullName?.trim() || extractNameFromEmail(user?.primaryEmailAddress?.emailAddress);

        const userResp = await db.insert(USER_TABLE).values({
          name: userName,
          email: user?.primaryEmailAddress?.emailAddress
        }).returning({ id: USER_TABLE.id });

        console.log("Inserted user:", userResp);
        return userResp;
      }
      return existingUser;
    });

    return "Success";
  }
);
