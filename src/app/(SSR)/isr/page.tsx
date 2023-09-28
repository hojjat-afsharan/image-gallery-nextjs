import Image from "next/image";
import { UnsplashImage } from "../../models/unsplash-image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/app/components/bootstrap";

export const metadata: Metadata = {
  title: "ISR - Image Galley",
};

export const revalidate = 15;

export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const heigth = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page is using
        <strong>incremental static regeneration for fetching data</strong>. a
        new image is fetched every 15 seconds (after refreshing the page) and
        then served from the cache for that duration.
      </Alert>
      <Image
        src={image.urls.raw}
        alt={image.description ?? "image"}
        width={width}
        height={heigth}
        priority
        style={{ height: "auto" }}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
