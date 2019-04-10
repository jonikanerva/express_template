import { NextFunction, Request, Response } from 'express'

export const getHealth = (_req: Request, res: Response, next: NextFunction) =>
  Promise.resolve()
    .then(() => Math.floor(Math.random() * Math.floor(3)))
    .then(
      (random: number): any => {
        switch (random) {
          case 0:
            return Promise.reject('promise failed!')
          case 1:
            throw new Error('exception happened!')
          default:
            res.json({ status: 'ok' })
        }
      }
    )
    .catch(next)
