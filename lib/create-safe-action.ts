import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<Input, Output> = {
  fieldErrors?: FieldErrors<Input>;
  error?: string | null;
  data?: Output;
};

export const createSafeAction = <Input, Output>(
  schema: z.Schema<Input>,
  handler: (validatedData: Input) => Promise<ActionState<Input, Output>>
) => {
  return async (data: Input): Promise<ActionState<Input, Output>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<Input>,
      };
    }

    return handler(validationResult.data);
  };
};
