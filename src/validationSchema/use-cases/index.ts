import * as yup from 'yup';

export const useCaseValidationSchema = yup.object().shape({
  content: yup.string().required(),
  topic_id: yup.string().nullable(),
});
