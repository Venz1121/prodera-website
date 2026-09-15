# PRODERA Static Website

This is a Vercel/GitHub-compatible static website.

## Project structure

```text
.
├── index.html
├── golf-app.apk
└── images/
    ├── image-3.webp
    ├── prodera_login_screenshot.png
    ├── image-2.png
    ├── john-von-ryen-aguilar.jpg
    ├── eiron-dela-cruz.png
    ├── ckurt-naag.png
    └── mervin-pangilinan.png
```

Keep the image files inside `images/` and the Android installer at the project root as `golf-app.apk`. The HTML already uses these relative paths:

- `images/image-3.webp`
- `images/prodera_login_screenshot.png`
- `images/image-2.png`
- `images/john-von-ryen-aguilar.jpg`
- `images/eiron-dela-cruz.png`
- `images/ckurt-naag.png`
- `images/mervin-pangilinan.png`
- `./golf-app.apk`

## Deploy to Vercel

1. Create a GitHub repository and upload all project files.
2. In Vercel, choose **Add New Project** and import the repository.
3. Select **Other** as the framework preset.
4. Leave the build command blank.
5. Set the output directory to `.` or leave it blank.
6. Click **Deploy**.

This is a static site and does not require Node.js, PHP, or a database to display the landing page. The PHP/MySQL administration system mentioned in the page is not hosted by this project.
