import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { adminKeys } from "features/admin";

export const queryStore = mergeQueryKeys(adminKeys);
