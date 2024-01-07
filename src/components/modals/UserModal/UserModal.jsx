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
  InputsContainer,
  ErrorMessage,
  TitleContainer,
  CloseIconContainer,
  NoImageWrapper,
  NoImageText,
} from "./UserModal.styled";
import { UploadIcon } from "../../icons/UploadIcon";
import { CloseIcon } from "../../icons/CloseIcon";
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
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateAvatar, updateUser } from "../../../redux/user/operations";

const formSchema = Yup.object({
  username: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces.`
    )
    .max(32, "Maximum symbols is 32"),
  email: Yup.string().email("Email must be valid"),
  oldPassword: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols"),
  newPassword: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols"),
  repeatPassword: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  gender: Yup.string().oneOf(["male", "female"]),
});

export const UserModal = ({ onClose }) => {
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState("");
  const { user } = useAuth();
  const dispath = useDispatch();

  useEffect(() => {
    if (!avatar) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(avatar);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      username: user.username,
      email: user.email,
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      const { gender, username, email, oldPassword, newPassword } = values;
      if (!oldPassword || !newPassword) {
        dispath(updateUser({ gender, username, email }));
        return;
      }
      dispath(
        updateUser({
          gender,
          username,
          email,
          oldPassword,
          password: newPassword,
        })
      );
      onClose();
    },
    validationSchema: formSchema,
  });

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setAvatar(undefined);
      return;
    }
    const data = new FormData();
    data.append("avatar", e.target.files[0]);
    dispath(updateAvatar(data));
    // I've kept this example simple by using the first image instead of multiple
    setAvatar(e.target.files[0]);
  };
  return (
    <BaseModalWrap onClose={() => onClose()}>
      <ModalContainer>
        <TitleContainer>
          <Title>Settings</Title>
          <CloseIconContainer onClick={() => onClose()}>
            <CloseIcon width={24} heigth={24} stroke={colors.BLUE} />
          </CloseIconContainer>
        </TitleContainer>
        <Container>
          <Subtitle type="main">Your photo</Subtitle>
          <ImageContainer>
            {user.avatarURL ? (
              <Image src={preview || user.avatarURL} alt="Your avatar" />
            ) : (
              <NoImageWrapper>
                <NoImageText>
                  {user.username ? user.username[0] : user.email[0]}
                </NoImageText>
              </NoImageWrapper>
            )}
            <UploadImageLabel>
              <HiddentInput onChange={onSelectFile} type="file" />
              <CustomUploadContainer>
                <UploadIcon width={16} height={16} stroke={colors.BLUE} />
                <p>Upload photo</p>
              </CustomUploadContainer>
            </UploadImageLabel>
          </ImageContainer>
          <Form onSubmit={formik.handleSubmit}>
            <InputsContainer>
              <div>
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

                  <div>
                    <TextInput
                      className={
                        Boolean(formik.errors.username) &&
                        formik.touched.username
                          ? "error"
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                      type="text"
                      name="username"
                      placeholder="Your name"
                    />
                    {formik.touched.username && (
                      <ErrorMessage>{formik.errors.username}</ErrorMessage>
                    )}
                  </div>
                </TextInputContainer>
                <TextInputContainer>
                  <Subtitle>E-mail</Subtitle>
                  <div>
                    <TextInput
                      className={
                        Boolean(formik.errors.email) && formik.touched.email
                          ? "error"
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type="email"
                      name="email"
                      placeholder="Your e-mail"
                    />
                    {formik.touched.email && (
                      <ErrorMessage>{formik.errors.email}</ErrorMessage>
                    )}
                  </div>
                </TextInputContainer>
              </div>
              <div>
                <Subtitle type="main">Password</Subtitle>
                <InputContainer>
                  <Text htmlFor="oldPassword">Outdated password:</Text>
                  <div>
                    <IconInputContainer>
                      <InputWithIcon
                        className={
                          Boolean(formik.errors.oldPassword) &&
                          formik.touched.oldPassword
                            ? "error"
                            : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.oldPassword}
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
                          <VisibleIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        ) : (
                          <HiddenIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        )}
                      </InputIcon>
                    </IconInputContainer>
                    {formik.touched.oldPassword && (
                      <ErrorMessage>{formik.errors.oldPassword}</ErrorMessage>
                    )}
                  </div>
                </InputContainer>
                <InputContainer>
                  <Text htmlFor="newPassword">New Password:</Text>
                  <div>
                    <IconInputContainer>
                      <InputWithIcon
                        className={
                          Boolean(formik.errors.newPassword) &&
                          formik.touched.newPassword
                            ? "error"
                            : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newPassword}
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
                          <VisibleIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        ) : (
                          <HiddenIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        )}
                      </InputIcon>
                    </IconInputContainer>
                    {formik.touched.newPassword && (
                      <ErrorMessage>{formik.errors.newPassword}</ErrorMessage>
                    )}
                  </div>
                </InputContainer>
                <InputContainer>
                  <Text htmlFor="repeatPassword">Repeat new password:</Text>
                  <div>
                    <IconInputContainer>
                      <InputWithIcon
                        className={
                          Boolean(formik.errors.repeatPassword) &&
                          formik.touched.repeatPassword
                            ? "error"
                            : ""
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repeatPassword}
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
                          <VisibleIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        ) : (
                          <HiddenIcon
                            width={16}
                            height={16}
                            stroke={colors.BLUE}
                          />
                        )}
                      </InputIcon>
                    </IconInputContainer>
                    {formik.touched.repeatPassword && (
                      <ErrorMessage>
                        {formik.errors.repeatPassword}
                      </ErrorMessage>
                    )}
                  </div>
                </InputContainer>
              </div>
            </InputsContainer>
            <SubmitButton
              disabled={Object.keys(formik.errors).length}
              type="submit"
            >
              Save
            </SubmitButton>
          </Form>
        </Container>
      </ModalContainer>
    </BaseModalWrap>
  );
};
