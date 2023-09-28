import Image from "next/image";
import { UnsplashImage } from "../../models/unsplash-image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/app/components/bootstrap";

export const metadata: Metadata = {
  title: "Dynamic fetching - Image Galley",
};

// export const revalidate = 0;

export default async function Page() {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
      //   cache: "no-cache",
      next: { revalidate: 0 },
    }
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const heigth = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetching data dynamically</strong>. Every time the
        page is refreshed, you get a new image.
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
