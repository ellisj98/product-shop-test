import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config";
import { CSSOptions } from "vite";

const vitePostCssConfig: CSSOptions['postcss'] = {
    plugins: [
        tailwind(tailwindConfig),
    ],
}

export default vitePostCssConfig;