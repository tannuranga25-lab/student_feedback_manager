import mongoose from 'mongoose'
const feedbackSchema = new mongoose.Schema({
    "studentName":{
        type:String,
        required:true,
        trim: true,
        lowercase: true,
        minlength: 1,
        maxlength: 50

    },
    "rating":{
        type: Number,
        required: true,
        min: 1,
        max: 5

    },
    "message":{
        type: String,
        required: true,
        true:1,
        minlength: 1,
        maxlength: 500

    }




});
const Feedback = mongoose.model('feedback',feedbackSchema,'feedbacks');
export default Feedback