/*
* D - Desktop
* T - Tablet
* P - Phone
*/

import { ResolvableTo, Screen, ScreensConfig } from "tailwindcss/types/config";

const tailwindBreakpoints: Record<string, number> = {
    ps : 320, // phone small
    pl : 420, // phone large
    ts : 600, // tablet small
    tl : 800, // tablet large
    tvl : 900, // tablet very large
    ds : 1020, // desktop small
    dm : 1250, // desktop medium
};

const tailwindScreens: ResolvableTo<ScreensConfig> = {};

export const addToScreens = (bp: string, screen: Screen) => {
    tailwindScreens[bp] = screen;
}

for (const bp in tailwindBreakpoints) {
    const value: number = tailwindBreakpoints[bp];
    const valueMin: number = value + 1;
    addToScreens(`from-${bp}`, { min: `${valueMin}px` });
    addToScreens(`to-${bp}`, { max: `${value}px` });
}

export {
    tailwindBreakpoints,
    tailwindScreens
};