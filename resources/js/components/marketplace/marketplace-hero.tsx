import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const campaigns = [
    {
        badge: "Flash Sale",
        title: "Up to 70% Off",
        description:
            "Discover limited-time deals from top sellers.",
        gradient:
            "from-orange-500 via-red-500 to-pink-500",
    },
    {
        badge: "Free Shipping",
        title: "Shipping on Us",
        description:
            "Enjoy free delivery across thousands of products.",
        gradient:
            "from-sky-500 via-blue-500 to-indigo-600",
    },
    {
        badge: "New Arrivals",
        title: "Fresh Products",
        description:
            "Explore newly added products from growing stores.",
        gradient:
            "from-emerald-500 via-green-500 to-lime-500",
    },
];

export default function MarketplaceHero() {
    const [api, setApi] =
    useState<CarouselApi>();

    const [current, setCurrent] =
        useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        onSelect();

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <section className="py-6">
            <div className="container mx-auto px-4">
                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                        opts={{
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {campaigns.map((campaign) => (
                                <CarouselItem
                                    key={campaign.title}
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${campaign.gradient}`}
                                    >
                                        <div className="grid min-h-[380px] items-center gap-8 p-10 lg:grid-cols-2">
                                            {/* Left */}
                                            <div className="text-white">
                                                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                                                    Limited Campaign
                                                </span>

                                                <h1 className="mt-6 text-4xl font-bold md:text-6xl">
                                                    {campaign.title}
                                                </h1>

                                                <p className="mt-4 max-w-md text-lg text-white/90">
                                                    {campaign.description}
                                                </p>

                                                <Button
                                                    size="lg"
                                                    variant="secondary"
                                                    className="mt-8"
                                                >
                                                    Shop Now

                                                    <ArrowRight className="ml-2 size-4" />
                                                </Button>
                                            </div>

                                            {/* Right */}
                                            <div className="hidden lg:flex items-center justify-center">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">
                                                        <div className="h-24 rounded-2xl bg-white/20" />

                                                        <h3 className="mt-4 font-semibold text-white">
                                                            Wireless Headphones
                                                        </h3>

                                                        <p className="text-white/80">
                                                            Rp399K
                                                        </p>
                                                    </div>

                                                    <div className="rounded-3xl bg-white/15 p-6 backdrop-blur">
                                                        <div className="h-24 rounded-2xl bg-white/20" />

                                                        <h3 className="mt-4 font-semibold text-white">
                                                            Sneakers
                                                        </h3>

                                                        <p className="text-white/80">
                                                            Rp699K
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative */}
                                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

                                        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="
                                left-4
                                hidden
                                lg:flex
                                h-12
                                w-12
                                border-0
                                bg-background/90
                                shadow-lg
                                backdrop-blur
                            "
                        />
                        <CarouselNext
                            className="
                                right-4
                                hidden
                                lg:flex
                                h-12
                                w-12
                                border-0
                                bg-background/90
                                shadow-lg
                                backdrop-blur
                            "
                        />
                    </Carousel>
                </div>
                <div className="mt-6 flex justify-center gap-2">
                    {campaigns.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`transition-all duration-300 rounded-full ${
                                current === index
                                    ? "h-2 w-8 bg-primary"
                                    : "h-2 w-2 bg-muted"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
