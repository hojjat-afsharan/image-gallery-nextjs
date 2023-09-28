import Image from "next/image";
import { UnsplashImage } from "../models/unsplash-image";
import Link from "next/link";
import { Metadata } from "next";
import { Alert } from "@/app/components/bootstrap";

export const metadata: Metadata = {
  title: "Static fetching - Image Galley",
};

const StaticPage = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const heigth = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page is using{" "}
        <strong>
          fetching and caching data at build time (known as static rendering).
        </strong>{" "}
        If you even hard reload the page, you see the same image all the time.
        Because fetching data happening in build time.
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
};

export default StaticPage;
