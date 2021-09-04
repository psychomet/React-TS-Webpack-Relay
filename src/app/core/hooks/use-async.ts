import {useCallback, useEffect, useState} from "react";

export const useAsync = <T, E = string>(
    asyncFunction: (data: any) => Promise<T>,
    immediate = true
) => {
    const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
    const [value, setValue] = useState<T | any>(null);
    const [error, setError] = useState<E | null>(null);
    const execute = useCallback((data) => {
        setStatus("pending");
        setValue(null);
        setError(null);
        return asyncFunction(data)
            .then((response: any) => {
                setValue(response);
                setStatus("success");
            })
            .catch((error: any) => {
                setError(error);
                setStatus("error");
            });
    }, [asyncFunction]);
    useEffect(() => {
        if (immediate) {
            // execute(data);
        }
    }, [execute, immediate]);
    return {execute, status, value, error};
};
