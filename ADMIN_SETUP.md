# Google OAuth Setup Guide for Admin Portal

## 🚀 Quick Setup Instructions

### 1. Get Your Google OAuth Client ID

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Identity** API
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
5. Configure the OAuth consent screen if prompted
6. For **Application type**, select **Web application**
7. Add your authorized domains:
   - For development: `http://localhost:5173`
   - For production: `https://yourdomain.com`
8. Copy the **Client ID**

### 2. Update the AdminGatekeeper Component

Open `src/components/AdminGatekeeper.jsx` and replace the placeholder:

```javascript
// Replace this line:
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com'

// With your actual Client ID:
const GOOGLE_CLIENT_ID = '123456789-abcdefghijklmnop.apps.googleusercontent.com'
```

### 3. Update Allowed Admin Emails

In the same file, update the `allowedEmails` array with your admin emails:

```javascript
const allowedEmails = [
  'your-admin-email@gmail.com',
  'sensei@yourdojo.com',
  'shihan@kyokushin.com'
]
```

### 4. Test the Admin Portal

1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:5173/#admin`
3. Click the Google Sign-In button
4. Sign in with an authorized email

## 🔐 Security Features

- **Frontend-only authentication** - No backend required
- **Email-based access control** - Only authorized emails can access
- **JWT token verification** - Decodes Google's signed tokens
- **Auto logout** - Session management included
- **Clean UI** - Professional admin interface

## 🎯 Usage Examples

### Basic Usage
```jsx
import AdminGatekeeper from './AdminGatekeeper'
import AdminPanel from './AdminPanel'

function AdminPage() {
  return (
    <AdminGatekeeper>
      <AdminPanel />
    </AdminGatekeeper>
  )
}
```

### Custom Admin Component
```jsx
import AdminGatekeeper from './AdminGatekeeper'

function CustomAdmin() {
  return (
    <AdminGatekeeper>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">Custom Admin Panel</h1>
        <p className="text-gray-300">Your admin content here...</p>
      </div>
    </AdminGatekeeper>
  )
}
```

## 🛠️ Customization Options

### Update Admin Interface
The `AdminPanel.jsx` component includes:
- Dashboard with stats
- Student management
- Tournament management 
- Camp management
- Settings panel

### Styling
The components use Tailwind CSS with:
- Glassmorphism effects (`backdrop-blur-lg`)
- Karate theme colors (`karate-red`, `karate-black`)
- Responsive design
- Modern shadows and borders

### Adding New Features
To add new admin features:
1. Create new tab in `AdminPanel.jsx`
2. Add corresponding render function
3. Update the tabs array with new tab info

## 🌐 Deployment Notes

### Environment Variables (Optional)
You can move the Client ID to environment variables:

```javascript
// In AdminGatekeeper.jsx
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'fallback-client-id'
```

Then create `.env.local`:
```
VITE_GOOGLE_CLIENT_ID=your-actual-client-id
```

### Production Checklist
- [ ] Update Google OAuth authorized domains
- [ ] Replace placeholder Client ID
- [ ] Update allowed admin emails
- [ ] Test sign-in flow
- [ ] Verify access control works

## 🚨 Important Security Notes

1. **Client ID is public** - It's safe to include in frontend code
2. **Email verification** - Only users with authorized emails can access
3. **No backend secrets** - All authentication handled by Google
4. **Token expiration** - Google handles token lifecycle
5. **HTTPS required** - For production, ensure HTTPS is enabled

## 📱 Access the Admin Portal

- **Development**: `http://localhost:5173/#admin`
- **Production**: `https://yourdomain.com/#admin`
- **Navigation**: Click the 🔒 Admin link in the navbar

The admin portal is now ready to use! 🥋
