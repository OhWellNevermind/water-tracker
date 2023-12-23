import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  Form,
  GenderContainer,
  GenderInput,
  GenderInputContainer,
  GenderText,
  Image,
  ImageContainer,
  InputContainer,
  ModalContainer,
  SubmitButton,
  Subtitle,
  Text,
  Title,
  UploadImageContainer,
} from "./UserModal.styled";
import { UploadIcon } from "../../icons/UploadIcon";
import { colors } from "../../../constants";
import { useFormik } from "formik";

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Subtitle type="main">Your photo</Subtitle>
          {/* <ImageContainer>
            <Image>
              <img src="" alt="" />
            </Image>
            <UploadImageContainer>
              <input type="file" />
              <UploadIcon width={16} height={16} stroke={colors.BLUE} />
              <p>Upload photo</p>
            </UploadImageContainer>
          </ImageContainer> */}
          <Form onSubmit={formik.handleSubmit}>
            <Subtitle>Your gender identity</Subtitle>
            <GenderContainer>
              <GenderInputContainer>
                <GenderInput
                  value="female"
                  onChange={(e) => {
                    formik.setFieldValue("gender", e.currentTarget.value);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "female"}
                  id="gender-female"
                  type="radio"
                  name="gender"
                />
                <GenderText htmlFor="gender-male">Female</GenderText>
              </GenderInputContainer>
              <GenderInputContainer>
                <GenderInput
                  value="male"
                  onChange={(e) => {
                    formik.setFieldValue("gender", e.currentTarget.value);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "male"}
                  type="radio"
                  name="gender"
                  id="gender-male"
                />
                <GenderText htmlFor="gender-male">Male</GenderText>
              </GenderInputContainer>
            </GenderContainer>
            <Subtitle>
              Your name
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="text"
                name="name"
              />
            </Subtitle>
            <Subtitle>
              E-mail
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                type="email"
                name="email"
              />
            </Subtitle>
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
        </div>
      </ModalContainer>
    </BaseModalWrap>
  );
};
