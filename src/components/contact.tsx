import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContactProps = {
    email: string;
};

function Contact({ email }: ContactProps) {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="scroll-mt-24"
        >
            <Card className="border-emerald-900/15 bg-emerald-50/50 py-0 shadow-none">
                <CardContent className="flex flex-col items-center gap-6 px-6 py-12 text-center sm:py-16">
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-900/10 text-emerald-900">
                        <MessageSquare
                            className="size-7"
                            aria-hidden="true"
                        />
                    </span>

                    <div className="w-full max-w-lg space-y-3">
                        <h2
                            id="contact-heading"
                            className="text-3xl font-semibold tracking-tight sm:text-4xl"
                        >
                            Let’s connect
                        </h2>

                        <p className="text-base leading-relaxed text-muted-foreground">
                            Have a project in mind or want to discuss an opportunity?
                            I’d be happy to hear from you.
                        </p>
                    </div>

                    <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                        <a
                            href={`mailto:${email}`}
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "h-12 gap-3 rounded-xl bg-emerald-900 px-7 text-base text-white hover:bg-emerald-800",
                            )}
                        >
                            <Mail className="size-5" aria-hidden="true" />
                            Email me
                        </a>

                        <a
                            href="https://github.com/mirmukhammad77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "h-12 gap-3 rounded-xl bg-background px-7 text-base",
                            )}
                        >
                            <FaGithub className="size-5" aria-hidden="true" />
                            GitHub
                            <ArrowUpRight
                                className="size-4"
                                aria-hidden="true"
                            />
                            <span className="sr-only">
                                (opens in a new tab)
                            </span>
                        </a>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}

export default Contact;