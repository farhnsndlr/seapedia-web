import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    description?: string;
}

export default function AuthLayout({
    children,
    title,
    description,
}: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">{title}</h1>

                    {description && (
                        <p className="text-muted-foreground mt-2">
                            {description}
                        </p>
                    )}
                </div>

                {children}
            </div>
        </div>
    );
}
