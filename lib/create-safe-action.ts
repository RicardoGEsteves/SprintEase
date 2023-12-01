import { z } from "zod";

export type TFieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type TActionState<TInput, TOutput> = {
  fieldErrors?: TFieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<TActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<TActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as TFieldErrors<TInput>,
      };
    }

    return handler(validationResult.data);
  };
};
