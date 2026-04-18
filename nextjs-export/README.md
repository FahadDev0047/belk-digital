# How to Use in Next.js

1.  **Install Dependencies:**

    ```bash
    pnpm add framer-motion three @react-three/fiber @react-three/drei lucide-react clsx tailwind-merge
    ```

2.  **Copy Files:**
    Copy `Hero.tsx`, `FloatingScene.tsx`, and `HeroContent.tsx` to your components folder (e.g., `components/hero/`).

3.  **Update Tailwind Config (`tailwind.config.ts` or `tailwind.config.js`):**
    Add the following to your `theme.extend` section:

    ```javascript
    theme: {
      extend: {
        fontFamily: {
          display: ["Outfit", "sans-serif"],
          body: ["Space Grotesk", "sans-serif"],
        },
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          border: "hsl(var(--border))",
        },
      },
    },
    ```

4.  **Add CSS Variables (`globals.css`):**

    ```css
    @layer base {
      :root {
        --background: 270 20% 96%;
        --foreground: 270 30% 10%;
        --accent: 45 90% 60%;
        --accent-foreground: 270 30% 10%;
        --muted: 270 15% 92%;
        --muted-foreground: 270 10% 50%;
        --border: 270 20% 88%;
        --hero-gradient: linear-gradient(135deg, hsl(270 25% 92%) 0%, hsl(280 30% 88%) 30%, hsl(270 35% 85%) 60%, hsl(260 25% 90%) 100%);
        --glass-bg: 270 30% 95% / 0.4;
      }
      
      .dark {
         /* Add dark mode overrides here if needed */
         --background: 270 30% 6%;
         --foreground: 270 10% 95%;
      }
    }

    @layer utilities {
      .hero-bg {
        background: var(--hero-gradient);
      }
      
      .glass-card {
        background: hsl(var(--glass-bg));
        backdrop-filter: blur(20px);
        border: 1px solid hsl(270 30% 85% / 0.3);
      }
      
      .font-display {
           font-family: 'Outfit', sans-serif;
      }

      .font-body {
           font-family: 'Space Grotesk', sans-serif;
      }
    }
    ```

5.  **Import and Use:**

    ```tsx
    import Hero from "@/components/hero/Hero";

    export default function Page() {
      return <Hero />;
    }
    ```
