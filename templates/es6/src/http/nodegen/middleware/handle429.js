import http429 from '../errors/429'

/**
 * Required for if an too many request response should be thrown from a domain or controller
 * @returns {Function}
 */
export default () => {
  return (err, req, res, next) => {
    if (err instanceof http429) {
      res.status(429).send()
    } else {
      next(err)
    }
  }
}