import { Request, Response } from 'express';

export const healthCheck = async (req:Request, res:Response) => {
  try {
    // Simulate a health check operation
    const status = {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
    
    res.status(200).json(status);
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({ status: 'error', message: 'Health check failed' });
  }
}