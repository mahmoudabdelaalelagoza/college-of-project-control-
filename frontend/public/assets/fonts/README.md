# Shared brand text fonts

Both `frontend/index.html` (Vite) and `src/app/layout.next.tsx` (Next) link this directory's `fonts.css`. All text font requests are local and relative to that stylesheet, including installations with a configured base path. Neither building nor viewing brand text requires Google Fonts.

- Poppins: normal 300, 400, 500, 600, 700, 800, Latin and Latin Extended.
- Source Serif 4: normal and genuine italic, variable 400?900, Latin and Latin Extended.
- `source-serif-4-latin-variable.woff2` is the exact pre-existing mobile font, retained byte for byte. It now supplies the single `Source Serif 4` family at every width, including public mobile weights 800 and 900. The duplicate `CPCM Mobile Heading` alias is no longer needed.
- All files are unmodified Google Fonts WOFF2 subsets, licensed under SIL Open Font License 1.1. See `Poppins-OFL.txt`, `SourceSerif4-OFL.txt` and `source-manifest.json` for URLs, exact declared weights, sizes and SHA-256 hashes.
- `font-display: swap` retains readable fallbacks during loading. Text outside supplied subsets uses the existing system fallbacks; no new language support is implied.

Upstream projects: https://github.com/itfoundry/Poppins and https://github.com/adobe-fonts/source-serif. Provider CSS: https://fonts.googleapis.com/css2 (retrieved 22 October 2026).

Do not add a second remote brand-font stylesheet or a separately named mobile font face. Remixicon is an independent existing icon-font dependency.
