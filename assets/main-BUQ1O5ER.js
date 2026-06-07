(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("menu-btn"),a=document.getElementById("mobile-menu"),n=document.getElementById("close-menu-btn");let e=document.getElementById("mobile-menu-overlay");!e&&a&&(e=document.createElement("div"),e.id="mobile-menu-overlay",e.className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(e));function t(){if(a&&(a.classList.remove("translate-x-full","hidden"),a.classList.add("translate-x-0")),e&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100")),o){const i=o.querySelector("span");i&&(i.textContent="close")}document.body.classList.add("overflow-hidden")}function s(){if(a&&(a.classList.remove("translate-x-0"),a.classList.add("translate-x-full")),e&&(e.classList.remove("opacity-100"),e.classList.add("opacity-0","pointer-events-none")),o){const i=o.querySelector("span");i&&(i.textContent="menu")}document.body.classList.remove("overflow-hidden")}o&&o.addEventListener("click",i=>{i.stopPropagation(),a&&a.classList.contains("translate-x-0")?s():t()}),n&&n.addEventListener("click",()=>{s()}),e&&e.addEventListener("click",()=>{s()}),a&&a.querySelectorAll("a").forEach(i=>{i.addEventListener("click",()=>{s()})});const r=window.location.pathname.split("/").pop()||"index.html",l={"index.html":["nav-home","mobile-nav-home"],"story.html":["nav-story","mobile-nav-story"],"programs.html":["nav-programs","mobile-nav-programs"],"trainers.html":["nav-trainers","mobile-nav-trainers"],"membership.html":["nav-membership","mobile-nav-membership"],"gallery.html":["nav-gallery","mobile-nav-gallery"],"contact.html":["nav-contact","mobile-nav-contact"],"app.html":["nav-app","mobile-nav-app"]}[r];l&&l.forEach(i=>{const u=document.getElementById(i);u&&(u.classList.remove("text-on-surface"),u.classList.add("text-secondary","border-b-2","border-secondary","pb-1"))});const c=document.getElementById("top-nav");c&&window.addEventListener("scroll",()=>{window.scrollY>50?(c.classList.add("py-2","bg-surface/95","shadow-xl"),c.classList.remove("py-4","bg-surface/80")):(c.classList.remove("py-2","bg-surface/95","shadow-xl"),c.classList.add("py-4","bg-surface/80"))}),f(),p(),m()});function m(){const o={threshold:.15,rootMargin:"0px 0px -50px 0px"},a=new IntersectionObserver(n=>{n.forEach(e=>{e.isIntersecting&&(e.target.classList.add("active"),e.target.classList.contains("animate-bounce-once")&&e.target.classList.add("animate-bounce"))})},o);document.querySelectorAll(".scroll-reveal, .glass-card, .animate-reveal").forEach(n=>{n.classList.contains("scroll-reveal")||n.classList.add("scroll-reveal"),a.observe(n)})}function f(){var a,n;if(document.getElementById("join-modal"))return;document.body.insertAdjacentHTML("beforeend",`
    <!-- Join Modal -->
    <div id="join-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden bg-black/90 backdrop-blur-md px-gutter">
        <div class="glass-card max-w-md w-full p-xl relative border border-outline-variant/30 space-y-md">
            <button class="absolute top-4 right-4 text-on-surface-variant hover:text-secondary close-modal" data-modal="join-modal">
                <span class="material-symbols-outlined text-2xl">close</span>
            </button>
            <div class="text-center space-y-xs">
                <h3 class="font-headline-md text-headline-md uppercase text-on-surface">Join the <span class="text-neon-red">Collective</span></h3>
                <p class="font-body-md text-on-surface-variant text-sm">Enter your details to register for elite membership.</p>
            </div>
            <form id="join-form" class="space-y-sm">
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-name">Full Name</label>
                    <input type="text" id="join-name" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-email">Email Address</label>
                    <input type="email" id="join-email" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="join-tier">Select Tier</label>
                    <select id="join-tier" class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                        <option value="essential">Essential - $79/mo</option>
                        <option value="vanguard" selected>Vanguard - $149/mo</option>
                        <option value="elite">The Elite - $299/mo</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-neon-red text-white py-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Submit Application
                </button>
            </form>
        </div>
    </div>

    <!-- Trial Modal -->
    <div id="trial-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden bg-black/90 backdrop-blur-md px-gutter">
        <div class="glass-card max-w-md w-full p-xl relative border border-outline-variant/30 space-y-md">
            <button class="absolute top-4 right-4 text-on-surface-variant hover:text-secondary close-modal" data-modal="trial-modal">
                <span class="material-symbols-outlined text-2xl">close</span>
            </button>
            <div class="text-center space-y-xs">
                <h3 class="font-headline-md text-headline-md uppercase text-on-surface">Book a <span class="text-neon-red">Free Trial</span></h3>
                <p class="font-body-md text-on-surface-variant text-sm">Experience elite training first-hand.</p>
            </div>
            <form id="trial-form" class="space-y-sm">
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-name">Full Name</label>
                    <input type="text" id="trial-name" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="space-y-xs">
                    <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-email">Email Address</label>
                    <input type="email" id="trial-email" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                </div>
                <div class="grid grid-cols-2 gap-sm">
                    <div class="space-y-xs">
                        <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-date">Date</label>
                        <input type="date" id="trial-date" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                    </div>
                    <div class="space-y-xs">
                        <label class="text-xs uppercase tracking-widest text-on-surface-variant" for="trial-time">Time</label>
                        <input type="time" id="trial-time" required class="w-full bg-[#0a0a0a] border border-outline-variant text-on-surface p-sm focus:border-neon-red focus:ring-0 outline-none transition-colors">
                    </div>
                </div>
                <button type="submit" class="w-full bg-neon-red text-white py-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    Schedule Session
                </button>
            </form>
        </div>
    </div>
    `),(a=document.getElementById("join-form"))==null||a.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("join-name").value,s=document.getElementById("join-tier").value;alert(`Welcome, ${t}! Your application for the ${s.toUpperCase()} tier has been submitted successfully. We will reach out to you within 24 hours.`),document.getElementById("join-modal").classList.add("hidden"),e.target.reset()}),(n=document.getElementById("trial-form"))==null||n.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("trial-name").value,s=document.getElementById("trial-date").value,r=document.getElementById("trial-time").value;alert(`Success! ${t}, your free trial session has been booked for ${s} at ${r}. Check your email for confirmation.`),document.getElementById("trial-modal").classList.add("hidden"),e.target.reset()})}function p(){document.querySelectorAll(".join-btn, button").forEach(o=>{const a=o.classList.contains("join-btn"),n=o.textContent.trim().toUpperCase();(a||n==="JOIN NOW"||n==="SELECT TIER")&&o.addEventListener("click",e=>{e.preventDefault();const t=o.closest(".glass-card");if(t){const r=t.querySelector("span");if(r){const d=r.textContent.trim().toLowerCase(),l=document.getElementById("join-tier");l&&(d.includes("essential")?l.value="essential":d.includes("vanguard")?l.value="vanguard":d.includes("elite")&&(l.value="elite"))}}const s=document.getElementById("join-modal");s&&s.classList.remove("hidden")}),(n==="BOOK FREE TRIAL"||n==="BOOK A TOUR"||n==="BOOK CONSULTATION")&&o.addEventListener("click",e=>{e.preventDefault();const t=document.getElementById("trial-modal");t&&t.classList.remove("hidden")})}),document.querySelectorAll(".close-modal").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-modal");document.getElementById(a).classList.add("hidden")})}),window.addEventListener("click",o=>{["join-modal","trial-modal"].forEach(a=>{const n=document.getElementById(a);o.target===n&&n.classList.add("hidden")})})}
