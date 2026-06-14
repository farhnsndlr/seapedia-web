import { ReactNode } from "react";
import AppLogo from "@/components/shared/app-logo";

interface Props {
    children: ReactNode;
}

export default function DashboardLayout({
    children,
}: Props) {
    return (
        <div className="min-h-screen flex">
            <aside className="hidden md:flex w-64 border-r p-4 flex-col">
                <AppLogo />
            </aside>

            <main className="flex-1 p-6 bg-muted/30">
                {children}
            </main>
        </div>
    );
}
