import { TriangleAlert } from "lucide-react";

interface FormErrorProps {
    message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="w-full bg-destructive/15 px-3 py-2 mt-5 rounded-md flex items-center gap-x-2 text-sm text-destructive max-w-4xl">
            <TriangleAlert className="h-4 w-4" />
            <p>{message}</p>
        </div>
    )
};

export default FormError;