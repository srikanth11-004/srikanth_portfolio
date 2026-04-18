# Portfolio Deployment Guide

## Part 1: EmailJS Setup (Contact Form)

### Step 1: Install EmailJS Package
Open your terminal in the project folder and run:
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE)
3. Sign up with your email
4. Verify your email address

### Step 3: Add Email Service
1. After login, click on "Email Services" in the left sidebar
2. Click "Add New Service" button
3. Choose "Gmail" (or your preferred email provider)
4. Click "Connect Account" and sign in with badavathsrikanth270@gmail.com
5. After connecting, you'll see a **Service ID** (looks like: service_xxxxxxx)
6. **COPY THIS SERVICE ID** - you'll need it later

### Step 4: Create Email Template
1. Click on "Email Templates" in the left sidebar
2. Click "Create New Template" button
3. Fill in the template:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: New Message from Portfolio - {{from_name}}
   - **Content** (paste this):
   ```
   You have received a new message from your portfolio website!
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```
4. Click "Save"
5. You'll see a **Template ID** (looks like: template_xxxxxxx)
6. **COPY THIS TEMPLATE ID** - you'll need it later

### Step 5: Get Your Public Key
1. Click on "Account" in the left sidebar
2. Click on "General" tab
3. You'll see **Public Key** (looks like: xxxxxxxxxxxxxxxxxx)
4. **COPY THIS PUBLIC KEY** - you'll need it later

### Step 6: Update Your Code
1. Open `src/components/Contact.jsx`
2. Find these lines (around line 14-16):
   ```javascript
   const SERVICE_ID = 'YOUR_SERVICE_ID';
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
3. Replace with your actual values:
   ```javascript
   const SERVICE_ID = 'service_xxxxxxx';  // Your Service ID
   const TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID
   const PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxx'; // Your Public Key
   ```
4. Save the file

### Step 7: Test Locally
1. Run your project: `npm run dev`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email (badavathsrikanth270@gmail.com) - you should receive the message!

---

## Part 2: Deploy to Vercel

### Step 1: Push Code to GitHub
1. Go to https://github.com/
2. Click "New repository" (green button)
3. Name it: `portfolio` (or any name you like)
4. Keep it Public
5. Click "Create repository"

6. In your project terminal, run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

### Step 2: Deploy to Vercel
1. Go to https://vercel.com/
2. Click "Sign Up" and choose "Continue with GitHub"
3. After signing in, click "Add New..." → "Project"
4. You'll see your GitHub repositories
5. Find your `portfolio` repository and click "Import"
6. Vercel will auto-detect it's a Vite project
7. Click "Deploy" (no need to change any settings)
8. Wait 1-2 minutes for deployment to complete
9. You'll get a live URL like: `https://your-portfolio-xxxxx.vercel.app`

### Step 3: Get Your Live Website Link
1. After deployment, you'll see "Congratulations!" with your live URL
2. Click "Visit" to see your live portfolio
3. Share this URL with anyone!

### Step 4: Future Updates
Whenever you make changes:
1. Save your files
2. Run in terminal:
   ```bash
   git add .
   git commit -m "Updated portfolio"
   git push
   ```
3. Vercel will automatically redeploy your site in 1-2 minutes!

---

## Troubleshooting

### EmailJS Not Working?
- Check if all three IDs are correct in Contact.jsx
- Make sure you verified your email in EmailJS
- Check browser console for errors (F12 → Console tab)

### Vercel Deployment Failed?
- Make sure package.json exists
- Try running `npm run build` locally first
- Check Vercel deployment logs for errors

### Form Not Sending?
- Open browser console (F12) and check for errors
- Make sure you're connected to internet
- Verify EmailJS credentials are correct

---

## Your Portfolio URLs (Fill these in after deployment)

- **Live Website**: ___________________________________
- **GitHub Repository**: ___________________________________
- **EmailJS Dashboard**: https://dashboard.emailjs.com/

---

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Vercel Documentation: https://vercel.com/docs
- Contact me if you face any issues!

---

Good luck with your deployment! 🚀
