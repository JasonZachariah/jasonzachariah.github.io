export default function Sidebar({ anchorLinks }: { anchorLinks: string[] }) {  
  return (
    <aside className="project-sidebar hidden md:h-screen md:sticky md:inset-y-10 md:mt-10 md:left-0 md:flex md:flex-col sidebar-border">
      <ul>
        {anchorLinks.map((link) => (
            <li key={link}>
                <a href={`#${link.replaceAll(' ', '-').toLowerCase()}`}>{link}</a>
            </li>
        ))}
    </ul>
</aside>
)
}