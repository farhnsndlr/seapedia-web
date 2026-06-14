import AppLogo from "./app-logo";
import { Link } from "@inertiajs/react";
import { Search, ShoppingCart, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center gap-4">
                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="left">
                                <div className="mt-8 flex flex-col gap-4">
                                    <Link href="/">
                                        Home
                                    </Link>

                                    <Link href="/products">
                                        Products
                                    </Link>

                                    <Link href="/reviews">
                                        Reviews
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="shrink-0"
                    >
                        <AppLogo />
                    </Link>

                    {/* Search */}
                    <div className="hidden flex-1 lg:block">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search products..."
                                className="pl-10"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 lg:flex">
                        <Link
                            href="/products"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Products
                        </Link>

                        <Link
                            href="/reviews"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Reviews
                        </Link>
                    </nav>

                    {/* Cart */}
                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <ShoppingCart className="size-5" />
                    </Button>

                    {/* Auth */}
                    <div className="hidden gap-2 sm:flex">
                        <Button
                            variant="ghost"
                            asChild
                        >
                            <Link href="/login">
                                Login
                            </Link>
                        </Button>

                        <Button asChild>
                            <Link href="/register">
                                Register
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="pb-4 lg:hidden">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Search products..."
                            className="pl-10"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
