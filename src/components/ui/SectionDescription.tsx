import { cn } from '../../lib/cn';

const SectionDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-body-2 text-center mb-8 text-metal-500 max-w-xl mx-auto px-4',
        className
      )}
    >
      {children}
    </p>
  );
};

export default SectionDescription;
