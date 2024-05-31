import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  assignedProperties?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
