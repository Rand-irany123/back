import {model,Schema} from 'mongoose'
const Appointmentschema=new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    courseType:{
        type:String,
        required:true
    },
    cartype:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})
const AppointmentModel=model('Appointment',Appointmentschema)
export {AppointmentModel}