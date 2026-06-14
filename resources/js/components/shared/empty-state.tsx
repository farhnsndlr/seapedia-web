import { ReactNode } from "react";

interface Props {
    title: string;
    description: string;
    icon?: ReactNode;
}

export default function EmptyState({
    title,
    description,
    icon,
}: Props) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            {icon}

            <h3 className="mt-4 text-xl font-semibold">
                {title}
            </h3>

            <p className="text-muted-foreground mt-2">
                {description}
            </p>
        </div>
    );
}
