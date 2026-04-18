"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TECHNOLOGIES = [
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg", invert: true },
    { name: "Shopify", icon: "https://unpkg.com/simple-icons@v10/icons/shopify.svg", invert: true },
    { name: "Squarespace", icon: "https://unpkg.com/simple-icons@v10/icons/squarespace.svg", invert: true },
    { name: "Wix", icon: "https://unpkg.com/simple-icons@v10/icons/wix.svg", invert: true },
    { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg" },
    { name: "BigCommerce", icon: "https://unpkg.com/simple-icons@v10/icons/bigcommerce.svg", invert: true },
    { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "VueJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    { name: "Trello", icon: "https://unpkg.com/simple-icons@v10/icons/trello.svg", invert: true }
];

export function TechMarquee() {
    return (
        <section className="py-20 bg-black overflow-hidden">
            <div className="relative flex overflow-hidden group py-12 w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <motion.div
                    className="flex gap-12 md:gap-24 shrink-0 w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                >
                    {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
                        <div
                            key={idx}
                            className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0 hover:scale-110 transition-all duration-300"
                        >
                            <Image
                                src={tech.icon}
                                alt={`${tech.name} logo`}
                                fill
                                className={cn("object-contain", tech.invert && "brightness-0 invert")}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
