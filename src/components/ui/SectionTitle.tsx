const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-heading-4 text-metal-700 text-center mb-4 font-semibold px-4">
      {children}
    </h1>
  );
};

export default SectionTitle;
