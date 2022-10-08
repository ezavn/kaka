import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import Button from "./Button";
import Bx from "wow-bx24";
import { useState } from "react";
import { useEffect } from "react";

const schema = yup
  .object({
    NAME: yup.string().required("Vui lòng điền vào tên của bạn"),
    EMAIL: yup
      .string()
      .required("Vui lòng điền vào email của bạn")
      .email("Vui lòng điền đúng định dạng email"),
    PHONE: yup.string().required("Vui lòng điền vào số điện thoại của bạn"),
    COMPANY_TITLE: yup
      .string()
      .required("Vui lòng điền vào tên công ty của bạn"),
  })
  .required();

const Form = () => {
  const [loading, setLoading] = useState(false);
  let f_rid = "968";
  let f_source = "WEBFORM";
  const f_query = window.location.search;
  if (f_query !== null && f_query !== "") {
    const search_value = window.location.search;
    const params = new URLSearchParams(search_value);
    f_source = "3";
    f_rid = params.get("rid");
  }
  const $bx = new Bx();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      TITLE: "CRM_FORM_SALESPRO",
      ASSIGNED_BY_ID: f_rid,
      SOURCE_ID: f_source,
    },
  });
  const onHandlerSubmit = (values) => {
    setLoading(true);
    if (!isValid) return;
    $bx
      .call("crm.lead.add", {
        fields: {
          ...values,
          TITLE: values.TITLE,
          NAME: values.NAME,
          COMPANY_TITLE: values.COMPANY_TITLE,
          ASSIGNED_BY_ID: values.ASSIGNED_BY_ID,
          SOURCE_ID: values.SOURCE_ID,
          PHONE: [{ VALUE: values.PHONE, VALUE_TYPE: "WORK" }],
          EMAIL: [{ VALUE: values.EMAIL }],
        },
      })
      .then((result) => {
        setLoading(false);
        alert("Đăng ký thành công");
        reset({
          TITLE: "CRM_FORM_SALESPRO",
          ASSIGNED_BY_ID: f_rid,
          SOURCE_ID: f_source,
          NAME: "",
          PHONE: "",
          EMAIL: "",
          COMPANY_TITLE: "",
        });
        $bx.call("crm.lead.productrows.set", {
          id: result.result,
          rows: [
            {
              PRODUCT_ID: 16250,
              PRICE: 2500000,
              QUANTITY: 1,
              TAX_INCLUDED: "Y",
              TAX_RATE: 8,
            },
          ],
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Đăng ký thất bại");
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onHandlerSubmit)}
      className="bg-red px-[20px] pt-[30px] md:px-[50px] md:pt-[50px] pb-[35px] md:pb-[60px] w-full md:w-[508px]"
    >
      <h3 className="font-medium text-[17px] text-white mb-[30px] md:mb-[60px] text-center">
        Đừng bỏ lỡ cơ hội{" "}
        <span className="font-extrabold">Tăng doanh số và Tạo ra</span> <br />{" "}
        <span className="font-extrabold">đội ngũ bán hàng xuất sắc</span> chỉ vì
        sự đắn đo của Anh/Chị!
      </h3>
      <div className="flex flex-col gap-y-[15px]">
        <div className="hidden">
          <Input name="TITLE" id="TITLE" control={control} type="text"></Input>
        </div>
        <div className="hidden">
          <Input
            name="SOURCE_ID"
            id="SOURCE_ID"
            control={control}
            type="text"
          ></Input>
        </div>
        <div className="hidden">
          <Input
            name="ASSIGNED_BY_ID"
            id="ASSIGNED_BY_ID"
            control={control}
            type="text"
          ></Input>
        </div>
        <div>
          <Input
            name="NAME"
            id="NAME"
            placeholder="Họ và tên"
            control={control}
            type="text"
            error={errors.NAME}
          ></Input>
          {errors.NAME && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.NAME.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="EMAIL"
            id="EMAIL"
            placeholder="Email…"
            control={control}
            type="text"
            error={errors.EMAIL}
          ></Input>
          {errors.EMAIL && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.EMAIL.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="PHONE"
            id="PHONE"
            placeholder="Số điện thoại"
            control={control}
            type="text"
            error={errors.PHONE}
          ></Input>
          {errors.PHONE && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.PHONE.message}
            </p>
          )}
        </div>
        <div>
          <Input
            name="COMPANY_TITLE"
            id="COMPANY_TITLE"
            placeholder="Công ty"
            control={control}
            type="text"
            error={errors.COMPANY_TITLE}
          ></Input>
          {errors.COMPANY_TITLE && (
            <p className="font-medium mt-[5px] text-sm text-red-600">
              {errors.COMPANY_TITLE.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <Button
            type="submit"
            secondary
            className="mt-[30px]"
            isDisable={loading}
          >
            {loading ? (
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
