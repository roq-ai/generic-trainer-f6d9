import * as yup from 'yup';

export const quizValidationSchema = yup.object().shape({
  content: yup.string().required(),
  topic_id: yup.string().nullable(),
});
