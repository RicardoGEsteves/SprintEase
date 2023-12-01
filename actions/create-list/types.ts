import { z } from "zod";
import { List } from "@prisma/client";

import { TActionState } from "@/lib/create-safe-action";

import { CreateList } from "./schema";

export type TInputType = z.infer<typeof CreateList>;
export type TReturnType = TActionState<TInputType, List>;
