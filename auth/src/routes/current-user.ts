import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import checkCurrentUser from '../middleware/checkCurrentUser';
import checkAuthenticated from '../middleware/checkAuthenticated';
router.get('/api/users/currentuser', checkCurrentUser, (req, res) => {
  return res.send({ currentUser: req.currentUser || null });
});

export { router as CurrentUserRouter };
