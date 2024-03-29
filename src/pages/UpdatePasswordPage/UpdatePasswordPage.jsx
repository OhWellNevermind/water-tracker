import { HiddenIcon } from "../../components/icons/HiddenIcon";
import { VisibleIcon } from "../../components/icons/VisibleIcon";
import {
  UpdatePasswordForm,
  Label,
  Input,
  SubmitButton,
  Title,
  StyledBackground,
  IconButton,
  InputContainer,
  AuthMain,
  Bottle,
  ErrorMessageStyled,
} from "./UpdatePasswordPage.styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { sendNewPassword } from "../../redux/user/operations";
import { useDispatch } from "react-redux";

const AddSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const UpdatePasswordPage = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { verificationCode } = useParams();

  const formik = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: AddSchema,
    onSubmit: (user) => {
      const { password } = user;
      dispatch(sendNewPassword({ verificationCode, password }));
    },
  });

  return (
    <AuthMain>
      <StyledBackground />
      <Bottle />
      <UpdatePasswordForm onSubmit={formik.handleSubmit}>
        <Title>Update your password</Title>

        <Label>Enter your new password</Label>
        <InputContainer>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
            required
          />
          <IconButton
            type="button"
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? (
              <>
                <VisibleIcon width={16} height={16} stroke={"blue"} />
              </>
            ) : (
              <>
                <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
              </>
            )}
          </IconButton>
          {formik.touched.password && (
            <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
          )}
        </InputContainer>

        <Label>Repeat password</Label>
        <InputContainer>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Repeat password"
            name="confirmPassword"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "input-error"
                : ""
            }
            required
          />
          <IconButton
            type="button"
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? (
              <>
                <VisibleIcon width={16} height={16} stroke={"blue"} />
              </>
            ) : (
              <>
                <HiddenIcon width={16} height={16} stroke={"blue"} />
              </>
            )}
          </IconButton>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <ErrorMessageStyled>
              {formik.errors.confirmPassword}
            </ErrorMessageStyled>
          )}
        </InputContainer>

        <SubmitButton type="submit">Update</SubmitButton>
      </UpdatePasswordForm>
    </AuthMain>
  );
};
