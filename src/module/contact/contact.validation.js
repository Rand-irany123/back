import joi from 'joi'
export const addContact={
    body:joi.object().required().keys({
        userName:joi.string().min(3).max(10).required(),
        email:joi.string().email().required(),
        subject:joi.string().min(10).max(50).required(),
        letter:joi.string().min(10).max(50).required()

    })
}