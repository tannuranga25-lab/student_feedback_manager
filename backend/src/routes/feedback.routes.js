import express from 'express'
import  {createFeedback,  getFeedback } from '../controllers/feedback.controller.js';


const router = express.Router();
router.post('/feedback',createFeedback

//     (req,res)=>{
//     console.log(req.body);
//     res.json({
//         message: "Feedback recevied"
//     })


// })
);
router.get('/feedback',getFeedback)

export default router;
