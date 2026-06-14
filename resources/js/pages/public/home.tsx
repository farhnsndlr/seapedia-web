import type { ComponentType } from "react";
import GuestLayout from "@/layouts/guest-layout";
import MarketplaceHero from "@/components/marketplace/marketplace-hero";
import CategorySection from "@/components/marketplace/category-section";

import { Category } from "@/types/category";

interface HomeProps {
    categories: Category[];
}

export default function Home({
    categories,
}: HomeProps) {
    return (
        <GuestLayout>
            <MarketplaceHero />
            <CategorySection
                categories={categories}
            />
        </GuestLayout>
    );
}

