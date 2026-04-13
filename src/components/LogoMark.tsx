import Image from "next/image";

type LogoMarkProps = {
  alt?: string;
  className?: string;
  priority?: boolean;
  size?: number;
};

export function LogoMark({
  alt = "J&E Statistical Consulting logo",
  className,
  priority = false,
  size = 40,
}: LogoMarkProps) {
  return (
    <Image
      src="/icon.svg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
