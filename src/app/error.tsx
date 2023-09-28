"use client";

import { Button } from "react-bootstrap";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPga({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h1>Error occured</h1>
      <p>Something went wrong</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
