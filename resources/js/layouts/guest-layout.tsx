import { ReactNode } from "react";

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

interface Props {
    children: ReactNode;
}

export default function GuestLayout({
    children,
}: Props) {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
