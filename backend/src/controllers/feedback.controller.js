import Feedback from '../models/feedback.model.js'

export async function createFeedback(req,res){

    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({
            message: "Feedback created successfully"
        });  
    } catch (error) {
        res.status(500).json({
            message: "Failed to create feedback"
        })
        
    }
    
}



export async function getFeedback(req,res) {
    try {

    const feedbacks = await Feedback.find();
    res.status(200).json({
        feedbacks
    });
  
    } catch (error) {
        res.status(500).json({
            message: "Failed "
        })
        
    }
    
}