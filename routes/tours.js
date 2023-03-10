
import  express  from "express";
import { createTour,updateTour,deleteTour,getAllTour,getSingleTour, getTourBySearch, getFeaturedTour, getTourCount } from "../controllers/tourContoller.js";

const router = express.Router()
import { verifyAdmin } from "../utils/verifyToken.js";

//create new tour
router.post('/',verifyAdmin,createTour);
//update tour
router.put('/:id',verifyAdmin,updateTour);
//delete tour
router.delete('/:id',verifyAdmin,deleteTour);
//get single tour
router.get('/:id',getSingleTour);
//get all tour
router.get('/',getAllTour);
//get tour by search
router.get("/search/getTourBySearch",getTourBySearch);
//get tour by search
router.get("/search/getFeaturedTours",getFeaturedTour);

router.get("/search/getTourCount",getTourCount);

export default router;