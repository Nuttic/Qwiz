import Loader from "@/shared/ui/Loader/Loader";
import React, { Suspense } from "react";
import styles from "./TopicPage.module.css";

const LazyTopicList = React.lazy(() => import("@/widgets/TopicList"));

export function TopicPage() {
  return (
    <>
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          <LazyTopicList />
        </Suspense>
      </div>
    </>
  );
}

export default TopicPage;
