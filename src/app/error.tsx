"use client";

import { useRouter } from "next/navigation";

export default function ErrorComponent({
  error,
  customError,
}: {
  error?: Error & { digest?: string };
  customError?: { status?: number; message?: string };
}) {
  const router = useRouter();
  return (
    <div className="h-full min-h-[70svh] gap-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-gray-700">
        {customError?.status || 500}
      </h1>
      <p className="text-lg font-light text-gray-600">
        {customError?.message || "Something went wrong"}
      </p>
      <span className="flex gap-3">
        <button
          onClick={() => router.refresh()}
          className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-300 text-white p-1 rounded-md"
        >
          Try again
        </button>
        <button
          onClick={() => router.back()}
          className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-300 text-white p-1 rounded-md"
        >
          Back
        </button>
      </span>
    </div>
  );
}
