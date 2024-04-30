import { roles } from "../../services/role.js";
export const endpoint={
    createquestion:[roles.Admin],
    delete:[roles.Admin],
    update:[roles.Admin],
    showAll:[roles.Admin,roles.User]
}