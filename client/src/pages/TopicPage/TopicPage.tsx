import Loader from "@/shared/ui/Loader/Loader";
import React, { Suspense } from "react";

const LazyTopicList = React.lazy(() => import("@/widgets/TopicList"));
const LazyTopicItem = React.lazy(() => import("@/widgets/TopicItem"));

export function TopicPage() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <LazyTopicList />
        <LazyTopicItem />
      </Suspense>
    </div>
  );
}

export default TopicPage;
