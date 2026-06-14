import { Store } from "lucide-react";

export default function AppLogo() {
    return (
        <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                <Store className="size-4" />
            </div>

            <span className="font-bold tracking-tight">
                SEAPEDIA
            </span>
        </div>
    );
}
