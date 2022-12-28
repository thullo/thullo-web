import { useForm, SubmitHandler } from "react-hook-form";
import InputComponent from "../../InputComponent/InputComponent";
import { registrationOption } from "../../Utils/formValidation";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

function SignUpForm() {
  type FormData = {
    fullName: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    reset({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputComponent
        placeholder={"Full name"}
        type={"text"}
        register={register}
        error={errors}
        name={"fullName"}
        validation={registrationOption.fullName}
        icon={
          <BsPersonCircle className="absolute w-5 h-5 top-2.5 left-2.5 text-color-border" />
        }
      />
      <InputComponent
        placeholder={"Email"}
        type={"email"}
        register={register}
        error={errors}
        name={"email"}
        validation={registrationOption.email}
        icon={
          <AiOutlineMail className="absolute w-5 h-5 top-2.5 left-2.5 text-color-border" />
        }
      />
      <InputComponent
        placeholder={"Password"}
        type={"password"}
        register={register}
        error={errors}
        name={"password"}
        validation={registrationOption.password}
        icon={
          <IoMdLock className="absolute w-5 h-5 top-2.5 left-2.5 text-color-border" />
        }
      />
      <button
        type="submit"
        className="bg-color-btn text-color-white w-full py-2 border border-color-btn rounded-lg hover:bg-color-white hover:text-color-btn transition-all duration-300 ease-in"
      >
        Start coding now
      </button>
    </form>
  );
}

export default SignUpForm;
