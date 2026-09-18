import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";

import Button from "@/components/button";
import { CustomLoader } from "@/components/svgCollection";
import cn from "@/utils/cn";

import { useMultistepForm } from "./multistepform/useMultistepForm";
import { FormType, initialForm } from "./multistepform/types";
import { Step1 } from "./multistepform/step-1";
import { Step2 } from "./multistepform/step-2";
import { Step3 } from "./multistepform/step-3";
import { Step0 } from "./multistepform/step-0";
import { Step4 } from "./multistepform/step-4";
import { Step5 } from "./multistepform/step-5";
import { Step6 } from "./multistepform/step-6";
import { Step8 } from "./multistepform/step-8";
import AnimatedArrow from "./animated-arrow";

const BuyMamafiCoin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStep4Loading, setIsStep4Loading] = useState(false);

  const formMethods = useForm<FormType>({
    defaultValues: initialForm,
    mode: "onChange",
  });

  const {
    currentStepIndex,
    isFirstStep,
    isLastStep,
    step,
    goTo,
    next,
    back,
  } = useMultistepForm([
    <Step0 key={1} formMethods={formMethods} />,
    <Step1 key={2} formMethods={formMethods} />,
    <Step2 key={3} formMethods={formMethods} />,
    <Step3 key={4} formMethods={formMethods} />,
    <Step4
      key={5}
      formMethods={formMethods}
      setStep4Loading={setIsStep4Loading}
    />,
    <Step5 key={6} formMethods={formMethods} />,
    <Step6 key={7} formMethods={formMethods} />,
    <Step8 key={8} formMethods={formMethods} />,
  ]);

  async function onSubmit(data: FormType) {
    if (currentStepIndex === 4) {
      const amount = Number(data.tokensToBuy.replace(/,/g, ""));

      if (amount > 100000) {
        formMethods.setError("tokensToBuy", {
          type: "manual",
          message: "Amount cannot exceed 100,000",
        });
        return;
      }

      if (amount < 100) {
        formMethods.setError("tokensToBuy", {
          type: "manual",
          message: "Amount cannot be less than 100",
        });
        return;
      }
    }

    // Final form step before success — skip live API and show success screen
    if (currentStepIndex === 6) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsLoading(false);
      toast.success("Purchase request submitted successfully!");
      next();
      return;
    }

    if (isLastStep) {
      return;
    }

    next();
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="w-full h-full"
        >
          <div className="relative flex flex-col gap-6 items-center h-full">
            <div
              className={cn(
                `w-full lg:w-[80%] h-full animated-card z-50 relative flex flex-col gap-6 items-center justify-between max-sm:overflow-y-auto`,
                !isFirstStep && "form-border  overflow-hidden"
              )}
            >
              {!isFirstStep && <div className="gradient-circle"></div>}

              {step}
              <div className="flex">
                <div className="flex justify-center gap-10 w-full">
                  {!isFirstStep && !isLastStep && (
                    <button
                      type="button"
                      onClick={back}
                      className="cursor-pointer"
                      disabled={isStep4Loading}
                      aria-label="Previous step"
                    >
                      <AnimatedArrow className="size-16 rotate-180" />
                    </button>
                  )}
                  {!isFirstStep && !isLastStep && (
                    <button
                      type="submit"
                      className="cursor-pointer"
                      disabled={isStep4Loading}
                      aria-label="Next step"
                    >
                      <AnimatedArrow className="size-16 " />
                    </button>
                  )}
                </div>
                {isFirstStep && (
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50">
                    <Button
                      title="Get Started"
                      className="mx-auto py-3"
                      onClick={() => goTo(1)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
        {isLoading && (
          <div className="fixed left-0 top-0 z-50  h-full w-full items-center justify-center backdrop-blur flex rounded-2xl">
            <div className="flex flex-col gap-4 bg-[#0B0B0B] rounded-xl p-6">
              <CustomLoader className="mx-auto origin-center  animate-spin text-white" />
              <div className="text-center">
                <h5 className="text-white text-base">Please wait</h5>
                <h6 className="text-[#A8ABBB] text-xs">
                  Please do not close or refresh the page.
                </h6>
              </div>
            </div>
          </div>
        )}
      </FormProvider>
    </div>
  );
};

export default BuyMamafiCoin;
