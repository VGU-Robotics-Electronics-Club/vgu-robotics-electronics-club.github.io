(function(){
    function q(id){return document.getElementById(id)}
    var btn = q('mobile-menu-button');
    var menu = q('mobile-menu');
    var closeBtn = q('mobile-menu-close');
    var backdrop = q('mobile-menu-backdrop');

    var ICON_OPEN = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />\n                        </svg>';
    var ICON_CLOSE = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />\n                        </svg>';

    function isOpen(){ return menu && !menu.classList.contains('hidden'); }

    function open(){
        if(menu){ menu.classList.remove('hidden'); menu.classList.add('block'); document.documentElement.style.overflow = 'hidden'; }
        if(btn) btn.innerHTML = ICON_CLOSE;
        if(btn) btn.setAttribute('aria-expanded', 'true');
    }
    function close(){
        if(menu){ menu.classList.remove('block'); menu.classList.add('hidden'); document.documentElement.style.overflow = ''; }
        if(btn) btn.innerHTML = ICON_OPEN;
        if(btn) btn.setAttribute('aria-expanded', 'false');
    }

    function toggle(){
        if(isOpen()) close(); else open();
    }

    if(btn) btn.addEventListener('click', toggle);
    if(closeBtn) closeBtn.addEventListener('click', close);
    if(backdrop) backdrop.addEventListener('click', close);

    // close on Escape
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

    // close when a link inside menu is clicked (so navigation doesn't leave menu visible)
    document.addEventListener('click', function(e){
        if(!menu) return;
        var target = e.target;
        if(menu.contains(target) && target.tagName === 'A'){
            close();
        }
    });

    // set initial button state if menu visible by default
    if(btn && isOpen()){ btn.innerHTML = ICON_CLOSE; btn.setAttribute('aria-expanded','true'); }
})();
