"use client";
import FormHeader from "@/components/back-office/FormHeader";
import SubmitButton from "@/components/back-office/forms/SubmitButton";
import TextInput from "@/components/back-office/forms/TextInput";
import TextAreaInput from "@/components/back-office/forms/TextAreaInput";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    console.log(data);
  }

  return (
    <div>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-slate-100 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={false}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait..."
        />
      </form>

      {/* 
      ID
      Title
      Slug
      Description
      Image
       */}
    </div>
  );
}
