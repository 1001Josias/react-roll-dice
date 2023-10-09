export default function SideOne(customStyle: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...customStyle} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0' y='0' width='16' height='16' rx='0' fill='#ffff' stroke='none' />
      <circle cx='8' cy='8' r='1.5' />
    </svg>
  )
}
