import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    ShoppingBag,
    Store,
    Truck,
    Star,
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

            <div className="container mx-auto px-4">
                <div className="grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <Badge
                            variant="secondary"
                            className="mb-6 px-4 py-1"
                        >
                            Marketplace terpercaya untuk semua
                        </Badge>

                        <h1 className="max-w-2xl text-5xl font-bold tracking-tight md:text-7xl">
                            Belanja lebih mudah.
                            <br />
                            Jualan lebih berkembang.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                            Temukan ribuan produk dari seller
                            terpercaya, kelola pesanan dengan
                            mudah, dan nikmati pengalaman
                            marketplace yang modern.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg">
                                Mulai Belanja
                                <ArrowRight className="ml-2 size-4" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                            >
                                Buka Toko
                            </Button>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-8">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    10.000+
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Produk
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">
                                    500+
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Seller
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">
                                    4.9
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Rating
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        <div className="grid gap-4">
                            {/* Product */}
                            <div className="rounded-3xl border bg-card p-5 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                                        <ShoppingBag className="size-8 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold">
                                            Wireless Headphone
                                        </h3>

                                        <p className="text-sm text-muted-foreground">
                                            Audio Premium
                                        </p>

                                        <div className="mt-2 flex items-center gap-2">
                                            <Star className="size-4 fill-yellow-400 text-yellow-400" />

                                            <span className="text-sm">
                                                4.9
                                            </span>
                                        </div>
                                    </div>

                                    <div className="font-bold">
                                        Rp399K
                                    </div>
                                </div>
                            </div>

                            {/* Promo */}
                            <div className="rounded-3xl border bg-primary p-5 text-primary-foreground">
                                <p className="text-sm opacity-80">
                                    Promo Hari Ini
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    Diskon 25%
                                </h3>

                                <p className="mt-2 text-sm opacity-90">
                                    Untuk produk pilihan dari seller
                                    terpercaya.
                                </p>
                            </div>

                            {/* Bottom */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-3xl border bg-card p-5">
                                    <Store className="mb-3 size-8 text-primary" />

                                    <h4 className="font-semibold">
                                        Seller Aktif
                                    </h4>

                                    <p className="mt-1 text-2xl font-bold">
                                        500+
                                    </p>
                                </div>

                                <div className="rounded-3xl border bg-card p-5">
                                    <Truck className="mb-3 size-8 text-primary" />

                                    <h4 className="font-semibold">
                                        Pengiriman
                                    </h4>

                                    <p className="mt-1 text-2xl font-bold">
                                        24 Jam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
