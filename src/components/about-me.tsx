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
                        I’m a full-stack developer based in Tashkent, Uzbekistan.
                        I work with React and TypeScript on the frontend, and
                        NestJS and PostgreSQL on the backend.
                    </p>

                    <p>
                        Through my internship at Vention Labs, I’ve contributed
                        to learning management and dental management applications,
                        working on authentication, appointment booking, and
                        lesson management.
                    </p>

                    <p>
                        I enjoy solving practical problems, building clean APIs,
                        and turning ideas into useful applications.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
}

export default AboutMe;