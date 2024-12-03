import { Services } from "../enums/Services";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service?: Services;
  message: string;
};
