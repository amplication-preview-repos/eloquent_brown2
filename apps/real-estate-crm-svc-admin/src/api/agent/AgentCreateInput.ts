import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  assignedProperties?: string | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
