import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission } from "@shared/schema";
// Temporarily commented out for development without database
// import { db } from "./db";
// import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

// Mock storage implementation for development without database
export class MockStorage implements IStorage {
  private users: User[] = [];
  private contactSubmissions: ContactSubmission[] = [];
  private nextUserId = 1;
  private nextSubmissionId = 1;

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: `user_${this.nextUserId}`,
      username: insertUser.username,
      password: insertUser.password,
    };
    this.nextUserId++;
    this.users.push(user);
    console.log('Mock: Created user:', user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const contactSubmission: ContactSubmission = {
      id: this.nextSubmissionId,
      firstName: submission.firstName,
      lastName: submission.lastName,
      email: submission.email,
      company: submission.company,
      message: submission.message,
      createdAt: new Date()
    };
    this.nextSubmissionId++;
    this.contactSubmissions.push(contactSubmission);
    console.log('Mock: Created contact submission:', contactSubmission);
    return contactSubmission;
  }
}

// Using mock storage instead of database
export const storage = new MockStorage();

// Commented out database storage for now
// export class DbStorage implements IStorage {
//   async getUser(id: string): Promise<User | undefined> {
//     const [user] = await db.select().from(users).where(eq(users.id, id));
//     return user;
//   }

//   async getUserByUsername(username: string): Promise<User | undefined> {
//     const [user] = await db.select().from(users).where(eq(users.username, username));
//     return user;
//   }

//   async createUser(insertUser: InsertUser): Promise<User> {
//     const [user] = await db.insert(users).values(insertUser).returning();
//     return user;
//   }

//   async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
//     const [result] = await db.insert(contactSubmissions).values(submission).returning();
//     return result;
//   }
// }

// export const storage = new DbStorage();
