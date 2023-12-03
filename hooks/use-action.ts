import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action";

type Action<Input, Output> = (
  data: Input
) => Promise<ActionState<Input, Output>>;

interface UseActionOptions<Output> {
  onSuccess?: (data: Output) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <Input, Output>(
  action: Action<Input, Output>,
  options: UseActionOptions<Output> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<Input> | undefined
  >(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<Output | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (input: Input) => {
      setIsLoading(true);

      try {
        const result = await action(input);

        if (!result) {
          return;
        }

        setFieldErrors(result.fieldErrors);

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [action, options]
  );

  return {
    execute,
    fieldErrors,
    error,
    data,
    isLoading,
  };
};
