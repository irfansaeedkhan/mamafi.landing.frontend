import clsx from "clsx";

interface Props {
  className: string;
  children: React.ReactNode;
}

export const HeadingBox: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  // Checking husky pre-commit hook
  return (
    <div
      className={clsx(
        `text-14px font-medium px-10 py-3 text-themeDark bg-white font-Minecraft  uppercase text-center tracking-wide
        `,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
