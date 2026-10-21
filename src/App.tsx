import Navbar from "@/components/navbar"
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl space-y-12 px-6 pb-16 md:px-10">
        <Hero />

        <div className="grid items-start gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <AboutMe />
            <Experience />
          </div>

          <Skills />
        </div>

        <Projects />

        <Contact email="mirmuxammadmirxamidov@gmail.com" />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground md:px-10">
          © {new Date().getFullYear()} Mirmukhammad Mirxamidov
        </div>
      </footer>
    </div>
  );
}

export default App
