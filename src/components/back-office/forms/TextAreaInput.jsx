"use client";
export default function TextAreaInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...register(`${name}`, { required: isRequired })}
          name={name}
          id={name}
          rows={3}
          className=" block w-full rounded-md border-0 py-3 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset dark:focus:ring-slate-500 focus:ring-lime-500  sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 outline-0"
          defaultValue={defaultValue}
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {
          errors[
            `${name}` && (
              <span className="text-sm text-red-600">{label} is required</span>
            )
          ]
        }
      </div>
    </div>
  );
}
