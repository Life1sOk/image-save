import { useId } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { SkeletonWrapper, MainSkelWrapper, SkeletonStyle } from "./index.style";

const SkeletBlock = () => {
  const uniqueId = useId();

  return (
    <SkeletonWrapper>
      <Skeleton width={214} height={29} />
      <MainSkelWrapper>
        {Array(6)
          .fill(1)
          .map((_, index) =>
            index % 2 != 0 || index === 0 ? (
              <Skeleton
                key={index + uniqueId}
                height={200}
                width={335}
                wrapper={SkeletonStyle}
              />
            ) : (
              <Skeleton
                key={index + uniqueId}
                width={150}
                height={200}
                wrapper={SkeletonStyle}
              />
            )
          )}
      </MainSkelWrapper>
    </SkeletonWrapper>
  );
};

export default SkeletBlock;
