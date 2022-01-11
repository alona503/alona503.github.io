import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright'

export default function CopyRight() {
  return (
    <footer className="copyRight">
      <CopyrightIcon fontSize="small" />
      {new Date().getFullYear()}
    </footer>
  )
}
