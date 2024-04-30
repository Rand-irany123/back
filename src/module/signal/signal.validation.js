import joi from 'joi'
export const createSignal={
    body:joi.object().required().keys({
        description:joi.string().min(10).max(500).required()
    })
}