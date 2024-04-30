import { roles } from "../../services/role.js";

export const  endpoint={
    deleteAppointment:[roles.Admin],
    showall:[roles.Admin]
}