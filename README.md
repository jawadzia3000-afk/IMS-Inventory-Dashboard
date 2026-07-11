# IMS Dashboard — Now Fully Functional

This was originally a static UI scaffold (no working buttons, no data persistence,
and a build-breaking bug where the "view" button called an undefined function).
It's now a complete, working inventory management app.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL. First screen is a simple login (pick Admin or Employee —
no password, this is a local demo app).

To build for production: `npm run build` (outputs to `dist/`).

## What's actually functional now

- **Login & roles** — sign in as Admin or Employee; the sidebar has a live
  "View as" switch too, so you can flip between dashboards instantly.
- **Full inventory CRUD** — Add, view, edit, and delete products for real.
  Everything persists to `localStorage`, so it survives a page refresh.
- **Product images** — uploads are converted to base64 and saved with the
  item, so they persist too (no more disappearing blob URLs).
- **Working search, filtering, and pagination** on the Inventory page,
  including a functional navbar search that jumps you there with results filtered.
- **Live dashboard stats, charts, low-stock list, employee performance, and
  activity feed** — all computed from the real inventory data instead of
  hardcoded numbers.
- **New pages** for the sidebar links that used to 404: Employees, Reports
  (with a real CSV export), and Settings (profile + a "reset demo data" option).
- **Update Status** page for employees to quickly change an item's status.
- Toast notifications instead of `alert()` popups.

## Project structure

- `src/context/` — `InventoryContext` (CRUD + derived stats/charts, persisted),
  `AuthContext` (login/role), `ToastContext` (notifications).
- `src/data/seedInventory.js` — starting demo data.
- `src/components/pages/` — routed pages.
- `src/components/inventory/` — inventory table, form, and modals.

## Notes

- There's no backend — this is a frontend-only demo, so "persistence" means
  your browser's local storage. Settings → Reset Demo Data wipes it back to
  the seed data.
- The role switcher in the sidebar is a demo convenience (no real auth
  backend exists to enforce roles), clearly labeled "View as".
