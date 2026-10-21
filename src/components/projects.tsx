import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Project = {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    href?: string;
};

const projects: Project[] = [
    {
        title: "Learning Management System",
        category: "Team project · Vention Labs",
        description:
            "Contributed to backend features for managing lessons, lectures, and quizzes, including content updates, reordering, and database migrations.",
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Drizzle"],
        href: "https://github.com/vention-js-lab/vn-lms-service",
    },
    {
        title: "Dental Management System",
        category: "Team project · Vention Labs",
        description:
            "Implemented appointment booking, patient authentication with one-time passwords, and Telegram notifications and reminders.",
        technologies: ["NestJS", "PostgreSQL", "Prisma", "Telegram Bot API"],
        href: "https://github.com/mirmukhammad457?tab=repositories",
    },
    {
        title: "AI Chatbot",
        category: "Personal project · In development",
        description:
            "Building an AI chat application. Implemented authentication, refresh token rotation, session management, and the database schema for conversations and messages.",
        technologies: ["NestJS", "TypeScript", "PostgreSQL", "Drizzle"],
        href: "https://github.com/mirmukhammad77/ai-chatbot",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="scroll-mt-24 space-y-6"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900">
                        <FolderGit2 className="size-5" aria-hidden="true" />
                    </span>

                    <div>
                        <h2
                            id="projects-heading"
                            className="text-xl font-semibold"
                        >
                            Selected projects
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Team contributions and personal work.
                        </p>
                    </div>
                </div>

                <a
                    href="https://github.com/mirmukhammad77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "gap-2 self-start text-emerald-900",
                    )}
                >
                    <FaGithub className="size-5" aria-hidden="true" />
                    My GitHub
                    <span className="sr-only">(opens in a new tab)</span>
                </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        className="flex h-full flex-col shadow-none transition-shadow hover:shadow-md"
                    >
                        <CardHeader className="space-y-3">
                            <p className="text-xs font-medium text-muted-foreground">
                                {project.category}
                            </p>

                            <h3 className="text-lg font-semibold tracking-tight">
                                {project.title}
                            </h3>
                        </CardHeader>

                        <CardContent className="flex-1 space-y-5">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <li key={technology}>
                                        <Badge variant="secondary">{technology}</Badge>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        {project.href && (
                            <CardFooter>
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        buttonVariants({ variant: "outline" }),
                                        "w-full gap-2",
                                    )}
                                >
                                    View repository
                                    <ArrowUpRight
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        {" "}
                                        for {project.title} (opens in a new tab)
                                    </span>
                                </a>
                            </CardFooter>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Projects;