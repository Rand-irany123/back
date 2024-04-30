import { roles } from "../../services/role.js";
export const endpoint={
   
   
 
    search:[roles.User,roles.Admin],
    showAll:[roles.Admin,roles.User]
}