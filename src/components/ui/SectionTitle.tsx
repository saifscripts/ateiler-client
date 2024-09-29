import { cn } from '../../lib/cn';

const SectionTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        'text-3xl lg:text-4xl text-metal-800 text-center mb-4 font-semibold px-4',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
