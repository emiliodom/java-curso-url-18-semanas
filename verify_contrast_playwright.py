import os
from playwright.sync_api import sync_playwright

def test_contrast():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 900})

        # 1. Cheatsheet S16
        url = "file:///" + os.path.abspath("Material_Sesion_Clase_16_HTML_18_semanas/cheatsheet.html").replace("\\", "/")
        page.goto(url)
        page.evaluate("() => document.documentElement.setAttribute('data-bs-theme', 'light')")
        
        pre_styles = page.evaluate("""() => {
            const pre = document.querySelector('pre');
            const code = pre ? pre.querySelector('code') : null;
            const csPre = pre ? getComputedStyle(pre) : null;
            const csCode = code ? getComputedStyle(code) : null;
            return {
                preBg: csPre ? csPre.backgroundColor : null,
                preColor: csPre ? csPre.color : null,
                codeBg: csCode ? csCode.backgroundColor : null,
                codeColor: csCode ? csCode.color : null
            };
        }""")
        print("S16 Cheatsheet pre styles:", pre_styles)
        page.screenshot(path="verified_cheatsheet_light.png")

        # 2. Ejercicios S16
        url_ej = "file:///" + os.path.abspath("Material_Sesion_Clase_16_HTML_18_semanas/ejercicios.html").replace("\\", "/")
        page.goto(url_ej)
        page.evaluate("() => document.documentElement.setAttribute('data-bs-theme', 'light')")
        page.screenshot(path="verified_ejercicios_light.png")

        # 3. Challenge S16
        url_ch = "file:///" + os.path.abspath("Material_Sesion_Clase_16_HTML_18_semanas/challenge.html").replace("\\", "/")
        page.goto(url_ch)
        page.evaluate("() => document.documentElement.setAttribute('data-bs-theme', 'light')")
        page.screenshot(path="verified_challenge_light.png")

        # 4. Root index.html pills
        url_root = "file:///" + os.path.abspath("index.html").replace("\\", "/")
        page.goto(url_root)
        pill_styles = page.evaluate("""() => {
            const pill = document.querySelector('.pill.ok');
            const cs = pill ? getComputedStyle(pill) : null;
            return {
                bg: cs ? cs.backgroundColor : null,
                color: cs ? cs.color : null
            };
        }""")
        print("Root index .pill.ok styles:", pill_styles)

        browser.close()

if __name__ == "__main__":
    test_contrast()

