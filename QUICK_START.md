# 🚀 Quick Start Guide

Your personalized portfolio is ready! Here's what to do next:

## Immediate Next Steps (5 minutes)

1. **Test locally** (make sure it works):
   ```bash
   cd C:\Users\DELL\Desktop\kashi_portfolio2
   npm install
   npm run dev
   ```
   Open http://localhost:5173 and click through the site! 🎬

2. **Check content** in `src/data/portfolio.ts`:
   - ✅ Your name, email, links
   - ✅ Your projects
   - ✅ Your skills
   - ✅ Your experience

## Deploy to GitHub & Vercel (15 minutes)

### 1. Create GitHub Repo
- Go to https://github.com/new
- Name: `kashi-portfolio`
- Make it **Public**
- Copy the HTTPS URL

### 2. Connect Local Repo
```bash
cd C:\Users\DELL\Desktop\kashi_portfolio2
git remote add origin https://github.com/YOUR_USERNAME/kashi-portfolio.git
git branch -m master main
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username!

### 3. Deploy to Vercel
- Go to https://vercel.com
- Sign in with GitHub
- Click "Add New → Project"
- Select `kashi-portfolio` repo
- **Framework**: Vite
- Click "Deploy"

✅ **Done!** Your site is live at `kashi-portfolio.vercel.app`

---

## ✨ Customizations (Optional but Recommended)

### Add Your Photo
1. Get a square portrait (JPG or PNG)
2. Convert to WebP format (use CloudConvert.com)
3. Save as:
   - `pic.png` (background-removed)
   - `pic1.jpeg` (high-res)
4. Place in root folder
5. Run: `npm run images`
6. Commit and push:
   ```bash
   git add public/assets/
   git commit -m "Update portrait"
   git push
   ```

### Add Your Resume PDF
1. Save your resume as `Kashi_Mahtta_Resume.pdf`
2. Place in `public/assets/`
3. Commit and push:
   ```bash
   git add public/assets/Kashi_Mahtta_Resume.pdf
   git commit -m "Add resume"
   git push
   ```

---

## 🎨 Edit Your Portfolio Content

Open `src/data/portfolio.ts` and edit:

```typescript
export const profile = {
  fullName: 'Your Full Name',
  displayName: 'Your Display Name',
  email: 'your.email@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourprofile',
  },
  // ... more fields
};

export const projects = [
  {
    id: 'project-1',
    title: 'Project Name',
    year: '2026',
    genre: 'Category • Tech • Stack',
    logline: 'One-line project description',
    stack: ['React', 'Node.js', 'MongoDB'],
    // ... more fields
  },
  // Add more projects
];
```

**Every change auto-updates the whole site!** ✨

---

## 💻 Run Dev Server Anytime

```bash
cd C:\Users\DELL\Desktop\kashi_portfolio2
npm run dev
```

Visit http://localhost:5173 to see live changes.

---

## 📚 Full Documentation

- **Deployment details**: See `DEPLOYMENT_GUIDE.md`
- **Feature overview**: See `README.md`
- **Edit more content**: See `src/data/portfolio.ts` comments

---

## 🆘 Common Issues

**"npm: command not found"**
- Install Node.js from https://nodejs.org (18+ LTS)

**"Port 5173 already in use"**
```bash
npm run dev -- --port 3000
```

**"Changes not showing on Vercel"**
```bash
git push
# Wait 2-3 minutes for Vercel to rebuild
```

**"Photo not updating"**
```bash
npm run images
git add public/assets/
git commit -m "Rebuild images"
git push
```

---

## 🎬 You're All Set!

Your cinema-inspired portfolio is ready to impress. Good luck with your next opportunity! 

**Share your portfolio URL**: `https://kashi-portfolio.vercel.app`

*Remember: Update it regularly with new projects and achievements!*
