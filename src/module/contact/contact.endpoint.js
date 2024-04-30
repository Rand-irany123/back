import { roles } from "../../services/role.js";

export const endpoint={
    deletContact:[roles.Admin],
    showContact:[roles.Admin]
}