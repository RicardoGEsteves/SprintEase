import { z } from "zod";
import { List } from "@prisma/client";

import { TActionState } from "@/lib/create-safe-action";

import { DeleteList } from "./schema";

export type TInputType = z.infer<typeof DeleteList>;
export type TReturnType = TActionState<TInputType, List>;
