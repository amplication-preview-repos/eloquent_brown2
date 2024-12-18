import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  owner?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
