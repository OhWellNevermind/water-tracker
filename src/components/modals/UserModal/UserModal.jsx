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
} from "./UserModal.styled";
import { UploadIcon } from "../../icons/UploadIcon";
import { colors } from "../../../constants";
import { useFormik } from "formik";
import { TextInputContainer } from "./UserModal.styled";
import { GenderInputLabel } from "./UserModal.styled";
import { RadioButton } from "./UserModal.styled";
import { Container } from "./UserModal.styled";
import { HiddentInput } from "./UserModal.styled";
import { CustomUploadContainer } from "./UserModal.styled";

export const UserModal = ({ setIsOpen }) => {
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
  });
  return (
    <BaseModalWrap onClose={() => setIsOpen(false)}>
      <ModalContainer>
        <Title>Settings</Title>
        <Container style={{ display: "flex", flexDirection: "column" }}>
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
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="text"
                name="name"
              />
            </TextInputContainer>
            <TextInputContainer>
              <Subtitle>E-mail</Subtitle>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="email"
                name="email"
              />
            </TextInputContainer>
            <Subtitle type="main">Password</Subtitle>
            <InputContainer>
              <Text htmlFor="oldPassword">Outdated password:</Text>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.oldPassword}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="password"
                name="oldPassword"
              />
            </InputContainer>
            <InputContainer>
              <Text htmlFor="newPassword">New Password:</Text>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.newPassword}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="password"
                name="newPassword"
              />
            </InputContainer>
            <InputContainer>
              <Text htmlFor="repeatPassword">Repeat new password:</Text>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="password"
                name="repeatPassword"
              />
            </InputContainer>
            <SubmitButton type="submit">Save</SubmitButton>
          </Form>
        </Container>
      </ModalContainer>
    </BaseModalWrap>
  );
};
