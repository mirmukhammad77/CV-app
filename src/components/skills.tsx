import { CodeXml, Database, Server, Wrench, TextAlignStart, CpuAiIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const skillGroups = [
    {
        title: "Frontend",
        icon: CodeXml,
        skills: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "TanStack Query",
            "Redux",
            "vite",
            "Design Patterns",
            "Zustand",
            "React Router"
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "NestJS", "REST APIs", "JWT", "Jest"],
    },
    {
        title: "Database",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM", "Prisma", "Sequelize migrations"],
    },
    {
        title: "Testing Tools",
        icon: TextAlignStart,
        skills: [
            "Jest",
            "Playwright",
            "end-to-end testing",
            "Test Integration",
            "Test automation"
        ]
    },
    {
        title: "Tools & Infrastructure",
        icon: Wrench,
        skills: ["Git", "GitHub", "Docker", "Postman", "GitHub Actions (CI/CD)", "Linux/WSL", "AWS (EC2, S3, VPC, IAM)", "Terraform"],
    },
    {
        title: "AI Tools",
        icon: CpuAiIcon,
        skills: [
            "Claude code",
            "Codex",
            "GitHub copilot"
        ]
    }
];

function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="scroll-mt-24"
        >
            <Card className="shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900">
                            <CodeXml className="size-5" aria-hidden="true" />
                        </span>

                        <h2 id="skills-heading" className="text-xl font-semibold">
                            Skills
                        </h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid gap-6 sm:grid-cols-2">
                    {skillGroups.map(({ title, icon: Icon, skills }) => (
                        <div key={title} className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-semibold">
                                <Icon
                                    className="size-4 text-muted-foreground"
                                    aria-hidden="true"
                                />
                                {title}
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <li key={skill}>
                                        <Badge
                                            variant="secondary"
                                            className="px-3 py-1.5 font-medium"
                                        >
                                            {skill}
                                        </Badge>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="space-y-3 border-t pt-5 sm:col-span-2">
                        <h3 className="text-sm font-semibold">
                            Currently learning
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {["AWS", "Terraform", "GitHub Actions"].map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="outline"
                                    className="border-emerald-900/20 bg-emerald-50 px-3 py-1.5 text-emerald-900"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default Skills;