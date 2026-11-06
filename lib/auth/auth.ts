import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable.");
}

declare global {
    var mongoClient: MongoClient | undefined;
}

const client = globalThis.mongoClient ?? new MongoClient(MONGODB_URI);

if (process.env.NODE_ENV !== "production") {
    globalThis.mongoClient = client;
}

const db = client.db()


export const auth = betterAuth({
    database: mongodbAdapter(db,{  //here pass database instance and client
        client,
    }),
    //we will use email and password authentication
    emailAndPassword  :{
        enabled:true
    }            
})

export async function getSession(){
  const result = await auth.api.getSession({
    headers:await headers(),
  });

  return result
}
export async function signOut(){
  const result = await auth.api.signOut({
    headers:await headers(),
  });

  if(result.success){
    redirect("/sign-in")
  }
}