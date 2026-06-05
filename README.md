# Mohammad Johny React Site

A minimal React + Vite project scaffold for launching a website page for `www.mohammadjohny.com`.

## Structure

- `index.html` - HTML entry point
- `src/main.jsx` - React bootstrap file
- `src/App.jsx` - Base React page with link and automatic redirect
- `src/index.css` - Styles for the page
- `package.json` - Project metadata and scripts
- `vite.config.js` - Vite config for React

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local dev server URL shown in the terminal.

## Build

```bash
npm run build
```

## Preview production

```bash
npm run preview
```

## Deploy to Razor Host with custom domain

1. Build the site:

```bash
npm run build
```

2. Upload the contents of `dist/` to your Razor Host public web folder (usually `public_html/`, `www/`, or `htdocs/`).

3. Keep the generated `.htaccess` file in the root of the uploaded folder if your host uses Apache. This ensures client-side routing works correctly.

4. In Razor Host domain settings, point `www.mohammadjohny.com` to the hosting account. Typically this means:
	- setting the domain's DNS A record to the host IP, or
	- using the host's nameservers.

5. Make sure the site is served from the root origin, so `https://www.mohammadjohny.com` loads the app directly.

### Notes

 - No extra React code changes are required for a custom domain.
 - If Razor Host supports HTTPS, enable it so the site is secure.
 - If the host requires a custom `CNAME` file, add one only if their docs ask for it.

## Continuous Deployment (GitHub Actions)

1. Add the following repository secrets in GitHub:
	- `FTP_SERVER` — your FTP host (e.g. ftp.example.com)
	- `FTP_USERNAME` — FTP username
	- `FTP_PASSWORD` — FTP password
	- `FTP_REMOTE_PATH` — remote path to upload (e.g. `/public_html`)

2. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` will build and deploy to the FTP host automatically.

## Local deploy via script

1. Copy `.env.example` to `.env` and fill in your FTP credentials.

```bash
cp .env.example .env
```

2. Install dependencies and run the deploy script:

```bash
npm install
npm run deploy:ftp
```

The script builds the site then uploads the `dist/` folder to your FTP host using the credentials in `.env`.

## Security

- Never commit your `.env` with credentials to source control. Use GitHub Secrets for CI deployments.
- If you prefer SFTP, replace the `scripts/ftp-deploy.js` logic with an SFTP client or use a CI action that supports SFTP.

