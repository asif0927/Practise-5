import * as yup from 'yup'

export const sportSchema = yup.object().shape({
     title: yup.string().min(3).max(20).required("name is required"),
     description: yup.string().required("description is required"),
     imageUrl: yup.string().required("description is required")
});