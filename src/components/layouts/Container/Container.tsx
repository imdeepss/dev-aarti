import { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Container = ({ className = '', children }: Props) => {
  return (
    <section
      className={`max-w-screen-xl !mx-auto px-5 lg:mx-9 relative ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
