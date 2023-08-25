'use client';
import { useState } from 'react';

const useShowMore = (originalVisibleCount: number, array: any[]) => {
  const [visibleCount, setVisibleCount] = useState(originalVisibleCount);
  const length = array.length;
  const shouldShowButton = visibleCount < length;
  const shouldHideButton =
    visibleCount >= length && visibleCount > originalVisibleCount;
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + originalVisibleCount);
  };

  const handleHideMore = () => {
    setVisibleCount(originalVisibleCount);
  };

  return {
    length,
    visibleCount,
    shouldShowButton,
    handleHideMore,
    handleShowMore,
    shouldHideButton,
  };
};

export default useShowMore;
