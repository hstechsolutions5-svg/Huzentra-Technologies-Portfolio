# Huzentra — simple HTML portfolio

No Node.js, npm, templates, frameworks or build commands are needed.

## Open and edit

Double-click `index.html` to open the Landing page. Open `home.html` for the main portfolio. Edit either file in any text editor, save it, and refresh the browser.

| File | What to edit |
| --- | --- |
| `index.html` | Landing page text and sections |
| `home.html` | Main portfolio: projects, services, about, process, insights, contact |
| `style.css` | Colors, fonts, sizes, spacing, layout and mobile styles |
| `script.js` | Theme switch, mobile menu and local brief download |
| `images/logo.png` | Transparent logo |
| `images/hero.png` | Landing page artwork |
| `favicon.svg` | Browser tab icon |

Comments mark the sections. The navigation and footer appear in both HTML files, so edit both when changing those shared areas. Your manual HTML edits are never overwritten by a generator.

## Publish on GitHub Pages

1. Extract the ZIP first. Do not upload the ZIP itself.
2. Upload all the extracted files and the `images` folder into your repository's top level. `index.html` and `style.css` must sit next to each other.
3. Include `.nojekyll` (it may be hidden by your file browser).
4. In the repository, open **Settings → Pages**.
5. Choose **Deploy from a branch**, select your `main` branch and **/(root)**, then save.
6. Wait for GitHub's deployment to finish and open the link shown under Pages.

The top of your repository should look like this:

```text
index.html
home.html
style.css
script.js
favicon.svg
.nojekyll
README.md
images/
  logo.png
  hero.png
```

The Landing page will be at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/` and the Home page at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/home.html`.

If your repository is named `YOUR-USERNAME.github.io`, the repository-name segment is omitted. The same files work in either location because they use relative paths.

## If the page looks unstyled

- Make sure `style.css` was uploaded alongside `index.html` and `home.html`.
- Keep filenames exactly as supplied. GitHub Pages filenames are case-sensitive.
- Upload the entire `images` folder, not just the HTML files.
- Keep the stylesheet link as `href="style.css"`, not `/style.css` or a path from your computer.
- If using `/(root)` in Pages settings, put the website files at the repository root rather than inside an extra `build` or extracted ZIP folder.
- Wait for the new deployment to finish, then refresh with Ctrl+F5.

Official publishing instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Small practical notes

Google Fonts are optional: if offline, the page uses its built-in Arial fallback. The styles and images are local files.

The Light/Dark button remembers the visitor's choice where browser storage is available. Local file previews can have different storage behavior between browsers; GitHub Pages uses a consistent website origin.

The contact form downloads a project brief to the visitor's device. It does not send an email. A receiving email/form service still needs to be connected before changing the action to "Send".
