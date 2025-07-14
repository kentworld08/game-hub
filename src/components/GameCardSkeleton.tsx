import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
interface Props {
  height: string;
}

const GameCardSkeleton = ({ height }: Props) => {
  return (
    <Card.Root>
      <Skeleton height={height} variant="pulse" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
