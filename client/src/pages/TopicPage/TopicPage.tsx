import Loader from "@/shared/ui/Loader/Loader";
import React, { Suspense } from "react";
import styles from "./TopicPage.module.css";

const LazyTopicList = React.lazy(() => import("@/widgets/TopicList"));
const LazyTopicItem = React.lazy(() => import("@/widgets/TopicItem"));

export function TopicPage() {
  return (
    <>
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          <LazyTopicList />
          <LazyTopicItem />
        </Suspense>
      </div>
    </>
  );
}

export default TopicPage;
