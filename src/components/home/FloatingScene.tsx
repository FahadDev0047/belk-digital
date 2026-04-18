"use client";

import UnicornScene from "unicornstudio-react/next";

const FloatingScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <UnicornScene
                projectId="Bcb9NsMTUhER3ViuIoji"
                sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default FloatingScene;
