# EmailJS Setup Guide

Set up EmailJS for email notifications when someone comments on your React portfolio.

## 🚀 Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com)
2. Sign up and verify email

### 2. Add Email Service
1. Go to "Email Services" → "Add New Service"
2. Choose Gmail (recommended)
3. Connect your Gmail account
4. Copy the Service ID

### 3. Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Name: `Portfolio Comment Notification`
3. Subject: `New Comment on Your Portfolio`
4. Use this template:

```html
<div class="container">
  <h2>New Comment on Your Portfolio</h2>
  <p><strong>From:</strong> {{from_name}}</p>
  <p><strong>Email:</strong> {{from_email}}</p>
  <p><strong>Comment:</strong></p>
  <div>{{message}}</div>
  <p><strong>Posted:</strong> {{timestamp}}</p>
</div>
```

5. Save and copy Template ID

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

### 5. Install EmailJS SDK
```bash
npm install @emailjs/browser
```

### 6. Update Code
Add to your `src/main.tsx` or create a separate config file:

```typescript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("your-public-key");
```

Update your contact component (`src/components/Contact/ContactSection.tsx`):

```typescript
import emailjs from '@emailjs/browser';

const serviceId = 'your-service-id';
const templateId = 'your-template-id';
const publicKey = 'your-public-key';

const sendEmail = async (formData: any) => {
  try {
    await emailjs.send(serviceId, templateId, formData, publicKey);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Email send failed:', error);
  }
};
```

### 7. Test
1. Start development server: `npm run dev`
2. Go to Contact page
3. Fill out the form
4. Check your email

## 📊 Free Tier Limits
- 200 emails per month
- No credit card required

## 🛠️ Troubleshooting
- **Gmail API Error**: Re-authenticate Gmail service
- **Emails in spam**: Check spam folder
- **Not sending**: Check browser console for errors
- **TypeScript errors**: Make sure types are properly imported

## 🔧 Environment Variables (Optional)
Create `.env` file in your project root:
```env
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

Then use in your component:
```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```
