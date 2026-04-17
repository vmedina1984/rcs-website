# rcs-website maintenance

Reference knowledge for working on the RCS · AI Driven Solutions marketing site (https://rcs.com.pa).

## Stack

- Vite + React 18 + TypeScript + Tailwind 3
- Single page, Spanish copy, black & gold theme
- All logic lives in `src/App.tsx` (~700 lines). Global CSS overrides in `src/App.css` (`#root` is forced full-width).
- Logo at `public/rcs-logo.png`. Do not rename.

## Common commands

```bash
npm install       # deps
npm run dev       # local preview (http://localhost:5173)
npm run lint      # ESLint
npm run build     # production bundle into dist/
```

There is no test suite and no CI. `npm run lint` and `npm run build` are the only guardrails.

## Deployment

Production is Vercel, auto-deploying any push to `main`:

- Apex `rcs.com.pa` is primary (A record `76.76.21.21`).
- `www.rcs.com.pa` → 307 → apex (CNAME `cname.vercel-dns.com`).
- Both domains have valid Let's Encrypt certs issued by Vercel.

To ship a change: push to a branch, open a PR targeting `main`, merge. Vercel builds in ~60-90 sec.

Do **NOT** run `vercel` CLI or `deploy_frontend` for this project — the Vercel GitHub integration owns deployment. Running manual deploys will create orphan deployments.

## Contact form (Contacto section)

- Submits client-side to `https://api.web3forms.com/submit`.
- Access key is committed to source (`8bd79198-...`). Web3Forms keys are public by design.
- Delivery address is `info@rcs.com.pa`. The form was activated by the owner; submissions are delivered directly.
- Hidden honeypot field `botcheck` blocks obvious bots.
- UI states: idle → loading ("Enviando...") → success (gold check + "¡Mensaje enviado! Te responderemos pronto.") or error (server message rendered inline).

Formsubmit.co was tried first and failed (Cloudflare challenge returning HTML to AJAX). Do not revert.

## DNS (OnlyDomains)

Email lives on Sophos Email Gateway and must stay intact when editing DNS:

- MX 10 → `mx-01-us-east-2.prod.hydra.sophos.com`
- MX 20 → `mx-02-us-east-2.prod.hydra.sophos.com`
- TXT SPF: `v=spf1 include:_spf_useast2.prod.hydra.sophos.com ~all`
- TXT DMARC (`_dmarc`): `V=DMARC1;p=quarantine; rua=mailto:vmedina@rcs.com.pa; ruf=mailto:vmedina@rcs.com.pa`
- TXT Sophos domain verification record (do not delete)

Only web-related records (A @, CNAME www) should ever be changed to point at Vercel.

## Testing the contact form

Web3Forms rejects server-side POSTs on the free tier ("This method is not allowed. Use our API in client side"). Test via the browser UI only — fill the form on https://rcs.com.pa/#contacto and watch for the gold-check success state. Use `enter_test_mode` + `recording_start` for visual proof.

## Repo & owner

- Repo: `vmedina1984/rcs-website`
- Owner contact: `vmedina@rcs.com.pa` (same as `info@rcs.com.pa` inbox for form delivery)
