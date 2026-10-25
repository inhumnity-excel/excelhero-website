export function ExtLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="break-all text-excel-ink underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}
