import { z } from "zod";
import { List } from "@prisma/client";

import { TActionState } from "@/lib/create-safe-action";

import { CopyList } from "./schema";

export type TInputType = z.infer<typeof CopyList>;
export type TReturnType = TActionState<TInputType, List>;
