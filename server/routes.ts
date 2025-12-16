import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ success: true, id: submission.id });
    } catch (error: any) {
      if (error.name === 'ZodError') {
        const validationError = fromError(error);
        res.status(400).json({ 
          success: false, 
          error: validationError.toString() 
        });
      } else {
        console.error('Contact submission error:', error);
        res.status(500).json({ 
          success: false, 
          error: 'Failed to submit contact form' 
        });
      }
    }
  });

  return httpServer;
}
