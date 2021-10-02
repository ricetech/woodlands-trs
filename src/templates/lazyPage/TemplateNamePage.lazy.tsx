import React, { lazy, Suspense } from "react";

const LazyTemplateName = lazy(() => import("./TemplateNamePage"));

const TemplateName = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
