import Loader from "@/shared/ui/Loader/Loader";
import React, { Suspense } from "react";

const LazyTopicList = React.lazy(() => import("@/widgets/TopicList"));

export function TopicPage() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <LazyTopicList />
      </Suspense>
    </div>
  );
}

export default TopicPage;
