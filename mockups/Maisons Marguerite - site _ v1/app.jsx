/* Maisons Marguerite — App entry, router, tweaks */

const { useState: aUs, useEffect: aUe } = React;

/* Hash-based router. Routes:
   /                       Home
   /aubade /jaulerry /iena Property page
   /bienvenue/aubade       Guide hub
   /bienvenue/aubade/arrivee, /maison, /carnet, /depart  Guide sections
*/

function parseRoute() {
  const hash = window.location.hash || "#/";
  return hash.replace(/^#/, "") || "/";
}

window.mmGo = function(route) {
  window.location.hash = route;
  window.scrollTo({ top: 0, behavior: "instant" in window.HTMLElement.prototype ? "instant" : "auto" });
};

/* Defaults are wrapped in EDITMODE markers so the host can persist tweaks. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "parallax": 0.2,
  "cardVariant": "default",
  "displayFont": "Cormorant"
}/*EDITMODE-END*/;

const FONT_OPTIONS = {
  "Cormorant": '"Cormorant Garamond", "EB Garamond", Garamond, serif',
  "Playfair":  '"Playfair Display", "Cormorant Garamond", Garamond, serif',
  "Lora":      '"Lora", "Cormorant Garamond", Garamond, serif',
  "Tenor":     '"Tenor Sans", "Cormorant Garamond", Garamond, serif',
};

function App() {
  const [route, setRoute] = aUs(parseRoute());
  const [lang, setLang] = aUs(() => {
    const stored = localStorage.getItem("mm-lang");
    return stored === "en" ? "en" : "fr";
  });
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [isMobileViewport, setIsMobileViewport] = aUs(false);

  /* Persist language */
  aUe(() => { localStorage.setItem("mm-lang", lang); }, [lang]);

  /* Route listener */
  aUe(() => {
    const onHash = () => {
      setRoute(parseRoute());
      // scroll to top on route change
      requestAnimationFrame(() => window.scrollTo(0, 0));
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  /* Update lucide-icons after each render so any dangling [data-lucide] gets replaced.
     We render via Icon component so this is just a safeguard. */
  aUe(() => {
    if (window.lucide && window.lucide.createIcons) {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  });

  /* Listen for viewport messages from parent (the viewport switcher) */
  aUe(() => {
    const onMessage = (e) => {
      if (e.data && e.data.type === "mm_viewport") {
        setIsMobileViewport(e.data.width <= 480);
      }
    };
    window.addEventListener("message", onMessage);
    // Probe parent
    try { window.parent.postMessage({ type: "mm_app_ready" }, "*"); } catch (e) {}
    return () => window.removeEventListener("message", onMessage);
  }, []);

  /* Apply display font override globally */
  aUe(() => {
    const stack = FONT_OPTIONS[tweaks.displayFont] || FONT_OPTIONS["Cormorant"];
    document.documentElement.style.setProperty("--mm-font-display", stack);
  }, [tweaks.displayFont]);

  /* Decide what to render */
  let page = null;
  if (route === "/") {
    page = <HomePage lang={lang} setLang={setLang}
                     parallaxIntensity={Number(tweaks.parallax) || 0}
                     cardVariant={tweaks.cardVariant}
                     isMobileViewport={isMobileViewport}
                     goTo={window.mmGo} />;
  } else if (route === "/aubade" || route === "/jaulerry" || route === "/iena") {
    page = <PropertyPage slug={route.slice(1)} lang={lang}
                          parallaxIntensity={Number(tweaks.parallax) || 0}
                          isMobileViewport={isMobileViewport}
                          goTo={window.mmGo} />;
  } else if (route === "/bienvenue/aubade") {
    page = <GuideHubPage lang={lang} goTo={window.mmGo} />;
  } else if (route === "/bienvenue/aubade/arrivee") {
    page = <GuideArriveePage lang={lang} goTo={window.mmGo} />;
  } else if (route === "/bienvenue/aubade/maison") {
    page = <GuideMaisonPage lang={lang} goTo={window.mmGo} />;
  } else if (route === "/bienvenue/aubade/carnet") {
    page = <GuideCarnetPage lang={lang} goTo={window.mmGo} />;
  } else if (route === "/bienvenue/aubade/depart") {
    page = <GuideDepartPage lang={lang} goTo={window.mmGo} />;
  } else {
    page = <HomePage lang={lang} setLang={setLang}
                     parallaxIntensity={Number(tweaks.parallax) || 0}
                     cardVariant={tweaks.cardVariant}
                     isMobileViewport={isMobileViewport}
                     goTo={window.mmGo} />;
  }

  return (
    <React.Fragment>
      <Nav route={route} lang={lang} setLang={setLang} isMobileViewport={isMobileViewport} />
      <main key={route}>{page}</main>
      <Footer lang={lang} setLang={setLang} />

      <TweaksPanel>
        <TweakSection label={lang === "fr" ? "Typographie" : "Typography"} />
        <TweakRadio
          label={lang === "fr" ? "Titres" : "Display font"}
          value={tweaks.displayFont}
          onChange={(v) => setTweak("displayFont", v)}
          options={["Cormorant", "Playfair", "Lora", "Tenor"]}
        />
        <TweakSection label={lang === "fr" ? "Hero" : "Hero"} />
        <TweakSlider
          label={lang === "fr" ? "Parallaxe" : "Parallax"}
          value={Number(tweaks.parallax)}
          min={0} max={0.4} step={0.05}
          unit=""
          onChange={(v) => setTweak("parallax", v)}
        />
        <TweakSection label={lang === "fr" ? "Cartes" : "Cards"} />
        <TweakRadio
          label={lang === "fr" ? "Traitement" : "Treatment"}
          value={tweaks.cardVariant}
          onChange={(v) => setTweak("cardVariant", v)}
          options={["default", "editorial"]}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

/* Mount once Lucide is loaded */
function mount() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

if (window.lucide) { mount(); }
else { window.addEventListener("load", mount, { once: true }); }
