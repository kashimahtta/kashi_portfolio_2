# 🎬 Kashi Mahtta Portfolio — Deployment Guide

Your personalized portfolio is ready! Follow these steps to deploy on GitHub & Vercel.

---

## 📋 Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Create Repository**:
   - Repository name: `kashi-portfolio` (or any name you prefer)
   - Description: `Personal portfolio - Full-Stack Developer & AI/LLM Enthusiast`
   - Make it **Public** (so Vercel can access it)
   - Do NOT initialize with README (we already have one)
   - Click "Create repository"

3. **Copy the repository URL** (HTTPS): `https://github.com/YOUR_USERNAME/kashi-portfolio.git`

---

## 🔗 Step 2: Connect Local Repo to GitHub

Run these commands in your `kashi_portfolio2` folder (open terminal here):

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/kashi-portfolio.git

# Rename master branch to main (optional but recommended)
git branch -m master main

# Push to GitHub
git push -u origin main
```

**Replace** `YOUR_USERNAME` with your actual GitHub username!

---

## 🚀 Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub (or create account)
3. Click "Add New" → "Project"
4. Select your `kashi-portfolio` repository
5. **Framework**: Select "Vite"
6. **Root Directory**: Leave as `.`
7. **Build Command**: `npm run build`
8. **Output Directory**: `dist`
9. Click "Deploy"

✅ **Your portfolio is now live!** Vercel will provide a URL like `kashi-portfolio.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally (one-time)
npm install -g vercel

# Navigate to your portfolio folder
cd C:\Users\DELL\Desktop\kashi_portfolio2

# Deploy
vercel
```

Follow the prompts and connect to GitHub when asked.

---

## 🎨 Step 4: Add Your Portrait Photo

Your portfolio currently uses placeholder images. To add your own:

1. **Prepare your portrait** (preferably square, 1100x1100px or larger)
2. **Place these images in** `public/assets/`:
   - `portrait-420.webp` (420×420 for mobile)
   - `portrait-720.webp` (720×720 for tablet)
   - `portrait-1100.webp` (1100×1100 for desktop)

   **Tip**: Use online WebP converter (e.g., CloudConvert, Ezgif) to convert JPG/PNG to WebP

3. **Commit and push**:
   ```bash
   git add public/assets/
   git commit -m "Add personal portrait photos"
   git push
   ```

Vercel will **automatically redeploy** when you push to GitHub!

---

## 📄 Step 5: Add Your Resume PDF

1. **Rename your resume to** `Kashi_Mahtta_Resume.pdf`
2. **Place it in** `public/assets/`
3. **Commit and push**:
   ```bash
   git add public/assets/Kashi_Mahtta_Resume.pdf
   git commit -m "Add resume PDF"
   git push
   ```

---

## 🔧 Step 6: Customize Your Domain (Optional)

To use a custom domain (e.g., `kashi-mahtta.com`):

1. Go to Vercel dashboard → Your project
2. Settings → Domains
3. Add your custom domain
4. Update your domain's DNS records (instructions provided by Vercel)

---

## 🛠️ Local Development

To test changes locally:

```bash
cd C:\Users\DELL\Desktop\kashi_portfolio2

# Install dependencies
npm install

# Run dev server
npm run dev
```

Then open http://localhost:5173 in your browser

---

## 📝 Future Customizations

### Update Portfolio Content
Edit `src/data/portfolio.ts` to add:
- More projects
- Skills
- Experience
- Achievements

### Change Colors & Theme
Edit `src/data/portfolio.ts` - Update the `palette` colors in each project object.

### Modify Components
All React components are in `src/components/` - Feel free to customize!

---

## 🚨 Troubleshooting

**Build fails on Vercel?**
```bash
# Rebuild locally to catch errors
npm run build
```

**Changes not showing on Vercel?**
```bash
# Ensure you pushed to GitHub
git status
git push
```

**Port already in use?**
```bash
npm run dev -- --port 3000
```

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **TypeScript Docs**: https://www.typescriptlang.org/docs

---

## ✨ You're All Set!

Your portfolio is ready to showcase your skills. Good luck! 🎬

*"Every project is an Original." — Kashi Mahtta*
