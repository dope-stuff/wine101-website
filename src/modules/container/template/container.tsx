interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({children, className}: ContainerProps) {
  return <div className={`flex flex-col max-w-[2040px] mx-auto p-4 ${className}`}>{children}</div>
}
