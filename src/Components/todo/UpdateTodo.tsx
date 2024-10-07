import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Todo } from "./useTodoReducer";
import useTodos from "./useTodos";

const schema = z.object({
  title: z.string().min(3, "Title must be at least 3 character(s)"),
  description: z
    .string()
    .min(15, "Description must be at least 15 character(s)"),
});

type FormValueTypes = z.infer<typeof schema>;

interface Props {
  todo: Todo;
}

const UpdateTodo = ({ todo }: Props) => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useTodos();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueTypes>({
    resolver: zodResolver(schema),
    defaultValues: { title: todo.title, description: todo.description },
  });

  const handleSubmitForm: SubmitHandler<FormValueTypes> = (values) => {
    dispatch({
      type: "UPDATE",
      todoId: todo.id,
      updatedTodo: { id: todo.id, isComplete: todo.isComplete, ...values },
    });
    reset();
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <PencilSquareIcon className="h-4 w-4 text-blue-600" />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Update Todo
                    </DialogTitle>
                    <div className="mt-2">
                      <form
                        className={"p-4 max-w-md"}
                        onSubmit={handleSubmit(handleSubmitForm)}
                      >
                        <div className="space-y-12">
                          <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                              Add Todo
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Enter Title and Description of todo and save to
                              add todo in list.
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
                                  <p className="text-sm text-red-400">
                                    {errors.title.message}
                                  </p>
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
                            <div className="flex items-center justify-end gap-x-2 mt-3 sm:mt-2">
                              <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateTodo;
