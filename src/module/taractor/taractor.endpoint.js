import { roles } from "../../services/role.js";
export const endpoint={
    createquetion:[roles.Admin],
    delet:[roles.Admin],
    update:[roles.Admin],
    show:[roles.Admin,roles.User]
}

