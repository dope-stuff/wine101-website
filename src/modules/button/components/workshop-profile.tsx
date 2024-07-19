'use client'
import {Button} from '@nextui-org/react'
import {useRouter} from 'next/navigation'

interface WorkshopProfileButtonProps {
  id: string
  email: string
}

export default function WorkshopProfileButton({id, email}: WorkshopProfileButtonProps) {
  const router = useRouter()
  return (
    <Button
      id="workshopProfile"
      className="w-[150px] bg-primary-1 text-white rounded-full border border-black text-xl"
      onClick={() => router.push(`/workshop/${id}/profile?email=${email}`)}
    >
      Profile
    </Button>
  )
}
