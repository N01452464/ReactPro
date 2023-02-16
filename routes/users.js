import express, { Router } from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
//update tour
router.put('/:id',verifyUser,updateUser);
//delete tour
router.delete('/:id',verifyUser,deleteUser);
//get single tour
router.get('/:id',verifyUser , getSingleUser);
//get all tour
router.get('/',verifyAdmin ,getAllUser);
export default router