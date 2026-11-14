# Raa’i

A case study on livestock monitoring with edge AI and existing farm cameras. Explore animal tracking, posture and weight estimation, and Arabic-language reporting.

This branch serves the public case study using static HTML, CSS, and JavaScript. It has no package installation, environment variables, or backend requirements.

## Run locally

```sh
git clone --single-branch --branch raai-portfolio https://github.com/zeadhelal579-ux/projects-portfolio.git raai-portfolio
cd raai-portfolio
python -m http.server 8000
```

Open `http://localhost:8000/`.

## Make changes

| Location | What to edit |
| --- | --- |
| `index.html` | Case-study sections, copy, links, and captions |
| `css/base.css` | Color and typography tokens |
| `css/hero.css` | Opening layout and feature visual |
| `css/` | Section styles, layout breakpoints, and reduced motion |
| `js/` | Navigation and project-specific interactions |
| `assets/images/` | Local portfolio visuals |
| `vercel.json` | Static hosting settings |

See [Architecture](ARCHITECTURE.md) for the section map and browser behavior.

## Deploy to Vercel

1. Create a Vercel project and import `zeadhelal579-ux/projects-portfolio`.
2. In **Settings → Environments → Production → Branch Tracking**, select `raai-portfolio`.
3. Use the repository root, **Other** as the framework, an empty **Build Command**, and `.` as the output directory. The branch includes these build settings in `vercel.json`.
4. Deploy from the selected branch and open the generated URL.

[Static build settings](https://vercel.com/docs/builds/configure-a-build) · [Production branch settings](https://vercel.com/docs/git#production-branch)
