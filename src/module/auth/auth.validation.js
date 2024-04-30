import joi from "joi";
export const signup={
    body:joi.object({
        userName:joi.string().required().min(2).max(25).messages({
            'string.min': 'يجب ان يتكون اسم المستخدم  من حرفين على الاقل ',
            'string.max':'يجب أن يتكون اسم المستخدم من 25 حرفًا على الأكثر'
        }),
        email:joi.string().email().required().messages({
            'string.email':'يُرجى إدخال عنوان بريد إلكتروني صحيح'
        }),
        password:joi.string().required().messages({
            'string.min': 'يجب ان يتكون كلمة المرور من 7 حرفًا على الاقل ',
        })
    }).required()
}
export const signin={
    body:joi.object().required().keys({
        password:joi.string().required(),
        email:joi.string().email().required().messages({
            'string.email':'يُرجى إدخال عنوان بريد إلكتروني صحيح'
        }),
    })
}