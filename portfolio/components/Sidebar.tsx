export default function Sidebar({ anchorLinks }: { anchorLinks: string[] }) {  
  return (
    <aside className="sidebar">
      <ul>
        {anchorLinks.map((link) => (
            <li key={link}>
                <a href={`#${link.replaceAll(' ', '').toLowerCase()}`}>{link}</a>
            </li>
        ))}
    </ul>
</aside>
)
}