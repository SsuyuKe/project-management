import { NextFunction, Request, Response } from 'express';

type AyncControllerType = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

export const asyncHandler =
  (controller: AyncControllerType): AyncControllerType =>
  async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
