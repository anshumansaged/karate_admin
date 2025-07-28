import { useState } from 'react'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'students', name: 'Students', icon: '🥋' },
    { id: 'tournaments', name: 'Tournaments', icon: '🏆' },
    { id: 'camps', name: 'Camps', icon: '⛺' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ]

  const renderDashboard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="admin-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">👥</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">248</div>
            <div className="text-white/70 text-sm">Active Students</div>
          </div>
        </div>
      </div>
      
      <div className="admin-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">🏆</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">12</div>
            <div className="text-white/70 text-sm">Upcoming Tournaments</div>
          </div>
        </div>
      </div>
      
      <div className="admin-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">⛺</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-white/70 text-sm">Active Camps</div>
          </div>
        </div>
      </div>
      
      <div className="admin-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">💰</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">$12,450</div>
            <div className="text-white/70 text-sm">Monthly Revenue</div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStudents = () => (
    <div className="admin-card p-6">
      <h3 className="text-xl font-bold text-white mb-4 font-kyokushin">Student Management</h3>
      <div className="space-y-4">
        {[
          { name: 'Takeshi Yamamoto', belt: 'Black Belt 2nd Dan', status: 'Active' },
          { name: 'Maria Silva', belt: 'Brown Belt 1st Kyu', status: 'Active' },
          { name: 'John Cooper', belt: 'Blue Belt 4th Kyu', status: 'On Hold' },
          { name: 'Anna Petrov', belt: 'Yellow Belt 7th Kyu', status: 'Active' }
        ].map((student, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-karate-red rounded-full flex items-center justify-center text-white font-bold">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-white font-semibold">{student.name}</div>
                <div className="text-white/70 text-sm">{student.belt}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                student.status === 'Active' 
                  ? 'bg-admin-green/20 text-admin-green border border-admin-green/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {student.status}
              </span>
              <button className="text-admin-blue hover:text-blue-300 text-sm font-medium">Edit</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="admin-button">
          <span>➕</span>
          Add New Student
        </button>
      </div>
    </div>
  )

  const renderTournaments = () => (
    <div className="admin-card p-6">
      <h3 className="text-xl font-bold text-white mb-4 font-kyokushin">Tournament Management</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          { 
            name: 'Kyokushin World Championship 2025', 
            date: '2025-09-15', 
            location: 'Tokyo, Japan',
            participants: 156
          },
          { 
            name: 'Regional Youth Tournament', 
            date: '2025-08-20', 
            location: 'New York, USA',
            participants: 89
          }
        ].map((tournament, index) => (
          <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h4 className="text-white font-semibold mb-2">{tournament.name}</h4>
            <div className="space-y-1 text-sm text-white/70">
              <div>📅 {tournament.date}</div>
              <div>📍 {tournament.location}</div>
              <div>👥 {tournament.participants} participants</div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-karate-red hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors">
                Edit
              </button>
              <button className="bg-admin-gray hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="bg-admin-green hover:bg-green-600 text-white px-6 py-3 rounded-xl font-kyokushin font-semibold transition-colors flex items-center gap-2">
          <span>🏆</span>
          Create Tournament
        </button>
      </div>
    </div>
  )

  const renderCamps = () => (
    <div className="admin-card p-6">
      <h3 className="text-xl font-bold text-white mb-4 font-kyokushin">Camp Management</h3>
      <div className="text-center py-12">
        <div className="text-6xl mb-4">⛺</div>
        <p className="text-white/70 mb-6">Camp management features coming soon...</p>
        <button className="bg-admin-blue hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-kyokushin font-semibold transition-colors flex items-center gap-2 mx-auto">
          <span>⛺</span>
          Schedule Camp
        </button>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="admin-card p-6">
      <h3 className="text-xl font-bold text-white mb-4 font-kyokushin">System Settings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-white font-semibold mb-2">General Settings</h4>
          <p className="text-white/70 text-sm mb-4">Configure basic system settings</p>
          <button className="text-admin-blue hover:text-blue-300 text-sm font-medium">Configure</button>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-white font-semibold mb-2">User Management</h4>
          <p className="text-white/70 text-sm mb-4">Manage admin users and permissions</p>
          <button className="text-admin-blue hover:text-blue-300 text-sm font-medium">Manage Users</button>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-white font-semibold mb-2">Backup & Restore</h4>
          <p className="text-white/70 text-sm mb-4">Backup and restore system data</p>
          <button className="text-admin-blue hover:text-blue-300 text-sm font-medium">Backup</button>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <h4 className="text-white font-semibold mb-2">System Logs</h4>
          <p className="text-white/70 text-sm mb-4">View system activity logs</p>
          <button className="text-admin-blue hover:text-blue-300 text-sm font-medium">View Logs</button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'students':
        return renderStudents()
      case 'tournaments':
        return renderTournaments()
      case 'camps':
        return renderCamps()
      case 'settings':
        return renderSettings()
      default:
        return null
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="mb-8">
        <nav className="flex space-x-1 admin-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-kyokushin font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-karate-red text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {renderContent()}
      </div>
    </div>
  )
}

export default AdminPanel
