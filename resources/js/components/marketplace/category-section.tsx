import { Category } from "@/types/category";

import {
    Smartphone,
    Shirt,
    Gamepad2,
    BookOpen,
    UtensilsCrossed,
    House,
    Dumbbell,
    Sparkles
} from "lucide-react";

interface CategorySectionProps {
    categories: Category[];
}

const iconMap = {
    Electronics: Smartphone,
    Fashion: Shirt,
    Gaming: Gamepad2,
    Books: BookOpen,
    Food: UtensilsCrossed,
    Beauty: Sparkles,
    Sports: Dumbbell,
    Home: House,
}

export default function CategorySection({
    categories,
}: CategorySectionProps) {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Shop by Category
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Explore products accross your favorite categories
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
                    {categories.map((category) => {
                        const Icon =
                            iconMap[
                                category.name as keyof typeof iconMap
                            ] ?? Smartphone;

                        return (
                            <button
                                key={category.name}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    bg-card
                                    p-5
                                    transition-all
                                    hover:-translate-y-1
                                    hover:border-primary/30
                                    hover:shadow-md
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-primary/10
                                        transition-colors
                                        group-hover:bg-primary
                                    "
                                >
                                    <Icon
                                        className="
                                            size-6
                                            text-primary
                                            transition-colors
                                            group-hover:text-white
                                        "
                                    />
                                </div>

                                <span
                                    className="
                                        text-sm
                                        font-medium
                                    "
                                >
                                    {category.name}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
