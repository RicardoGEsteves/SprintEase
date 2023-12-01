import { z } from "zod";
import { Board } from "@prisma/client";

import { TActionState } from "@/lib/create-safe-action";

import { CreateBoard } from "./schema";

export type TInputType = z.infer<typeof CreateBoard>;
export type TReturnType = TActionState<TInputType, Board>;
