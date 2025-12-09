import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

export default function ClientDashboard() {
  return (
    ProtectedRoute({role: "client", children: (
        <h1></h1>    
  )
})  )
}
