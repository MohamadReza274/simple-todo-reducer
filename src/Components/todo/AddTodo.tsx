import { Button } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useTodos from "./useTodos.tsx";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 character(s)"),
  description: z
    .string()
    .min(15, "Description must be at least 15 character(s)"),
});

type FormValueTypes = z.infer<typeof schema>;

const uid = () => {
  return Date.now();
};

const AddTodo = () => {
  const { dispatch } = useTodos();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueTypes>({ resolver: zodResolver(schema) });

  const handleSubmitForm: SubmitHandler<FormValueTypes> = (values) => {
    const todo_ = { id: uid(), ...values, isComplete: false };
    dispatch({ type: "ADD", todo: todo_ });
    reset();
  };

  return (
    <form className={"p-4 max-w-md"} onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Todo
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter Title and Description of todo and save to add todo in list.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title*
              </label>
              <input
                {...register("title")}
                id="title"
                type="text"
                placeholder="Enter Title"
                autoComplete="title"
                className=" rounded-md shadow-sm border-gray-300  w-full"
              />
              {errors.title && (
                <p className="text-sm text-red-400">{errors.title.message}</p>
              )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="desc"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description*
              </label>
              <div className="mt-2">
                <textarea
                  {...register("description")}
                  id="desc"
                  placeholder={"Enter Description"}
                  rows={3}
                  className="block w-full sm:max-w-md rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.description && (
                  <p className="text-sm text-red-400">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Button
            type={"submit"}
            className={
              "inline-flex mt-2 items-center gap-2 rounded-md border py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white"
            }
          >
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
