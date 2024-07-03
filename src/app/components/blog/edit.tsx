"use client";

import { editBlog } from "@/actions/actions";
import { TBlogEditSchema } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function EditBlogForm({ props }: { props: TBlogEditSchema }) {
  const { register, handleSubmit, reset } = useForm<TBlogEditSchema>({
    defaultValues: {
      id: props.id,
      title: props.title,
      content: props.content,
    },
  });

  const onSubmit = async (data: TBlogEditSchema) => {
    editBlog(data);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
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
        className={`rounded text-xl bg-yellow-700 text-black outline-none
            hover:bg-yellow-500 focus:bg-yellow-500 duration-100`}
      >
        Edit
      </button>
    </form>
  );
}
