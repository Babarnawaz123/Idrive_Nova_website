iDriveNova connected static redesign

Reusable shared components added:
- shared-components.js renders the exact same homepage footer on Home, Areas Served, and all 31 city pages.
- shared-components.js also renders one shared HOW iDRIVENOVA CAN HELP YOU block everywhere.
- shared-components.css mirrors the original homepage styling for both shared components.
- Nested city pages automatically use ../ links; root pages use normal links.

Edit the footer or help content once in shared-components.js and it updates across every page.


Latest component update:
- Signup payment dropdown uses: Zelle: 571-271-5667.
- Help section on Areas Served and all city pages uses the exact homepage spacing/layout system.
- Footer uses the exact homepage footer spacing/layout system and is injected from shared-components.js.
- Areas Served pages use the same 1420px content container and responsive breakpoints for the shared Help/Footer components.
