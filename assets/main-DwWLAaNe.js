(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("menu-btn"),n=document.getElementById("mobile-menu");s&&n&&s.addEventListener("click",()=>{n.classList.toggle("hidden");const r=s.querySelector("span");r&&(r.textContent=n.classList.contains("hidden")?"menu":"close")});const a=window.location.pathname.split("/").pop()||"index.html",e={"index.html":["nav-home","mobile-nav-home"],"story.html":["nav-story","mobile-nav-story"],"programs.html":["nav-programs","mobile-nav-programs"],"trainers.html":["nav-trainers","mobile-nav-trainers"],"membership.html":["nav-membership","mobile-nav-membership"],"gallery.html":["nav-gallery","mobile-nav-gallery"],"contact.html":["nav-contact","mobile-nav-contact"],"app.html":["nav-app","mobile-nav-app"]}[a];e&&e.forEach(r=>{const i=document.getElementById(r);i&&(i.classList.remove("text-on-surface"),i.classList.add("text-secondary","border-b-2","border-secondary","pb-1"))});const t=document.getElementById("top-nav");t&&window.addEventListener("scroll",()=>{window.scrollY>50?(t.classList.add("py-2","bg-surface/95","shadow-xl"),t.classList.remove("py-4","bg-surface/80")):(t.classList.remove("py-2","bg-surface/95","shadow-xl"),t.classList.add("py-4","bg-surface/80"))}),d(),u(),c()});function c(){const s={threshold:.15,rootMargin:"0px 0px -50px 0px"},n=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("active"),o.target.classList.contains("animate-bounce-once")&&o.target.classList.add("animate-bounce"))})},s);document.querySelectorAll(".scroll-reveal, .glass-card, .animate-reveal").forEach(a=>{a.classList.contains("scroll-reveal")||a.classList.add("scroll-reveal"),n.observe(a)})}function d(){var n,a;if(document.getElementById("join-modal"))return;document.body.insertAdjacentHTML("beforeend",`
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
    `),(n=document.getElementById("join-form"))==null||n.addEventListener("submit",o=>{o.preventDefault();const e=document.getElementById("join-name").value,t=document.getElementById("join-tier").value;alert(`Welcome, ${e}! Your application for the ${t.toUpperCase()} tier has been submitted successfully. We will reach out to you within 24 hours.`),document.getElementById("join-modal").classList.add("hidden"),o.target.reset()}),(a=document.getElementById("trial-form"))==null||a.addEventListener("submit",o=>{o.preventDefault();const e=document.getElementById("trial-name").value,t=document.getElementById("trial-date").value,r=document.getElementById("trial-time").value;alert(`Success! ${e}, your free trial session has been booked for ${t} at ${r}. Check your email for confirmation.`),document.getElementById("trial-modal").classList.add("hidden"),o.target.reset()})}function u(){document.querySelectorAll(".join-btn, button").forEach(s=>{const n=s.classList.contains("join-btn"),a=s.textContent.trim().toUpperCase();(n||a==="JOIN NOW"||a==="SELECT TIER")&&s.addEventListener("click",o=>{o.preventDefault();const e=s.closest(".glass-card");if(e){const r=e.querySelector("span");if(r){const i=r.textContent.trim().toLowerCase(),l=document.getElementById("join-tier");l&&(i.includes("essential")?l.value="essential":i.includes("vanguard")?l.value="vanguard":i.includes("elite")&&(l.value="elite"))}}const t=document.getElementById("join-modal");t&&t.classList.remove("hidden")}),(a==="BOOK FREE TRIAL"||a==="BOOK A TOUR"||a==="BOOK CONSULTATION")&&s.addEventListener("click",o=>{o.preventDefault();const e=document.getElementById("trial-modal");e&&e.classList.remove("hidden")})}),document.querySelectorAll(".close-modal").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-modal");document.getElementById(n).classList.add("hidden")})}),window.addEventListener("click",s=>{["join-modal","trial-modal"].forEach(n=>{const a=document.getElementById(n);s.target===a&&a.classList.add("hidden")})})}
