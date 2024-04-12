"use client";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";

import React, { useRef } from "react";

type Props = {
  onUpload?: any;
};

LR.registerBlocks(LR);

const UploadCareButton = (props: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  return <div>UploadCareButton</div>;
};

export default UploadCareButton;
