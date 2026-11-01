# Resume web page

Static site: `index.html`, `style.css`, `script.js` and `assets/`. No build step.

## Local preview

    python3 -m http.server 8000

Open http://localhost:8000

## Deployment

    docker compose -f docker-compose.prod.yml up -d --build

Served by nginx on port 3001. Edit the content directly in `index.html`.
