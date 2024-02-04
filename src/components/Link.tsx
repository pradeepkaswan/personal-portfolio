type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 transition-colors focus:outline-offset-6"
    >
      {children}
    </a>
  );
}
