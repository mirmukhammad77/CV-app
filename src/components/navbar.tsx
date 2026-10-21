import { useState } from "react";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-border bg-background">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6 md:px-10"
            >
                <a
                    href="#home"
                    className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                >
                    <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-sm font-bold tracking-tight text-white"
                    >
                        MM
                    </span>

                    <span className="truncate text-lg font-semibold tracking-tight">
                        Mirmukhammad
                    </span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {links.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={cn(
                                    buttonVariants({
                                        variant: label === "Contact" ? "outline" : "ghost",
                                    }),
                                    label === "Contact"
                                        ? "ml-3 h-11 rounded-xl px-6 text-base"
                                        : "text-muted-foreground hover:text-emerald-900",
                                )}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger
                        className={cn(
                            buttonVariants({ variant: "outline", size: "icon" }),
                            "shrink-0 md:hidden",
                        )}
                        aria-label="Open navigation"
                    >
                        <Menu className="size-5" aria-hidden="true" />
                    </SheetTrigger>

                    <SheetContent side="right" className="w-72">
                        <SheetHeader>
                            <SheetTitle>Mirmukhammad</SheetTitle>
                            <SheetDescription>
                                Explore my experience, projects, and skills.
                            </SheetDescription>
                        </SheetHeader>

                        <nav aria-label="Mobile navigation" className="px-4 pb-6">
                            <ul className="space-y-2">
                                {links.map(({ label, href }) => (
                                    <li key={href}>
                                        <a
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                buttonVariants({ variant: "ghost" }),
                                                "w-full justify-start",
                                            )}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}

export default Navbar;