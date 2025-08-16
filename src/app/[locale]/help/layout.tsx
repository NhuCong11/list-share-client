function ForbiddenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export const generateMetadata = () => {
  return {
    title: 'ListShare | Help',
  };
};

export default ForbiddenLayout;
