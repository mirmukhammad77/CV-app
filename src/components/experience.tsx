import { BriefcaseBusiness, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "TanStack Query",
    "Redux",
    "vite",
    "Node.js",
    "Express.js",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
    "Drizzle ORM",
    "Prisma",
    "Sequelize migrations",
    "Jest",
    "Playwright",
    "Test integration",
    "Test Automation",
    "GitHub",
    "GitHub Actions",
    "Linux",
    "AWS infrastructure",
    "Terraform"
];

const contributions = [
    "Developed React interfaces and NestJS REST APIs for dental clinic and learning management platforms.",
    "Implemented appointment booking with availability checks, conflict prevention, and role-based access controls.",
    "Integrated Google Maps for clinic discovery and Telegram bots for patient authentication, notifications, and scheduled appointment reminders.",
    "Built lesson, lecture, and quiz management features with transactional reordering and soft deletion.",
    "Designed PostgreSQL schemas and maintained database migrations using Drizzle ORM, Prisma, and Sequelize.",
    "Integrated Amazon S3 for image storage, including upload management and orphaned file cleanup.",
    "Wrote Jest unit tests and Playwright end-to-end tests to validate business logic and application workflows.",
    "Collaborated through code reviews, Git workflows, and Agile development practices.",
];

function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="scroll-mt-24"
        >
            <Card className="shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900">
                            <BriefcaseBusiness
                                className="size-5"
                                aria-hidden="true"
                            />
                        </span>

                        <h2
                            id="experience-heading"
                            className="text-xl font-semibold"
                        >
                            Experience
                        </h2>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <article className="flex flex-col gap-5 sm:flex-row">
                        <div
                            aria-hidden="true"
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl border bg-muted text-lg font-bold"
                        >
                            V
                        </div>

                        <div className="min-w-0 flex-1 space-y-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Vention
                                    </h3>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        FullStack software engineer 
                                    </p>
                                </div>

                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <MapPin
                                        className="size-4 shrink-0"
                                        aria-hidden="true"
                                    />
                                    Tashkent, Uzbekistan
                                </span>
                            </div>

                            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-emerald-700">
                                {contributions.map((contribution) => (
                                    <li key={contribution}>{contribution}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 border-t pt-5">
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
                        </div>
                    </article>
                </CardContent>
            </Card>
        </section>
    );
}

export default Experience;