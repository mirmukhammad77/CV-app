import { ArrowDown, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const technologies = [
    "Full-Stack Development",
    "TypeScript",
    "React",
    "Node.js",
    "Nest.js",
    "Database Modeling",
    "Automated Testing (Jest, Playwright)",
    "Third-Party API Integration",
    "Docker",
    "CI/CD with GitHub Actions"
];

function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-16"
        >
            <div className="space-y-6">
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-emerald-700"
                    />
                    Based in Tashkent, Uzbekistan
                </p>

                <div className="space-y-4">
                    <h1
                        id="hero-heading"
                        className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Mirmukhammad
                        <br />
                        Mirxamidov
                    </h1>

                    <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
                        Full-Stack Software Engineer
                    </p>
                </div>

                <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                    I build web applications with React, TypeScript, Node.js and NestJS.
                    I enjoy creating intuitive interfaces and reliable APIs.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                    <a
                        href="#projects"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "h-12 gap-3 rounded-xl bg-emerald-900 px-7 text-base text-white hover:bg-emerald-800",
                        )}
                    >
                        View projects
                        <ArrowDown className="size-4" aria-hidden="true" />
                    </a>

                    <a
                        href="https://github.com/mirmukhammad77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "h-12 gap-3 rounded-xl px-7 text-base",
                        )}
                    >
                        <FaGithub className="size-5" aria-hidden="true" />
                        GitHub
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>
            </div>

            <Card className="w-full max-w-md justify-self-center border-border bg-muted/30 shadow-none lg:justify-self-end">
                <CardContent className="flex flex-col items-center px-6 py-10 text-center sm:px-8">
                    <div
                        aria-hidden="true"
                        className="mb-6 flex size-28 items-center justify-center rounded-full bg-emerald-900/10 text-4xl font-bold tracking-tight text-emerald-900"
                    >
                        MM
                    </div>

                    <h2 className="text-lg font-semibold tracking-tight">
                        Mirmukhammad Mirxamidov
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        Full-Stack Software Engineer
                    </p>

                    <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-4" aria-hidden="true" />
                        Tashkent, Uzbekistan
                    </p>

                    <div className="mt-8 flex w-full flex-wrap justify-center gap-2 border-t border-border pt-6">
                        {technologies.map((technology) => (
                            <Badge
                                key={technology}
                                variant="secondary"
                                className="px-3 py-1 font-medium"
                            >
                                {technology}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default Hero;