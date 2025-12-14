// src/components/ChristmasCatClick.tsx
import Image from "next/image";

type CatClickProps = {
  onClick: () => void;
};

export default function ChristmasCatClick({ onClick }: CatClickProps) {
  return (
    <button onClick={onClick}>
      <Image
        src="/christmascat.png"
        width={512}
        height={512}
        alt="Christmas cat"
      />
    </button>
  );
}
