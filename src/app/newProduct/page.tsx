// src/app/newproduct/page.tsx
"use client";
import MultiStepForm from "../components/MultiStepForm";
import { FormProvider } from "../context/FormProvider";

/**
 * ${1:Description placeholder}
 *
 * @returns {${2:*}}
 */
const NewProductPage = () => {
  return (
    <FormProvider>
      <div className="flex flex-col items-center justify-center h-screen bg-sky-100">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Create New Product
        </h1>
        <MultiStepForm />
      </div>
    </FormProvider>
  );
};

export default NewProductPage;
