import { NextFunction, Request, Response } from 'express'

export const getHealth = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  Promise.resolve({})
    .then(() => res.json({ status: 'ok' }))
    .catch(next)
}
