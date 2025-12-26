## Agentic WhatsApp Support for Ecommerce

Agentic Support Suite is a marketing site for an ecommerce-focused customer support platform that runs entirely on WhatsApp. The experience highlights WhatsApp integrations, automation features, and customer outcomes for online stores.

## Getting Started

Install dependencies and start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the experience locally.

### Available scripts

- `npm run dev` – start the development server with hot reloading
- `npm run build` – create an optimized production build
- `npm run start` – serve the production build locally
- `npm run lint` – run ESLint across the project

## Tech stack

- Next.js App Router
- Tailwind CSS v4
- TypeScript
- lucide-react icon set

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com/). Build locally with `npm run build`, then run:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-8e4ca3fe
```

After deployment, verify the production URL with:

```bash
curl https://agentic-8e4ca3fe.vercel.app
```
