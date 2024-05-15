import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/inputFields";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

TodoForm.propTypes = {
  onSubmitForm: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmitForm: null,
};

function TodoForm(props) {
  const { onSubmitForm } = props;
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "Title too short"),
  });
  const form = useForm({
    defaultValues: {
      // need to declare all field in here
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handlerFormSubmit = (value) => {
    if (onSubmitForm) {
      onSubmitForm(value);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handlerFormSubmit)}>
      Todo Form
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
