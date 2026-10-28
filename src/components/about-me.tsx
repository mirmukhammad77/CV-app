import { UserRound } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function AboutMe() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-24"
        >
            <Card className="h-full shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-900/10 text-emerald-900">
                            <UserRound className="size-5" aria-hidden="true" />
                        </span>

                        <h2 id="about-heading" className="text-xl font-semibold">
                            About me
                        </h2>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
                    <p>
                        Full-Stack Software Engineer experienced in building healthcare and education applications with TypeScript, React, NestJS, and PostgreSQL. Delivers features across responsive interfaces, REST APIs, database design, authentication, and authorization. Hands-on experience integrating AWS S3, Google Maps, and Telegram bots, alongside automated testing with Jest and Playwright. Uses Docker and GitHub Actions to support development and CI workflows. Focused on maintainable code, reliable application behavior, and collaborative delivery through code reviews and Agile/Scrum practices.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}

export default AboutMe;