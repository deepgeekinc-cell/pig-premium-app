<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# Premium Pig — Ready-to-Deploy Package

This package contains a production-ready static build of the Premium Pig web app, PWA-enabled, and enhanced for privacy, SEO, and social sharing.

## What’s included
- `index.html`, `assets/` — Vite-built production files
- `manifest.json`, `sw.js`, icons/ — PWA support
- `privacy.html`, `terms.html`, `data-deletion.html`
- `robots.txt`, `sitemap.xml`, `.well-known/security.txt`
- Cookie consent banner and consent-gated analytics loader
- Social preview image: `social_preview.png`

## Quick local preview
```bash
# simple static server (requires Python 3)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Recommended deployment (Vercel — most seamless)
1. Sign up / login to Vercel and confirm email.
2. Create New Project → **Import** → choose "Import Third Party" or **Drag & Drop** and upload the contents of this package (ensure `index.html` is at the root).
3. In Project Settings → **Build & Output Settings**: no build step required (already built).
4. Add your **Custom Domain** in Domains tab and follow DNS instructions (point an A or CNAME as prompted).
5. Deploy. Enable **Enforce HTTPS** in domains settings.

### Vercel CLI (alternative)
```bash
npm i -g vercel
vercel login
# from inside the folder with index.html:
vercel --prod
```

## Netlify (alternate)
- Drag & Drop the folder in Netlify Sites dashboard; or use `netlify-cli`:
```bash
npm i -g netlify-cli
netlify deploy --dir=./ --prod
```

## Docker (self-host)
```bash
docker build -t premium-pig .
docker run -d -p 80:80 premium-pig
```

## Checklist before launch
- [ ] Replace `GA_MEASUREMENT_ID` in the analytics loader with your Google Analytics ID (or remove if you don't use GA).
- [ ] Add your real support email in `privacy.html` and `terms.html` (currently set to jpspencer369@gmail.com).
- [ ] If using Stripe/Supabase, make sure server-side keys are set and not committed to repo.
- [ ] Test account sign-up, payment checkout, and account deletion flow.
- [ ] Confirm cookie consent behavior in EU browsers (test incognito).

## Social media assets & captions
Generated sample images and caption templates are included in the `social_assets/` folder inside the package.

---
Deployed by helper script on 2025-08-28.
>>>>>>> 5363659 (Initial commit)
