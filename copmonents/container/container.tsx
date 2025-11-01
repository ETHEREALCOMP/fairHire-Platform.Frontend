interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-7xl pl-6 pr-6">{children}</div>;
}
