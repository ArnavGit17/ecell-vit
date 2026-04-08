# E-Cell VIT Mumbai — Full-Stack Website

A premium, dark-themed, multi-page full-stack website for the Entrepreneurship Cell of Vidyalankar Institute of Technology, Mumbai.

## Tech Stack

**Frontend:** Next.js 14 (App Router), Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express.js, Mongoose  
**Database:** MongoDB  

## Folder Structure

```
ecell-vit/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── teamController.js  # Team CRUD
│   │   ├── eventController.js # Event CRUD
│   │   └── contactController.js # Contact messages
│   ├── middleware/
│   │   └── adminAuth.js       # Admin secret auth
│   ├── models/
│   │   ├── TeamMember.js
│   │   ├── Event.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── teamRoutes.js
│   │   ├── eventRoutes.js
│   │   └── contactRoutes.js
│   ├── seed/
│   │   └── seed.js            # Database seeder
│   ├── server.js              # Express entry point
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── app/
│   │   ├── layout.js          # Root layout (Navbar + Footer)
│   │   ├── globals.css        # Global styles, glassmorphism, glow
│   │   ├── page.js            # Home page
│   │   ├── about/page.js      # About page
│   │   ├── team/page.js       # Team page
│   │   ├── events/page.js     # Events page
│   │   ├── contact/page.js    # Contact page
│   │   └── admin/page.js      # Admin panel
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── TeamCard.jsx
│   │   ├── EventCard.jsx
│   │   └── PageWrapper.jsx
│   ├── lib/
│   │   ├── api.js             # API client
│   │   └── fallback.js        # Fallback data
│   ├── public/
│   │   └── team/              # Team member images
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── jsconfig.json
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── README.md
```

## Pages

| Route       | Description                       |
|-------------|-----------------------------------|
| `/`         | Home — hero, stats, featured team & events, CTA |
| `/about`    | About — mission, vision, values, timeline |
| `/team`     | Team — full team grid with LinkedIn links |
| `/events`   | Events — upcoming/past tabs with category badges |
| `/contact`  | Contact — form + info, stores to MongoDB |
| `/admin`    | Admin — manage team, events, view messages |

## Local Development Setup

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Backend

```bash
cd backend
npm install

# Copy and configure environment
cp .env.example .env
# Edit .env with your MongoDB URI

# Seed the database
npm run seed

# Start development server
npm run dev
```

Backend runs at `http://localhost:5000`

### 2. Frontend

```bash
cd frontend
npm install

# Copy and configure environment
cp .env.example .env.local
# Ensure NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

Frontend runs at `http://localhost:3000`

## API Endpoints

### Public Endpoints
| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | /api/team         | Get all team members |
| GET    | /api/events       | Get all events       |
| GET    | /api/events?upcoming=true | Get upcoming events |
| POST   | /api/contact      | Submit contact form  |
| GET    | /api/health       | Health check         |

### Admin Endpoints (require `x-admin-secret` header)
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | /api/team           | Create team member     |
| PUT    | /api/team/:id       | Update team member     |
| DELETE | /api/team/:id       | Delete team member     |
| POST   | /api/events         | Create event           |
| PUT    | /api/events/:id     | Update event           |
| DELETE | /api/events/:id     | Delete event           |
| GET    | /api/contact        | Get all messages       |
| PUT    | /api/contact/:id/read | Mark message as read |
| DELETE | /api/contact/:id    | Delete message         |

## Deployment

### Database — MongoDB Atlas (Free Tier)
1. Go to https://cloud.mongodb.com and create a free cluster
2. Create a database user and whitelist IP (or `0.0.0.0/0` for all)
3. Get the connection string: `mongodb+srv://user:pass@cluster.xxxxx.mongodb.net/ecell-vit`
4. Run the seeder: `MONGODB_URI=<your-uri> npm run seed` from the backend folder

### Backend — Render
1. Push backend to a GitHub repo
2. Go to https://render.com → New Web Service
3. Connect your repo, set root directory to `backend`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI` = your Atlas connection string
   - `ADMIN_SECRET` = your chosen secret
   - `FRONTEND_URL` = your Vercel frontend URL
7. Deploy!

### Frontend — Vercel
1. Push frontend to a GitHub repo
2. Go to https://vercel.com → Import Project
3. Set root directory to `frontend`
4. Add Environment Variables:
   - `NEXT_PUBLIC_API_URL` = your Render backend URL + `/api`
   - `NEXT_PUBLIC_ADMIN_SECRET` = your admin secret
5. Deploy!

### Post-Deployment
- Update the backend `FRONTEND_URL` env var to your Vercel domain for CORS
- Test all pages and the admin panel
- Seed the database if not already done

## Features
- Dark theme with glassmorphism and neon glow effects
- Animated page transitions via Framer Motion
- Responsive design (mobile, tablet, desktop)
- Contact form with rate limiting
- Admin panel for managing content
- Fallback data when API is unavailable
- Custom scrollbar, noise texture overlay
- Gradient text effects and hover animations

## Team Members
1. Tejas Pawar — CEO
2. Arnav Tripathi — CFO Head & Marketing Head
3. Soham Dugade — Networking Head
4. Ved Songire — CTO & Documentation Head
5. Kedar Sawant — CTO Head
6. Pakhi Katre — CFO Co-Head
