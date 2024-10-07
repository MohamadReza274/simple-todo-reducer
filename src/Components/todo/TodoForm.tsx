import { FormEventHandler } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<FieldValues>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<T>;
}

const TodoForm = <T,>({ register, handleSubmit, errors }: Props<T>) => {
  return (
    <form className={"p-4 max-w-md"} onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Todo
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Enter Title and Description of todo and save to add todo in list.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full flex flex-col">
              <label
                htmlFor="title"
                className="block self-start text-sm font-medium leading-6 text-gray-900"
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

            <div className="col-span-full flex flex-col ">
              <label
                htmlFor="desc"
                className="block self-start text-sm font-medium leading-6 text-gray-900"
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
          <div className="flex items-center justify-end gap-x-2 my-2">
            <button
              type="button"
              data-autofocus
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
