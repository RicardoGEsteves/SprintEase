import { z } from "zod";
import { Board } from "@prisma/client";

import { TActionState } from "@/lib/create-safe-action";

import { DeleteBoard } from "./schema";

export type TInputType = z.infer<typeof DeleteBoard>;
export type TReturnType = TActionState<TInputType, Board>;
