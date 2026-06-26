"use client";

import { FloxButton } from "@floriangramsch/react-lib";
import { useTest } from "./api/test/use-test";
import { usePostTest } from "./api/postTest/use-post-test";

export default function Home() {
  const { data: test } = useTest();

  const mut = usePostTest();

  return (
    <div>
      <FloxButton onClick={() => mut.mutate("test")}>Test</FloxButton>
      {test}
    </div>
  );
}
