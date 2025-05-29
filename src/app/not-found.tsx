import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="container flex flex-col justify-center mx-auto h-screen">
        <div className="container flex flex-col items-center gap-3">
          <img
            src="https://shofy-svelte.vercel.app/img/error/error.png"
            alt="404 Error"
          />
          <h1 className="text-gray-700 text-4xl font-semibold">
            404 Not Found
          </h1>
          <span className="text-gray-700 text-xl text-wrap">
            Whoops, this is embarrassing. Looks like the page you were looking
            for wasn't found.
          </span>
          <Link href={"/"}>
            <Button variant={"black"} className="p-6">Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
