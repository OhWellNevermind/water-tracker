import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  Form,
  GenderContainer,
  Image,
  ImageContainer,
  InputContainer,
  ModalContainer,
  SubmitButton,
  Subtitle,
  Text,
  Title,
  UploadImageLabel,
  TextInput,
} from "./UserModal.styled";
import { UploadIcon } from "../../icons/UploadIcon";
import { HiddenIcon } from "../../icons/HiddenIcon";
import { VisibleIcon } from "../../icons/VisibleIcon";
import { colors } from "../../../constants";
import { useFormik } from "formik";
import { TextInputContainer } from "./UserModal.styled";
import { GenderInputLabel } from "./UserModal.styled";
import { RadioButton } from "./UserModal.styled";
import { Container } from "./UserModal.styled";
import { HiddentInput } from "./UserModal.styled";
import * as Yup from "yup";
import { CustomUploadContainer } from "./UserModal.styled";
import { IconInputContainer } from "./UserModal.styled";
import { InputIcon } from "./UserModal.styled";
import { InputWithIcon } from "./UserModal.styled";
import { useState } from "react";

const formSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces.`
    )
    .max(32, "Maximum symbols is 32"),
  email: Yup.string().email("Email must be valid"),
  oldPassword: Yup.string()
    .min("Password must contain minimum 8 symbols")
    .max("Password must contain maximum 64 symbols"),
  password: Yup.string()
    .min("Password must contain minimum 8 symbols")
    .max("Password must contain maximum 64 symbols"),
  newPassword: Yup.string()
    .min("Password must contain minimum 8 symbols")
    .max("Password must contain maximum 64 symbols"),
  gender: Yup.string().oneOf(["male", "female"]),
});

export const UserModal = ({ setIsOpen, isUserModOpened }) => {
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      gender: "male",
      name: "",
      email: "",
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });
  return isUserModOpened ? (
    <BaseModalWrap onClose={() => setIsOpen(false)}>
      <ModalContainer>
        <Title>Settings</Title>
        <Container>
          <Subtitle type="main">Your photo</Subtitle>
          <ImageContainer>
            <Image>
              <img src="" alt="" />
            </Image>
            <UploadImageLabel>
              <HiddentInput type="file" />
              <CustomUploadContainer>
                <UploadIcon width={16} height={16} stroke={colors.BLUE} />
                <p>Upload photo</p>
              </CustomUploadContainer>
            </UploadImageLabel>
          </ImageContainer>
          <Form onSubmit={formik.handleSubmit}>
            <Subtitle type="main">Your gender identity</Subtitle>
            <GenderContainer>
              <GenderInputLabel>
                <HiddentInput
                  onChange={(e) => {
                    formik.setFieldValue("gender", e.currentTarget.value);
                  }}
                  checked={formik.values.gender === "female"}
                  value="female"
                  type="radio"
                  name="gender"
                  id="gender-female"
                />
                <RadioButton />
                Female
              </GenderInputLabel>
              <GenderInputLabel>
                <HiddentInput
                  onChange={(e) => {
                    formik.setFieldValue("gender", e.currentTarget.value);
                  }}
                  checked={formik.values.gender === "male"}
                  value="male"
                  type="radio"
                  name="gender"
                  id="gender-male"
                />
                <RadioButton />
                Male
              </GenderInputLabel>
            </GenderContainer>
            <TextInputContainer>
              <Subtitle>Your name</Subtitle>

              <TextInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="text"
                name="name"
                placeholder="Your name"
              />
            </TextInputContainer>
            <TextInputContainer>
              <Subtitle>E-mail</Subtitle>
              <TextInput
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="email"
                name="email"
                placeholder="Your e-mail"
              />
            </TextInputContainer>
            <Subtitle type="main">Password</Subtitle>
            <InputContainer>
              <Text htmlFor="oldPassword">Outdated password:</Text>
              <IconInputContainer>
                <InputWithIcon
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.oldPassword}
                  // error={formik.touched.name && Boolean(formik.errors.name)}
                  // helperText={formik.touched.name && formik.errors.name}
                  type={isOldPasswordVisible ? "text" : "password"}
                  name="oldPassword"
                  placeholder="Password"
                />
                <InputIcon
                  onClick={() => {
                    setIsOldPasswordVisible(!isOldPasswordVisible);
                  }}
                >
                  {isOldPasswordVisible ? (
                    <VisibleIcon width={16} height={16} stroke={colors.BLUE} />
                  ) : (
                    <HiddenIcon width={16} height={16} stroke={colors.BLUE} />
                  )}
                </InputIcon>
              </IconInputContainer>
            </InputContainer>
            <InputContainer>
              <Text htmlFor="newPassword">New Password:</Text>
              <IconInputContainer>
                <InputWithIcon
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  // error={formik.touched.name && Boolean(formik.errors.name)}
                  // helperText={formik.touched.name && formik.errors.name}
                  type={isPasswordVisible ? "text" : "password"}
                  name="newPassword"
                  placeholder="Password"
                />
                <InputIcon
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                >
                  {isPasswordVisible ? (
                    <VisibleIcon width={16} height={16} stroke={colors.BLUE} />
                  ) : (
                    <HiddenIcon width={16} height={16} stroke={colors.BLUE} />
                  )}
                </InputIcon>
              </IconInputContainer>
            </InputContainer>
            <InputContainer>
              <Text htmlFor="repeatPassword">Repeat new password:</Text>
              <IconInputContainer>
                <InputWithIcon
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                  // error={formik.touched.name && Boolean(formik.errors.name)}
                  // helperText={formik.touched.name && formik.errors.name}
                  type={isNewPasswordVisible ? "text" : "password"}
                  name="repeatPassword"
                  placeholder="Password"
                />
                <InputIcon
                  onClick={() => {
                    setIsNewPasswordVisible(!isNewPasswordVisible);
                  }}
                >
                  {isNewPasswordVisible ? (
                    <VisibleIcon width={16} height={16} stroke={colors.BLUE} />
                  ) : (
                    <HiddenIcon width={16} height={16} stroke={colors.BLUE} />
                  )}
                </InputIcon>
              </IconInputContainer>
            </InputContainer>
            <SubmitButton type="submit">Save</SubmitButton>
          </Form>
        </Container>
      </ModalContainer>
    </BaseModalWrap>
  ) : null;
};
