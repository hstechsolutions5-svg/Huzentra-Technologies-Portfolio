# Huzentra Technologies — Portfolio Website

**Building Technology. Creating Possibilities.**

A responsive portfolio for Huzentra Technologies, an independent technology venture founded by **Muhammad Huzaifa**. The website presents its Flutter development focus, selected projects, approach to building software, and future direction.

Built with **HTML, CSS, and a little vanilla JavaScript**. No frameworks, package installation, templates, or build commands are required.

> This repository contains the simple, manually editable version of the portfolio. The website files are ready to upload to GitHub Pages.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technology](#technology)
- [File structure](#file-structure)
- [Run locally](#run-locally)
- [Customize the website](#customize-the-website)
- [Publish on GitHub Pages](#publish-on-github-pages)
- [Troubleshooting](#troubleshooting)
- [Contact form and privacy](#contact-form-and-privacy)
- [Pre-launch checklist](#pre-launch-checklist)
- [Future improvements](#future-improvements)
- [Feedback](#feedback)
- [Author and licensing](#author-and-licensing)

## Overview

The website has two separate pages:

| Page | Purpose |
| --- | --- |
| `index.html` | A concise Landing Page introducing the brand and guiding visitors toward the work or a project conversation. |
| `home.html` | The main portfolio hub with projects, services, about, process, insights, and contact sections. |

The visual identity uses dark navy, royal blue, and cyan, with a light theme, clean typography, a transparent logo, and subtle digital artwork.

The published GitHub Pages address is available in the repository's **Settings → Pages** after deployment. No live URL is hard-coded in this README.

## Features

- Separate Landing Page and Home Page.
- Responsive layouts for desktop, tablet, and mobile screens.
- Light/Dark switch that remembers the visitor's selection when browser storage is available.
- Initial theme based on the visitor's system preference when no saved choice exists.
- Transparent navigation logo, with theme-specific styling.
- Mobile navigation that closes after selecting a link or pressing Escape.
- Project and service details using native HTML disclosure elements.
- Project brief form with browser validation and a local text-file download.
- Skip-to-content link, visible keyboard focus styles, and labeled form controls.
- Relative links for compatibility with GitHub Pages repository subfolders.
- Commented, directly editable source files.

Accessibility features are included, but this is not a claim of a formal accessibility audit.

## Technology

| Technology | Used for |
| --- | --- |
| HTML | Content, page structure, navigation, and forms |
| CSS | Brand colors, themes, typography, and responsive layouts |
| Vanilla JavaScript | Theme switching, mobile navigation, and brief downloads |
| Google Fonts | Manrope and Sora, with Arial as a fallback |
| GitHub Pages | Intended static hosting destination |

There is no application backend, database, or build tool. Google Fonts is an external font dependency; the CSS and images are included locally.

## File structure

Upload this structure to the top level of the repository:

```text
.
├── index.html
├── home.html
├── style.css
├── script.js
├── favicon.svg
├── .nojekyll
├── README.md
└── images/
    ├── logo.png
    └── hero.png
```

The empty `.nojekyll` file keeps this plain static site from being processed as a Jekyll site.

## Run locally

1. Download and extract the source ZIP, or clone the repository.
2. Open `index.html` in a browser for the Landing Page.
3. Open `home.html` for the main portfolio.
4. Edit the source in a text editor, save, and refresh the browser.

**No terminal commands are needed.** An editor's local preview server is optional.

Direct file previews work without a build step. Theme preference storage can behave differently between browsers when opening files directly; test persistence on the published website as well.

## Customize the website

### Text and sections

Edit `index.html` or `home.html`. Comments identify major sections such as navigation, projects, services, about, process, insights, contact, and footer.

Change the visible text inside the HTML tags. Keep existing section IDs when possible because navigation links point to them.

The navigation and footer are repeated in both HTML files. Update both copies when changing shared information.

### Colors and themes

Edit the variables near the top of `style.css`.

```css
:root {
  --background: #091321;
  --surface: #111f30;
  --text: #eef3fb;
  --accent: #66dce6;
  --blue: #235cf0;
}
```

The `html[data-theme="light"]` block contains light-theme overrides. Change the existing values rather than adding a second, competing theme block.

Layout, spacing, and typography rules appear below the color variables. Responsive rules are near the end of the stylesheet.

### Logo, artwork, and favicon

- Replace `images/logo.png` with a transparent PNG.
- Replace `images/hero.png` to change the Landing Page artwork.
- Replace `favicon.svg` to change the browser-tab icon.

Keeping filenames unchanged avoids having to update the HTML paths. If the replacement logo has different proportions, review the `.logo-crop` styles and the image dimensions in both HTML files.

The dark theme currently renders the logo in white using `--logo-filter`. Adjust this if the new logo should retain its original colors.

### Projects and services

Edit their sections in `home.html`. To add an item, copy a complete existing card or disclosure block and update its title, description, and details.

Keep claims accurate: label concepts and unfinished projects clearly, and add public demo or source links only when available.

### Page titles and search descriptions

Update the `<title>` and `<meta name="description">` in each page's `<head>`. These describe the individual pages; changing one page does not update the other.

### Interactions

`script.js` is divided into three small sections:

1. Light/Dark mode.
2. Mobile navigation.
3. Project brief download.

You do not need to edit JavaScript to change normal page content or colors.

## Publish on GitHub Pages

### 1. Upload the website files

Use a repository dedicated to this portfolio, or back up an existing site's files before replacing them.

Extract the ZIP and upload **its contents**, preserving the `images` folder. Put `index.html` at the top level of your chosen publishing folder. Do not upload only the ZIP or place everything inside an extra enclosing folder. [GitHub entry-file requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### 2. Enable publishing

1. Commit the uploaded files to your publishing branch, usually `main`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` (or the branch containing your site) and **/(root)**.
5. Save, wait for deployment, then use **Visit site**.

Future commits to that publishing source trigger updates. Review the repository's **Actions** tab if deployment fails. [GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 3. Check the published pages

A typical project-site address looks like:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/home.html
```

These are examples, not configured links. Use the actual address shown in Pages settings.

For a user or organization site whose repository is named `YOUR-USERNAME.github.io`, the repository-name segment is omitted. [GitHub site creation guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Troubleshooting

### The page shows only text and structure

This usually means the stylesheet was not loaded.

Confirm that `style.css` is beside both HTML files and that the HTML includes:

```html
<link rel="stylesheet" href="style.css">
<script defer src="script.js"></script>
```

Do not change these to `/style.css` or `/script.js`: a leading slash targets the domain root, not your repository's folder.

Try opening `style.css` beside your published page in the browser. If it returns a 404 page, check its upload location and exact filename.

### Images are missing

- Upload the entire `images` folder.
- Preserve filename capitalization and extensions.
- Use paths such as `images/logo.png`, not paths from your computer.
- Check that replacement files have the same names used in the HTML.

### The site is missing or shows the wrong page

Check that your selected publishing branch and folder contain `index.html` at their top level. With **/(root)** selected, it should not be inside an extra `simple-portfolio` or `build` folder. [GitHub entry-file requirements](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### Changes are not appearing

Save and commit the changed files, wait for the deployment to finish, then refresh with **Ctrl+F5** or test in a private browser window. Confirm that you edited the same branch and folder selected in Pages settings.

### Theme switch or mobile menu does not work

Make sure `script.js` is uploaded beside the HTML files and JavaScript is enabled. If you changed an element's ID or class, update the matching JavaScript selector.

### The form does not send an email

This is expected. The current form downloads a brief; it is not connected to an email service.

## Contact form and privacy

The Home Page form validates the visitor's input and downloads `huzentra-project-brief.txt` to their device.

**It does not send an inquiry, email the founder, or store submissions on a server.**

The form fields are processed locally by the current script. Theme preferences may be stored in the browser under `huzentra-theme`. Fonts are requested from Google Fonts when available.

To receive inquiries, connect a suitable form endpoint or backend and update the interface and privacy information to explain the new behavior. Do not place private API keys, passwords, or other secrets in HTML or JavaScript.

## Pre-launch checklist

- [ ] Confirm the founder details and brand copy.
- [ ] Review project descriptions and remove inaccurate claims.
- [ ] Add verified demo, source, and social links where appropriate.
- [ ] Check both pages in Light and Dark modes.
- [ ] Test mobile navigation and keyboard access.
- [ ] Check the logo and artwork on narrow screens.
- [ ] Verify all links on the published GitHub Pages address.
- [ ] Keep the form labeled as a download unless a receiving service is connected.
- [ ] Check that no secrets or private files are included.
- [ ] Decide on a license before presenting the code as freely reusable.

## Future improvements

Possible additions, not currently implemented:

- A connected inquiry form.
- Dedicated project case-study pages.
- Published insight articles.
- Social-sharing metadata and preview images.
- A custom domain.

## Feedback

Suggestions and bug reports can be recorded through the repository's Issues tab if enabled. Include the affected page, steps to reproduce, browser, screen size, and a screenshot where useful. Do not include private form data or credentials.

## Author and licensing

**Muhammad Huzaifa**  
Founder, **Huzentra Technologies**

*Building Technology. Creating Possibilities.*

No license is included in this portfolio package. The repository owner should choose and add a `LICENSE` file before specifying reuse permissions. This README does not grant permission to reuse the Huzentra name, logo, or other brand assets.
