"use client";

import { createBlog } from "@/actions/actions";
import { TBlogSchema } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function CreateBlog() {
  const { register, handleSubmit, reset } = useForm<TBlogSchema>();

  const onSubmit = async (data: TBlogSchema) => {
    createBlog(data);
  };

  return (
    <form
      className={`p-4 flex flex-col gap-6`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className={`text-2xl text-center`}>Create Blog</h1>

      <input
        {...register("title")}
        type="text"
        placeholder="title"
        className={`px-2 py-1 rounded bg-neutral-800 outline-none
            border border-neutral-800
            focus:border-neutral-400 hover:border-neutral-400
            duration-200`}
      />
      <textarea
        {...register("content")}
        name="content"
        rows={10}
        placeholder="content"
        className={`px-2 py-1 rounded bg-neutral-800 outline-none
            border border-neutral-800
            focus:border-neutral-400 hover:border-neutral-400
            duration-200`}
      />
      <button
        type="submit"
        className={`rounded text-xl bg-green-800 text-black outline-none
            hover:bg-green-500 focus:bg-green-500 duration-100`}
      >
        Create
      </button>
    </form>
  );
}
