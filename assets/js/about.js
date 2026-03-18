let currentActiveCard = {};

function selectYear(selectedYear) {
    document.querySelectorAll(".org-chart").forEach(function(el) {
        el.classList.add("hidden");
    });
    
    document.getElementById("chart-" + selectedYear).classList.remove("hidden");

    document.querySelectorAll(".year-btn").forEach(function(btn) {
        btn.classList.add("bg-surface", "text-gray-400", "border-gray-700");
        btn.classList.remove("bg-recOrange", "text-white", "border-recOrange", "border-2", "glow-orange");
        
        if(btn.id === "btn-" + selectedYear) {
            btn.classList.remove("bg-surface", "text-gray-400", "border-gray-700");
            btn.classList.add("bg-recOrange", "text-white", "border-recOrange", "border-2", "glow-orange");
        }
    });

    closeOrgDetails(selectedYear);
}

function showOrgDetails(cardElement, yr) {
    const panel = document.getElementById("org-detail-panel-" + yr);
    
    if (currentActiveCard[yr] === cardElement) {
        closeOrgDetails(yr);
        return;
    }

    if (currentActiveCard[yr]) {
        currentActiveCard[yr].classList.remove("ring-2", "ring-offset-2", "ring-offset-dark", "ring-recOrange", "scale-105");
    }

    cardElement.classList.add("ring-2", "ring-offset-2", "ring-offset-dark", "ring-recOrange", "scale-105");
    currentActiveCard[yr] = cardElement;

    const name = cardElement.getAttribute("data-name");
    const role = cardElement.getAttribute("data-role");
    const dept = cardElement.getAttribute("data-dept");
    const bio = cardElement.getAttribute("data-bio");
    const imgSrc = cardElement.getAttribute("data-img");
    const bigImgSrc = cardElement.getAttribute("data-big-img") || imgSrc;
    const roleColorClass = cardElement.getAttribute("data-color") || "text-recOrange";

    const gridContainer = cardElement.closest('.grid');
    if (gridContainer) {
        gridContainer.insertAdjacentElement('afterend', panel);
    }

    document.getElementById("detail-name-" + yr).innerText = name;
    
    const roleEl = document.getElementById("detail-role-" + yr);
    roleEl.innerText = role;
    roleEl.className = "text-lg font-bold uppercase tracking-wider mb-2 " + roleColorClass;
    
    panel.className = "w-full bg-[#1e1e2d] border-l-4 rounded-r-lg p-6 md:p-8 mb-16 shadow-2xl transition-all duration-500 border-" + roleColorClass.replace("text-", "");

    document.getElementById("detail-dept-" + yr).innerText = dept;
    document.getElementById("detail-bio-" + yr).innerText = bio;

    const imgEl = document.getElementById("detail-img-" + yr);
    const fallbackEl = document.getElementById("detail-fallback-" + yr);
    const fallbackTextEl = document.getElementById("detail-fallback-text-" + yr);

    if (bigImgSrc && bigImgSrc !== "fallback") {
        imgEl.src = bigImgSrc;
        imgEl.classList.remove("hidden");
        fallbackEl.classList.add("hidden");
    } else {
        imgEl.classList.add("hidden");
        fallbackEl.classList.remove("hidden");
        const initials = name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
        fallbackTextEl.innerText = initials;
    }

    if (panel.classList.contains("hidden")) {
        panel.classList.remove("hidden");
        panel.style.opacity = "0";
        setTimeout(() => { panel.style.opacity = "1"; }, 50);
    }

    setTimeout(() => {
        panel.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
}

function closeOrgDetails(yr) {
    const panel = document.getElementById("org-detail-panel-" + yr);
    if(panel) panel.classList.add("hidden");
    
    if (currentActiveCard[yr]) {
        currentActiveCard[yr].classList.remove("ring-2", "ring-offset-2", "ring-offset-dark", "ring-recOrange", "scale-105");
        currentActiveCard[yr] = null;
    }
}


