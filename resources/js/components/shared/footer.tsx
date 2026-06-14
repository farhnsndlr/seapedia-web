
export default function Footer() {
    return (
        <footer className="border-t py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                    <div>
                        <h3 className="font-semibold">SEAPEDIA</h3>
                        <p className="text-sm text-muted-foreground">
                            Modern Multi Role Marketplace Platform
                        </p>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        © 2026 SEAPEDIA
                    </div>
                </div>
            </div>
        </footer>
    );
}
