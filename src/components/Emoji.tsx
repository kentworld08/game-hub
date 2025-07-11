import { Image, type ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: "https://i.pinimg.com/736x/d9/28/42/d9284243374c8237f184512198bf070b.jpg",
      alt: "meh",
      boxSize: "25px",
      borderRadius: "full",
    },
    4: {
      src: "https://i.pinimg.com/736x/63/93/4d/63934d191ffcde099b1822d4f85384e8.jpg",
      alt: "recommended",
      boxSize: "25px",
      borderRadius: "full",
    },
    5: {
      src: "https://i.pinimg.com/736x/ec/d3/72/ecd37270ec4aa2e8b797318c09ff1c3e.jpg",
      alt: "exceptional",
      boxSize: "25px",
      borderRadius: "full",
    },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
