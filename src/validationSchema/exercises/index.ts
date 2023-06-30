import * as yup from 'yup';

export const exerciseValidationSchema = yup.object().shape({
  content: yup.string().required(),
  topic_id: yup.string().nullable(),
});
