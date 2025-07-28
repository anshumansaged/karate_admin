import { useState } from 'react'

const AdminGatekeeper = ({ children }) => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // List of allowed admin emails and passwords (for demo)
  const allowedAdmins = {
    'admin@karate.com': 'admin123',
    'sensei@dojo.com': 'sensei123',
    'shihan@kyokushin.com': 'shihan123'
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (allowedAdmins[email] && allowedAdmins[email] === password) {
      setUser({ email, name: email.split('@')[0] })
    } else {
      setError('Invalid credentials or unauthorized access')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setEmail('')
    setPassword('')
    setError('')
  }

  // User not signed in
  if (!user) {
    return (
      <div className="admin-container flex items-center justify-center">
        <div className="admin-card p-8 max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">🥋</div>
            <h1 className="text-2xl font-bold text-white mb-2 font-kyokushin">
              Karate Admin Portal
            </h1>
            <p className="text-white/70">
              Enter your credentials to access the admin panel
            </p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="admin-input"
                placeholder="admin@karate.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
                placeholder="Enter password"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="admin-button w-full"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-xs text-white/50 text-center bg-white/5 p-3 rounded-lg">
            <div className="font-semibold mb-1">Demo Credentials:</div>
            <div>admin@karate.com / admin123</div>
            <div>sensei@dojo.com / sensei123</div>
          </div>
        </div>
      </div>
    )
  }

  // User signed in - show admin panel
  return (
    <div className="admin-container">
      {/* Admin Header */}
      <div className="admin-card border-b border-white/10 rounded-none">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🥋</span>
            <h1 className="text-xl font-bold text-white font-kyokushin">
              Karate Admin Portal
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-white/70">Welcome, <span className="text-white font-semibold">{user.name}</span></span>
            <button
              onClick={handleLogout}
              className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-all backdrop-blur-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Admin Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

export default AdminGatekeeper
