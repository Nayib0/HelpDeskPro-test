import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

export default function AgentDashboard() {
  return (
    ProtectedRoute({role: "agent", children: (
        <h1></h1>    
  )
})  )
}
