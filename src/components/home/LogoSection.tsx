"use client";
import LogoLoop from '@/components/ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiVite } from 'react-icons/si';

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
];

export function LogoSection() {
    return (
        <section className="py-2">
            <div className="container mx-auto px-4">
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', color: '#000000' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={80}
                        gap={60}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </section>
    );
}
