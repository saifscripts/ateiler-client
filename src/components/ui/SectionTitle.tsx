const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-heading-4 text-center mb-4 font-semibold">
      {children}
    </h1>
  );
};

export default SectionTitle;
