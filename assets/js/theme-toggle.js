// Theme toggle: stores preference in localStorage and sets data-theme on <html>
(function() {
    const KEY = 'theme';
    const ICON_SUN = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.66-11.34l-.7.7M4.04 19.96l-.7-.7M21 12h-1M4 12H3m15.66 5.66l-.7-.7M6.34 4.34l-.7.7M12 5a7 7 0 100 14 7 7 0 000-14z" />';
    const ICON_MOON = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.getElementById('theme-toggle-icon');
        if (icon) {
            icon.innerHTML = theme === 'light' ? ICON_SUN : ICON_MOON;
        }
    }

    function init() {
        let theme = localStorage.getItem(KEY);
        if (!theme) {
            const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
            theme = prefersLight ? 'light' : 'dark';
        }
        applyTheme(theme);

        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', function() {
                const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
                const next = current === 'light' ? 'dark' : 'light';
                localStorage.setItem(KEY, next);
                applyTheme(next);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
