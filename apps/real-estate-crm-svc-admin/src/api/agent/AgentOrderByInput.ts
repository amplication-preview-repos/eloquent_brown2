import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  assignedProperties?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
