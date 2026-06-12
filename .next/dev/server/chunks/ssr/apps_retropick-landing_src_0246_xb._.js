module.exports = [
"[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureMotionPlugins",
    ()=>ensureMotionPlugins,
    "usePrefersReducedMotion",
    ()=>usePrefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/dist/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
let pluginsRegistered = false;
function ensureMotionPlugins() {
    if (pluginsRegistered) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
    pluginsRegistered = true;
}
function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const mediaQuery = undefined;
        const updatePreference = undefined;
    }, []);
    return prefersReducedMotion;
}
ensureMotionPlugins();
;
}),
"[project]/apps/retropick-landing/src/components/motion/MotionBootstrap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MotionBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/dist/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
function MotionBootstrap() {
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureMotionPlugins"])();
        if (prefersReducedMotion) return;
        const refreshId = window.setTimeout(()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(), 0);
        return ()=>window.clearTimeout(refreshId);
    }, [
        prefersReducedMotion
    ]);
    return null;
}
}),
"[project]/apps/retropick-landing/src/sections/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navProgress, setNavProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [communityOpen, setCommunityOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const communityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let frameId = 0;
        const updateScrollState = ()=>{
            const heroExitStart = window.innerHeight * 0.55;
            const heroExitEnd = window.innerHeight * 0.82;
            const heroExitRange = Math.max(heroExitEnd - heroExitStart, 1);
            const progress = Math.min(Math.max((window.scrollY - heroExitStart) / heroExitRange, 0), 1);
            setNavProgress((current)=>Math.abs(current - progress) > 0.01 ? progress : current);
            setScrolled(window.scrollY >= heroExitEnd);
            frameId = 0;
        };
        const handleScroll = ()=>{
            if (frameId !== 0) return;
            frameId = window.requestAnimationFrame(updateScrollState);
        };
        updateScrollState();
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        window.addEventListener('resize', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (frameId !== 0) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePointerDown = (event)=>{
            if (!communityRef.current?.contains(event.target)) {
                setCommunityOpen(false);
            }
        };
        window.addEventListener('pointerdown', handlePointerDown);
        return ()=>window.removeEventListener('pointerdown', handlePointerDown);
    }, []);
    const scrollTo = (id)=>{
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "data-scrolled": scrolled,
        className: `fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-2 py-1.5 transition-[box-shadow,transform,border-color,background-color,backdrop-filter] duration-300 ${scrolled ? 'border-slate-200/60' : 'border-transparent'}`,
        style: {
            backgroundColor: `rgba(255, 255, 255, ${0.04 + navProgress * 0.9})`,
            borderColor: `rgba(226, 232, 240, ${0.08 + navProgress * 0.58})`,
            backdropFilter: `blur(${8 + navProgress * 14}px)`,
            boxShadow: `0 18px 40px rgba(37, 99, 235, ${0.03 + navProgress * 0.08})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-0.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>scrollTo('hero'),
                    className: `flex h-10 w-10 items-center justify-center rounded-full transition-colors ${scrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/retropick-logo.png",
                        alt: "RetroPick",
                        className: "w-9 h-9 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-px h-5 ${scrolled ? 'bg-slate-200' : 'bg-white/20'}`
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>scrollTo('retropick'),
                    className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${scrolled ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'}`,
                    children: "Overview"
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>scrollTo('benefits'),
                    className: `px-4 py-2 text-sm font-medium rounded-full transition-all ${scrolled ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'}`,
                    children: "Rewards"
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: communityRef,
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setCommunityOpen((open)=>!open),
                            "aria-expanded": communityOpen,
                            "aria-haspopup": "menu",
                            className: `inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-sm font-semibold hover:scale-105 active:scale-95 transition-all ${scrolled ? 'text-white bg-gradient-primary hover:shadow-lg hover:shadow-blue-500/25' : 'text-slate-950 bg-white hover:bg-cyan-100'}`,
                            children: [
                                "Join Community!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `h-4 w-4 transition-transform ${communityOpen ? 'rotate-180' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        communityOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "menu",
                            className: "absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-2xl border border-white/20 bg-white/95 p-1.5 text-slate-900 shadow-xl shadow-blue-950/10 backdrop-blur-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    role: "menuitem",
                                    href: "https://discord.gg/5EsnWvcErv",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700",
                                    onClick: ()=>setCommunityOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        "Discord"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    role: "menuitem",
                                    href: "https://t.me/RetroPickMarket",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700",
                                    onClick: ()=>setCommunityOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        "Telegram"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/Navbar.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/waitlist/AbsorptionAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbsorptionAnimation",
    ()=>AbsorptionAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AbsorptionAnimation() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridInfoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        cols: 0,
        rows: 0,
        spacing: 8
    });
    const wavesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastWaveCreationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const initializeParticles = ()=>{
            const spacing = 10;
            const cols = Math.ceil(canvas.width / spacing);
            const rows = Math.ceil(canvas.height / spacing);
            gridInfoRef.current = {
                cols,
                rows,
                spacing
            };
            const centerCol = cols / 2;
            const centerRow = rows / 2;
            particlesRef.current = [];
            for(let row = 0; row < rows; row += 1){
                for(let col = 0; col < cols; col += 1){
                    const baseSize = Math.random() * 1.2 + 0.6;
                    const distanceFromCenter = Math.hypot(col - centerCol, row - centerRow);
                    particlesRef.current.push({
                        gridX: col * spacing + spacing / 2,
                        gridY: row * spacing + spacing / 2,
                        opacity: Math.random() * 0.2,
                        targetOpacity: 0,
                        size: baseSize,
                        targetSize: baseSize,
                        flickerSpeed: Math.random() * 0.05 + 0.04,
                        scale: 1,
                        targetScale: 1,
                        distanceFromCenter,
                        baseSize
                    });
                }
            }
        };
        const setCanvasSize = ()=>{
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initializeParticles();
        };
        const drawParticle = (particle)=>{
            ctx.fillStyle = `rgba(212, 239, 255, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.gridX, particle.gridY, particle.size * particle.scale, 0, Math.PI * 2);
            ctx.fill();
        };
        const drawStatic = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesRef.current.forEach((particle)=>{
                particle.opacity = Math.max(0.03, 0.18 - particle.distanceFromCenter / 500);
                drawParticle(particle);
            });
        };
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const maxDistance = Math.max(gridInfoRef.current.cols, gridInfoRef.current.rows) * 0.8;
            const currentTime = Date.now();
            if (wavesRef.current.length === 0 || currentTime - lastWaveCreationRef.current >= 900) {
                wavesRef.current.push({
                    startTime: currentTime
                });
                lastWaveCreationRef.current = currentTime;
            }
            wavesRef.current = wavesRef.current.filter((wave)=>{
                const waveAge = (currentTime - wave.startTime) / 1000;
                return waveAge * 28 < maxDistance + 20;
            });
            particlesRef.current.forEach((particle)=>{
                let maxOpacity = 0.03;
                let maxScale = 0.7;
                wavesRef.current.forEach((wave)=>{
                    const waveRadius = (currentTime - wave.startTime) / 1000 * 28;
                    const distanceDiff = Math.abs(particle.distanceFromCenter - waveRadius);
                    const waveWidth = 15;
                    if (distanceDiff < waveWidth) {
                        const intensity = (1 - distanceDiff / waveWidth) * Math.max(0, 1 - particle.distanceFromCenter / (maxDistance * 1.5));
                        maxOpacity = Math.max(maxOpacity, intensity * 0.42);
                        maxScale = Math.max(maxScale, 0.8 + intensity * 1.8);
                    }
                });
                particle.targetOpacity = maxOpacity;
                particle.targetScale = maxScale;
                particle.targetSize = particle.baseSize;
                particle.opacity += (particle.targetOpacity - particle.opacity) * particle.flickerSpeed;
                particle.scale += (particle.targetScale - particle.scale) * particle.flickerSpeed;
                particle.size += (particle.targetSize - particle.size) * particle.flickerSpeed;
                drawParticle(particle);
            });
            animationFrameRef.current = requestAnimationFrame(animate);
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        if (prefersReducedMotion) {
            drawStatic();
        } else {
            animate();
        }
        return ()=>{
            window.removeEventListener("resize", setCanvasSize);
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 h-full w-full",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/waitlist/AbsorptionAnimation.tsx",
        lineNumber: 154,
        columnNumber: 10
    }, this);
}
}),
"[project]/apps/retropick-landing/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/apps/retropick-landing/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[8rem] origin-[var(--radix-select-content-transform-origin)] overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-slot": "select-item-indicator",
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/ui/select.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/apps/retropick-landing/src/lib/waitlist.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WAITLIST_PRIMARY_USE_CASE_OPTIONS",
    ()=>WAITLIST_PRIMARY_USE_CASE_OPTIONS,
    "WAITLIST_ROLE_OPTIONS",
    ()=>WAITLIST_ROLE_OPTIONS,
    "WAITLIST_SOURCE_OPTIONS",
    ()=>WAITLIST_SOURCE_OPTIONS,
    "WAITLIST_STATUS_OPTIONS",
    ()=>WAITLIST_STATUS_OPTIONS,
    "parseWaitlistPayload",
    ()=>parseWaitlistPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const WAITLIST_ROLE_OPTIONS = [
    "trader",
    "builder",
    "founder",
    "researcher",
    "market_maker",
    "defi_user",
    "crypto_native",
    "macro_trader",
    "investor",
    "other"
];
const WAITLIST_PRIMARY_USE_CASE_OPTIONS = [
    "crypto_event_trading",
    "macro_event_trading",
    "hedging",
    "prediction_markets",
    "research",
    "market_making",
    "alerts",
    "api_data",
    "other"
];
const WAITLIST_STATUS_OPTIONS = [
    "pending",
    "approved",
    "invited",
    "rejected",
    "subscribed"
];
const WAITLIST_SOURCE_OPTIONS = [
    "website",
    "crypto_twitter",
    "telegram",
    "discord",
    "friend",
    "referral",
    "search",
    "podcast",
    "newsletter",
    "manual_test",
    "other"
];
const MAX_LENGTHS = {
    email: 320,
    name: 120,
    telegram: 80,
    x_handle: 80,
    wallet_address: 80,
    role: 40,
    user_type: 80,
    interest: 160,
    primary_use_case: 80,
    source: 80,
    referral_code: 64,
    referred_by: 64,
    utm: 120,
    landingPath: 240,
    userAgent: 512,
    ipHash: 128,
    notes: 1000,
    honeypot: 200
};
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HANDLE_REGEX = /^@?[A-Za-z0-9_]{1,15}$/;
const TELEGRAM_REGEX = /^@?[A-Za-z0-9_]{3,32}$/;
const REFERRAL_REGEX = /^[A-Za-z0-9_-]{3,64}$/;
const WALLET_REGEX = /^0x[a-fA-F0-9]{40}$/;
function normalizeString(value, maxLength) {
    if (typeof value !== "string") return null;
    const normalized = value.trim().replace(/\s+/g, " ");
    if (!normalized) return null;
    return normalized.slice(0, maxLength);
}
function normalizeEmail(value) {
    if (typeof value !== "string") return null;
    const normalized = value.trim().toLowerCase();
    if (!normalized) return null;
    return normalized.slice(0, MAX_LENGTHS.email);
}
function normalizeHandle(value, maxLength) {
    const normalized = normalizeString(value, maxLength);
    if (!normalized) return null;
    return normalized.startsWith("@") ? normalized : `@${normalized}`;
}
function normalizeWalletAddress(value) {
    const normalized = normalizeString(value, MAX_LENGTHS.wallet_address);
    if (!normalized) return null;
    return normalized.toLowerCase();
}
function inferSource(input) {
    if (input.source) return input.source;
    if (input.utmSource) return input.utmSource;
    if (input.referredBy) return "referral";
    return "website";
}
function hasSpamPayload(values) {
    return values.some((value)=>{
        if (!value) return false;
        const lower = value.toLowerCase();
        return lower.includes("<script") || lower.includes("javascript:") || lower.includes("<iframe") || lower.includes("href=") || /https?:\/\//.test(lower);
    });
}
const waitlistPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Email is required"),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    telegram: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    x_handle: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    wallet_address: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    user_type: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    interest: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    primary_use_case: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    referred_by: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    utm_source: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    utm_medium: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    utm_campaign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    utm_content: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    utm_term: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    landing_path: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional(),
    company_website: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
function parseWaitlistPayload(input, metadata) {
    const parsed = waitlistPayloadSchema.safeParse(input);
    if (!parsed.success) {
        return {
            ok: false,
            error: "Invalid request payload"
        };
    }
    const email = normalizeEmail(parsed.data.email);
    if (!email || !EMAIL_REGEX.test(email)) {
        return {
            ok: false,
            error: "Enter a valid email address."
        };
    }
    const companyWebsite = normalizeString(parsed.data.company_website, MAX_LENGTHS.honeypot);
    const name = normalizeString(parsed.data.name, MAX_LENGTHS.name);
    const telegram = normalizeHandle(parsed.data.telegram, MAX_LENGTHS.telegram);
    const xHandle = normalizeHandle(parsed.data.x_handle, MAX_LENGTHS.x_handle);
    const walletAddress = normalizeWalletAddress(parsed.data.wallet_address);
    const role = normalizeString(parsed.data.role, MAX_LENGTHS.role);
    const userType = normalizeString(parsed.data.user_type, MAX_LENGTHS.user_type);
    const interest = normalizeString(parsed.data.interest, MAX_LENGTHS.interest);
    const primaryUseCase = normalizeString(parsed.data.primary_use_case, MAX_LENGTHS.primary_use_case);
    const source = normalizeString(parsed.data.source, MAX_LENGTHS.source);
    const referredBy = normalizeString(parsed.data.referred_by, MAX_LENGTHS.referred_by);
    const utmSource = normalizeString(parsed.data.utm_source, MAX_LENGTHS.utm);
    const utmMedium = normalizeString(parsed.data.utm_medium, MAX_LENGTHS.utm);
    const utmCampaign = normalizeString(parsed.data.utm_campaign, MAX_LENGTHS.utm);
    const utmContent = normalizeString(parsed.data.utm_content, MAX_LENGTHS.utm);
    const utmTerm = normalizeString(parsed.data.utm_term, MAX_LENGTHS.utm);
    const landingPath = normalizeString(parsed.data.landing_path, MAX_LENGTHS.landingPath);
    const notes = normalizeString(parsed.data.notes, MAX_LENGTHS.notes);
    const userAgent = normalizeString(metadata?.userAgent, MAX_LENGTHS.userAgent);
    const ipHash = normalizeString(metadata?.ipHash, MAX_LENGTHS.ipHash);
    if (role && !WAITLIST_ROLE_OPTIONS.includes(role)) {
        return {
            ok: false,
            error: "Choose a valid role."
        };
    }
    if (primaryUseCase && !WAITLIST_PRIMARY_USE_CASE_OPTIONS.includes(primaryUseCase)) {
        return {
            ok: false,
            error: "Choose a valid use case."
        };
    }
    if (source && source.length > MAX_LENGTHS.source) {
        return {
            ok: false,
            error: "Source is too long."
        };
    }
    if (xHandle && !HANDLE_REGEX.test(xHandle)) {
        return {
            ok: false,
            error: "Enter a valid X handle."
        };
    }
    if (telegram && !TELEGRAM_REGEX.test(telegram)) {
        return {
            ok: false,
            error: "Enter a valid Telegram handle."
        };
    }
    if (walletAddress && !WALLET_REGEX.test(walletAddress)) {
        return {
            ok: false,
            error: "Enter a valid EVM wallet address."
        };
    }
    if (referredBy && !REFERRAL_REGEX.test(referredBy)) {
        return {
            ok: false,
            error: "Referral code is invalid."
        };
    }
    if (hasSpamPayload([
        name,
        telegram,
        xHandle,
        userType,
        interest,
        notes,
        source,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm
    ])) {
        return {
            ok: false,
            error: "Submission was flagged as spam."
        };
    }
    return {
        ok: true,
        honeypotTriggered: Boolean(companyWebsite),
        data: {
            email,
            name,
            telegram,
            x_handle: xHandle,
            wallet_address: walletAddress,
            role,
            user_type: userType,
            interest,
            primary_use_case: primaryUseCase,
            source: inferSource({
                source,
                utmSource,
                referredBy
            }),
            referred_by: referredBy,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_content: utmContent,
            utm_term: utmTerm,
            landing_path: landingPath,
            user_agent: userAgent,
            ip_hash: ipHash,
            notes
        }
    };
}
}),
"[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaitlistHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$waitlist$2f$AbsorptionAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/waitlist/AbsorptionAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/waitlist.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const rotatingWords = [
    "crypto",
    "macro",
    "stocks",
    "web3",
    "sport",
    "gaming",
    "tech",
    "science",
    "weather",
    "world events",
    "more"
];
const longestRotatingWord = rotatingWords.reduce((longest, word)=>word.length > longest.length ? word : longest, "");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialFormState = {
    email: "",
    role: "",
    primary_use_case: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    referred_by: "",
    landing_path: "",
    company_website: ""
};
const roleLabels = {
    trader: "Trader",
    builder: "Builder",
    founder: "Founder",
    researcher: "Researcher",
    market_maker: "Market maker",
    defi_user: "DeFi user",
    crypto_native: "Crypto native",
    macro_trader: "Macro trader",
    investor: "Investor",
    other: "Other"
};
const useCaseLabels = {
    crypto_event_trading: "Crypto event trading",
    macro_event_trading: "Macro event trading",
    hedging: "Hedging",
    prediction_markets: "Prediction markets",
    research: "Research",
    market_making: "Market making",
    alerts: "Alerts",
    api_data: "API / data",
    other: "Other"
};
function WaitlistHero() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const emailInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const topGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const horizonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    const currentWord = rotatingWords[wordIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ensureMotionPlugins"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = window.setInterval(()=>{
            setWordIndex((prev)=>(prev + 1) % rotatingWords.length);
        }, 2600);
        return ()=>window.clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const focusEmail = ()=>emailInputRef.current?.focus();
        window.addEventListener("retropick:focus-waitlist", focusEmail);
        return ()=>window.removeEventListener("retropick:focus-waitlist", focusEmail);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        setForm((current)=>({
                ...current,
                utm_source: params.get("utm_source") ?? "",
                utm_medium: params.get("utm_medium") ?? "",
                utm_campaign: params.get("utm_campaign") ?? "",
                utm_content: params.get("utm_content") ?? "",
                utm_term: params.get("utm_term") ?? "",
                referred_by: params.get("ref") ?? "",
                landing_path: `${window.location.pathname}${window.location.search}`
            }));
    }, []);
    const buttonLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (status === "loading") return "Joining...";
        if (status === "success") return "Joined";
        return "Join Waitlist";
    }, [
        status
    ]);
    const setField = (field, value)=>{
        setForm((current)=>({
                ...current,
                [field]: value
            }));
        if (status !== "idle") {
            setStatus("idle");
            setMessage("");
        }
    };
    const scrollToRetropick = ()=>{
        document.getElementById("demo")?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const normalizedEmail = form.email.trim().toLowerCase();
        if (!emailRegex.test(normalizedEmail)) {
            setStatus("error");
            setMessage("Enter a valid email address.");
            return;
        }
        setStatus("loading");
        setMessage("");
        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...form,
                    email: normalizedEmail
                })
            });
            let payload = {};
            try {
                const text = await response.text();
                payload = text ? JSON.parse(text) : {};
            } catch  {
                payload = {};
            }
            if (!response.ok) {
                setStatus("error");
                setMessage(payload.error || `Request failed (${response.status}). Try again.`);
                return;
            }
            setStatus("success");
            setMessage(payload.message || "You’re on the RetroPick waitlist.");
            setForm((current)=>({
                    ...initialFormState,
                    utm_source: current.utm_source,
                    utm_medium: current.utm_medium,
                    utm_campaign: current.utm_campaign,
                    utm_content: current.utm_content,
                    utm_term: current.utm_term,
                    referred_by: current.referred_by,
                    landing_path: current.landing_path
                }));
        } catch  {
            setStatus("error");
            setMessage("Network error. Check your connection and try again.");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        const introTimeline = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].timeline({
            defaults: {
                ease: "power3.out"
            }
        });
        introTimeline.from("[data-hero-reveal]", {
            y: 36,
            opacity: 0,
            duration: 0.88,
            stagger: 0.1,
            clearProps: "transform,opacity"
        });
        if (contentRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(contentRef.current, {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
        if (orbRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(orbRef.current, {
                yPercent: -10,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
        const parallaxLayers = [
            {
                ref: topGlowRef,
                yPercent: -12,
                scale: 1.05
            },
            {
                ref: bottomGlowRef,
                yPercent: -8,
                scale: 1.08
            },
            {
                ref: horizonRef,
                yPercent: -6,
                scale: 1.02
            }
        ];
        parallaxLayers.forEach(({ ref, yPercent, scale })=>{
            if (!ref.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(ref.current, {
                yPercent,
                scale,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        ref: sectionRef,
        className: "relative min-h-screen overflow-hidden bg-[#0a0f2e] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#0a0f2e]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: topGlowRef,
                        className: "glow-orb absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3b7cff] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomGlowRef,
                        className: "glow-orb absolute bottom-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-[#2563eb] blur-[100px] [animation-delay:-7s]"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: horizonRef,
                        className: "absolute -bottom-[40%] left-1/2 h-[60%] w-[140%] -translate-x-1/2 will-change-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-full w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-[50%] bg-gradient-to-b from-[#0f1840]/45 to-[#0a0f2e]"
                            }, void 0, false, {
                                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: orbRef,
                        className: "absolute left-1/2 h-[2250px] w-[2250px] -translate-x-1/2 bottom-[calc(-50%_-_900px)] will-change-transform",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/orb.png",
                            alt: "",
                            className: "h-full w-full animate-orb-rotate object-contain"
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-55",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$waitlist$2f$AbsorptionAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbsorptionAnimation"], {}, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay",
                style: {
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat"
                }
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle,transparent,transparent,#0a0f2e)] opacity-60"
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex min-h-screen items-center justify-center px-4 pb-10 pt-28 sm:px-6 sm:pt-32 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "w-full max-w-6xl will-change-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    "data-hero-reveal": true,
                                    className: "max-w-3xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white [text-shadow:0_1px_18px_rgba(0,30,80,0.6)] sm:text-5xl lg:text-[5.5rem]",
                                    children: [
                                        "Trade Markets",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block font-serif italic font-normal text-cyan-100",
                                            style: {
                                                fontFamily: "var(--font-playfair, ui-serif, Georgia, serif)"
                                            },
                                            children: currentWord
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block mt-3",
                                            children: "That Never Existed Onchain"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-hero-reveal": true,
                                className: "mx-auto max-w-xl rounded-[30px] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(11,18,51,0.9),rgba(4,9,28,0.92))] p-5 shadow-[0_30px_90px_rgba(3,8,25,0.55)] backdrop-blur-xl sm:p-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    noValidate: true,
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "waitlist-email",
                                                            className: "mb-2 block text-sm font-medium text-white/82",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: emailInputRef,
                                                            id: "waitlist-email",
                                                            type: "email",
                                                            inputMode: "email",
                                                            autoComplete: "email",
                                                            required: true,
                                                            placeholder: "you@fund.com",
                                                            value: form.email,
                                                            onChange: (event)=>setField("email", event.target.value),
                                                            disabled: status === "loading",
                                                            className: "h-12 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none placeholder:text-white/36 focus:border-cyan-200/50 focus:ring-4 focus:ring-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-60"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4 md:grid-cols-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "waitlist-role",
                                                                    className: "mb-2 block text-sm font-medium text-white/82",
                                                                    children: "Who are you?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: form.role,
                                                                    onValueChange: (value)=>setField("role", value),
                                                                    disabled: status === "loading",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            id: "waitlist-role",
                                                                            className: "h-12 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-left text-white focus:border-cyan-200/50 focus:ring-4 focus:ring-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-60",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Select role"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                                lineNumber: 367,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                            lineNumber: 363,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            className: "bg-slate-950/95 border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.35)]",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WAITLIST_ROLE_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: option,
                                                                                    className: "text-white",
                                                                                    children: roleLabels[option]
                                                                                }, option, false, {
                                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                                    lineNumber: 371,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                            lineNumber: 369,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "waitlist-primary-use-case",
                                                                    className: "mb-2 block text-sm font-medium text-white/82",
                                                                    children: "What do you want RetroPick for?"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                                    value: form.primary_use_case,
                                                                    onValueChange: (value)=>setField("primary_use_case", value),
                                                                    disabled: status === "loading",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                            id: "waitlist-primary-use-case",
                                                                            className: "h-12 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-left text-white focus:border-cyan-200/50 focus:ring-4 focus:ring-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-60",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                placeholder: "Select use case"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                                lineNumber: 388,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                            className: "bg-slate-950/95 border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.35)]",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WAITLIST_PRIMARY_USE_CASE_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                    value: option,
                                                                                    className: "text-white",
                                                                                    children: useCaseLabels[option]
                                                                                }, option, false, {
                                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                                    lineNumber: 392,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                            lineNumber: 390,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "utm_source",
                                            value: form.utm_source,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "utm_medium",
                                            value: form.utm_medium,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "utm_campaign",
                                            value: form.utm_campaign,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "utm_content",
                                            value: form.utm_content,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "utm_term",
                                            value: form.utm_term,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "referred_by",
                                            value: form.referred_by,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            name: "landing_path",
                                            value: form.landing_path,
                                            readOnly: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "company-website",
                                                    children: "Company website"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "company-website",
                                                    name: "company_website",
                                                    tabIndex: -1,
                                                    autoComplete: "off",
                                                    value: form.company_website,
                                                    onChange: (event)=>setField("company_website", event.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: status === "loading",
                                            className: "mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#09101f] transition hover:-translate-y-px hover:bg-cyan-50 hover:shadow-[0_18px_40px_rgba(153,246,228,0.12)] disabled:cursor-not-allowed disabled:opacity-60",
                                            children: [
                                                status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 43
                                                }, this) : null,
                                                buttonLabel
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: scrollToRetropick,
                                            className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10",
                                            children: [
                                                "Continue to RetroPick",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 430,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            role: "status",
                                            "aria-live": "polite",
                                            className: `mt-4 text-sm leading-6 ${status === "error" ? "text-red-300" : "text-white/72"}`,
                                            children: status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "You’re on the RetroPick waitlist. We’ll contact you from",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:rudeus33@retropick.xyz",
                                                        className: "text-cyan-200 underline underline-offset-4",
                                                        children: "rudeus33@retropick.xyz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 23
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true) : message || "Early users help shape today’s most compelling markets, earn first access, and influence which stories get priced first."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoMark",
    ()=>LogoMark,
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Logo({ className = "", size = 120 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/images/retropick-logo.png",
        alt: "RetroPick",
        width: size,
        height: size,
        className: `rounded-full drop-shadow-[0_0_36px_rgba(126,184,255,0.34)] ${className}`
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function LogoMark({ className = "", size = 40 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "/images/retropick-logo.png",
        alt: "RetroPick",
        width: size,
        height: size,
        className: `rounded-full ${className}`
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RetroPickIntroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
;
;
;
;
function RetroPickIntroSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".retropick-logo", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".retropick-logo",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".retropick-heading", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".retropick-heading",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".retropick-cohort-box", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: 0.2,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".retropick-cohort-box",
                start: "top 85%"
            }
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "retropick",
        ref: sectionRef,
        className: "relative w-full bg-rp-bg pb-16 pt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-[800px] flex-col items-center px-5 text-center md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "retropick-logo flex items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoMark"], {
                            size: 40
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[32px] font-semibold tracking-tight text-white",
                            children: "RetroPick"
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "retropick-heading mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl",
                    children: [
                        "Trade the Future with Prediction Markets",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-rp-blue",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                            lineNumber: 67,
                            columnNumber: 51
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "retropick-cohort-box mt-8 flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white",
                                    children: "Selected for"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.protocolcamp.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "Protocol Camp",
                                    className: "transition-opacity hover:opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/protocolCamp.png",
                                        alt: "Protocol Camp",
                                        className: "h-10 w-auto max-w-[220px] object-contain brightness-0 invert md:h-12",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white",
                                    children: "Cohort 9"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white",
                                    children: "Organized by"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://shardlab.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "ShardLab",
                                    className: "transition-opacity hover:opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/shardlab.png",
                                        alt: "ShardLab",
                                        className: "h-10 w-auto max-w-[180px] object-contain brightness-0 invert md:h-12",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-white",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.hashed.com/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "Hashed",
                                    className: "transition-opacity hover:opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/hashed.png",
                                        alt: "Hashed",
                                        className: "h-10 w-auto max-w-[160px] object-contain brightness-0 invert md:h-12",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GlowCard({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden rounded-2xl border border-[#1b1f29] bg-[#0a0a0c] p-8 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.03),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_42%,transparent_68%,rgba(126,184,255,0.018))]"
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#79bcff]/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-[1px] rounded-2xl border border-white/[0.04]"
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/source-landing/SectionMediaVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionMediaVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SectionMediaVideo({ src, title, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        src: src,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "metadata",
        "aria-label": title,
        className: className
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/SectionMediaVideo.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function SectionTitle({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: `gradient-title text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/ProcessSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$GlowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionMediaVideo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const steps = [
    {
        number: "01",
        title: "Discover Events",
        description: "Explore live crypto, macro, and real-world event markets before they happen.",
        video: "/webm/1_feature.webm"
    },
    {
        number: "02",
        title: "Pick Your Edge",
        description: "Choose the market structure that matches your thesis, such as direction, threshold, range, ladder, or cascade.",
        video: "/webm/2_feature.webm"
    },
    {
        number: "03",
        title: "Join & Settle",
        description: "Enter the event pool, wait for the market to lock, and settle based on clear resolution rules.",
        video: "/webm/3_feature.webm"
    },
    {
        number: "04",
        title: "Yield & Compound",
        description: "Keep assets productive while waiting, then claim, reuse, or compound after the event resolves.",
        video: "/webm/4_feature.webm"
    }
];
function ProcessSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".process-title", {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".process-title",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".process-card", {
            opacity: 0,
            y: 80,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".process-cards",
                start: "top 75%"
            }
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        ref: sectionRef,
        className: "relative w-full bg-rp-bg py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-5 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "process-title mb-12 md:mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "The process"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "process-cards grid grid-cols-1 gap-6 md:grid-cols-2",
                    children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$GlowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "process-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 aspect-square w-full overflow-hidden rounded-xl bg-rp-dark-blue/70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: step.video,
                                        title: step.title,
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl font-bold text-rp-blue",
                                                    children: step.number
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-semibold text-white mb-2",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-rp-text-secondary leading-relaxed",
                                            children: step.description
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, step.number, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/ProcessSection.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BenefitsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$GlowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/GlowCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionMediaVideo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const rewards = [
    {
        number: "01",
        title: "Trading Competitions",
        description: "Share your portfolio, climb the leaderboard, and win seasonal rewards.",
        video: "/webm/3_process.webm"
    },
    {
        number: "02",
        title: "Referral Rewards",
        description: "Invite people to become Retromax users and earn rewards as they deposit and stay active.",
        video: "/webm/2_process.webm",
        videoClassName: "object-right"
    },
    {
        number: "03",
        title: "Badge Rewards",
        description: "Collect badges to show your status, activity, and reputation as a Retro G.",
        video: "/webm/4_process.webm"
    },
    {
        number: "04",
        title: "Yield on Deposits",
        description: "Earn yield on deposited assets and compound over time. Everyone gains G.",
        video: "/webm/1_process.webm"
    }
];
function BenefitsSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".benefits-title", {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".benefits-title",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".benefits-card", {
            opacity: 0,
            y: 60,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".benefits-grid",
                start: "top 80%"
            }
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "benefits",
        ref: sectionRef,
        className: "relative w-full bg-rp-bg py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-5 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "benefits-title mb-12 md:mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "The rewards"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "benefits-grid grid grid-cols-1 gap-6 md:grid-cols-2",
                    children: rewards.map((reward)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$GlowCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "benefits-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 aspect-square w-full overflow-hidden rounded-xl bg-rp-dark-blue/70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: reward.video,
                                        title: reward.title,
                                        className: `h-full w-full object-cover ${reward.videoClassName ?? ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-4xl font-bold text-rp-blue",
                                            children: reward.number
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-semibold text-white",
                                            children: reward.title
                                        }, void 0, false, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-rp-text-secondary",
                                    children: reward.description
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, reward.title, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/DemoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionMediaVideo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)");
;
;
;
function DemoSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "demo",
        className: "relative w-full bg-rp-bg py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-5 md:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0 overflow-hidden rounded-[32px] border border-white/10 bg-rp-dark-blue shadow-[0_40px_120px_-70px_rgba(0,0,0,0.75)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-[16/9] w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionMediaVideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/webm/Vidio Demo.webm",
                        title: "RetroPick demo video",
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/DemoSection.tsx",
                        lineNumber: 10,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/DemoSection.tsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/sections/DemoSection.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/sections/DemoSection.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/DemoSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
;
;
;
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overflow-hidden rounded-xl border border-rp-border bg-rp-card transition-all duration-200 hover:bg-[#161616] ${isOpen ? "border-l-2 border-l-rp-blue" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex w-full items-center justify-between px-6 py-5 text-left md:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "pr-4 text-base font-medium text-white",
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-rp-border text-rp-text-muted transition-transform duration-300 ${isOpen ? "rotate-45 border-rp-blue text-rp-blue" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid transition-all duration-300 ease-out",
                style: {
                    gridTemplateRows: isOpen ? "1fr" : "0fr"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-5 text-sm leading-relaxed text-rp-text-secondary md:px-8",
                        children: answer
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$FAQItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/FAQItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
const faqData = [
    {
        question: "What is RetroPick?",
        answer: "RetroPick is an event-risk market platform for crypto, macro, and real-world events. It supports structured market types so participants can express more precise views than basic YES/NO predictions."
    },
    {
        question: "How are markets resolved?",
        answer: "Each market shows its source, observation time, resolution rule, and fallback before participation. Resolution is designed around deterministic evidence instead of human dispute windows."
    },
    {
        question: "Can I learn before using real funds?",
        answer: "Yes. Paper trading lets you simulate positions across market formats without real settlement, so you can understand outcomes and payouts first."
    },
    {
        question: "What currency do positions settle in?",
        answer: "RetroPick standardizes event positions around USDC settlement so claims, payouts, and balances are easier to reason about."
    },
    {
        question: "Is yield guaranteed?",
        answer: "No. Optional yield routing may be available for idle collateral when supported, but yield is variable and never guaranteed."
    }
];
function FAQSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".faq-title", {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".faq-title",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".faq-item", {
            opacity: 0,
            x: 30,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".faq-list",
                start: "top 80%"
            }
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        ref: sectionRef,
        className: "relative w-full bg-rp-bg py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-5 md:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-10 md:flex-row md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-title md:sticky md:top-32 md:w-1/3 md:self-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-list flex flex-col gap-3 md:w-2/3",
                        children: faqData.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$FAQItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    question: faq.question,
                                    answer: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this)
                            }, faq.question, false, {
                                fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/FAQSection.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandKitSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/lib/motion.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const logoVariations = [
    {
        type: "horizontal",
        bg: "white",
        text: "black",
        label: "Wordmark"
    },
    {
        type: "stacked",
        bg: "white",
        text: "black",
        label: "Stacked"
    },
    {
        type: "icon",
        bg: "white",
        text: "black",
        label: "Icon"
    },
    {
        type: "horizontal",
        bg: "dark",
        text: "white",
        label: "Dark Wordmark"
    },
    {
        type: "stacked",
        bg: "dark",
        text: "white",
        label: "Dark Stacked"
    },
    {
        type: "icon",
        bg: "dark",
        text: "white",
        label: "Dark Icon"
    }
];
function LogoVariation({ type, text }) {
    const textColor = text === "white" ? "text-white" : "text-black";
    if (type === "horizontal") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center gap-2 ${textColor}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoMark"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-semibold tracking-tight",
                    children: "RetroPick"
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (type === "stacked") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex flex-col items-center gap-1 ${textColor}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoMark"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium tracking-tight",
                    children: "RetroPick"
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoMark"], {
        size: 36
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
async function downloadFile(url, filename) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Download failed: ${response.status}`);
        }
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        console.error("Brand asset download failed", error);
        window.location.href = url;
    }
}
function BrandKitSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$lib$2f$motion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (prefersReducedMotion || !sectionRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".brandkit-title-row", {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".brandkit-title-row",
                start: "top 85%"
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].from(".brandkit-card", {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
                trigger: ".brandkit-grid",
                start: "top 85%"
            }
        });
    }, {
        scope: sectionRef,
        dependencies: [
            prefersReducedMotion
        ],
        revertOnUpdate: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "brand",
        ref: sectionRef,
        className: "relative w-full bg-rp-bg py-24 md:py-32",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1200px] px-5 md:px-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "brandkit-title-row mb-10 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Brand Kit"
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>downloadFile("/RetroPick_Brand_Assets_v1.zip", "RetroPick_Brand_Assets_v1.zip"),
                            className: "inline-flex items-center gap-2 rounded-lg border border-[#333] bg-rp-card px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-px hover:border-rp-blue-bright",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                "Download All"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "brandkit-grid mb-6 grid grid-cols-2 gap-4 md:grid-cols-3",
                    children: logoVariations.map((variation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `brandkit-card group relative aspect-[16/10] rounded-xl transition-all duration-300 hover:-translate-y-1 ${variation.bg === "dark" ? "bg-[#1a1a1a]" : "bg-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-full items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoVariation, {
                                        type: variation.type,
                                        text: variation.text
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1 rounded-md bg-[#222] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#333]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                "PNG"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1 rounded-md bg-[#222] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#333]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                "SVG"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-3 top-3 text-[10px] text-rp-text-muted",
                                    children: variation.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${variation.type}-${variation.label}`, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://drive.google.com/file/d/1mjgZViJtfiJBOhKxKPW16kUmbeV-XUwM/view?usp=sharing",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    className: "flex w-full items-center justify-center gap-2 rounded-xl border border-rp-border-blue bg-rp-card px-6 py-4 font-medium text-rp-blue transition-all duration-300 hover:border-rp-blue hover:bg-[rgba(126,184,255,0.08)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        "Branding Guideline PDF"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/sections/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/source-landing/Logo.tsx [app-ssr] (ecmascript)");
;
;
function XIcon({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
function DiscordIcon({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function BookIcon({ size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        }, void 0, false, {
            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full border-t border-rp-border bg-rp-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1200px] px-5 py-8 md:px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$source$2d$landing$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoMark"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-semibold tracking-tight",
                                    children: "RetroPick"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-rp-text-muted transition-colors duration-200 hover:text-white",
                                    "aria-label": "X (Twitter)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#faq",
                                    className: "text-rp-text-muted transition-colors duration-200 hover:text-white",
                                    "aria-label": "FAQ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BookIcon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://t.me/RetroPickMarket",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-rp-text-muted transition-colors duration-200 hover:text-white",
                                    "aria-label": "Telegram",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DiscordIcon, {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#1a1a1a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1200px] px-5 py-5 text-center md:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-rp-text-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "transition-colors hover:text-rp-text-secondary",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "transition-colors hover:text-rp-text-secondary",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://t.me/RetroPickMarket",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "transition-colors hover:text-rp-text-secondary",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xs text-rp-text-muted",
                            children: "Event markets with rules you can verify."
                        }, void 0, false, {
                            fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/sections/Footer.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/retropick-landing/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$motion$2f$MotionBootstrap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/motion/MotionBootstrap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$waitlist$2f$WaitlistHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/components/waitlist/WaitlistHero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$RetroPickIntroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/RetroPickIntroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$ProcessSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/ProcessSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$BenefitsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/BenefitsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$DemoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/DemoSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/FAQSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$BrandKitSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/BrandKitSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/retropick-landing/src/sections/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-rp-bg text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$motion$2f$MotionBootstrap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$components$2f$waitlist$2f$WaitlistHero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$DemoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$RetroPickIntroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$ProcessSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$BenefitsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$BrandKitSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$retropick$2d$landing$2f$src$2f$sections$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/retropick-landing/src/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_retropick-landing_src_0246_xb._.js.map