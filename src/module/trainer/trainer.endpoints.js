import { roles } from "../../services/role.js";
export const endpoint={
    createtrainer:[roles.Admin],
    delete:[roles.Admin],
    update:[roles.Admin],
    search:[roles.User,roles.Admin],
    showAll:[roles.Admin,roles.User]
}