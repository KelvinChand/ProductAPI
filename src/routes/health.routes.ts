import { Router, type Request, type Response, type NextFunction } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Health check success')
  res
    .status(200)
    .send({ status: true, statusCode: '200', message: 'Server Status Is Good' })
})
