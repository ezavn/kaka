import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";

const schema = yup
  .object({
    name: yup.string().required("Vui lòng điền vào tên của bạn"),
    email: yup
      .string()
      .required("Vui lòng điền vào email của bạn")
      .email("Vui lòng điền đúng định dạng email"),
    phone: yup.string().required("Vui lòng điền vào số điện thoại của bạn"),
    company: yup.string().required("Vui lòng điền vào tên công ty của bạn"),
  })
  .required();

const Form = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "SALE_PRO",
    },
  });
  const onHandlerSubmit = (values) => {
    if (!isValid) return;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        values,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((data) => {
        if (data) {
          alert("Dang ky thanh cong");
          console.log(data);
        } else {
          alert("Dang ky khong thanh cong");
        }
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onHandlerSubmit)}
      className="bg-red px-[20px] pt-[30px] md:px-[50px] md:pt-[50px] pb-[35px] md:pb-[60px] w-full md:w-[480px]"
    >
      <h3 className="font-semibold text-[24px] md:text-[30px] text-white mb-[30px] md:mb-[60px] text-center">
        Đăng ký ngay hôm nay
      </h3>
      <div className="flex flex-col gap-y-[15px]">
        <div className="hidden">
          <Input name="title" id="title" control={control} type="text"></Input>
        </div>
        <div>
          <Input
            name="name"
            id="name"
            placeholder="Họ và tên"
            control={control}
            type="text"
            error={errors.name}
          ></Input>
          {errors.name && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="email"
            id="email"
            placeholder="Email…"
            control={control}
            type="text"
            error={errors.email}
          ></Input>
          {errors.email && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="phone"
            id="phone"
            placeholder="Số điện thoại"
            control={control}
            type="text"
            error={errors.phone}
          ></Input>
          {errors.phone && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="company"
            id="company"
            placeholder="Công ty"
            control={control}
            type="text"
            error={errors.company}
          ></Input>
          {errors.company && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            secondary
            className="mt-[30px]"
            isDisable={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 mx-auto border-2 border-t-2 rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Đăng ký ngay"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
