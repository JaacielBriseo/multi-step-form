import { Field, Form, Formik } from "formik";
import { setAddon } from "../store";
import { useAppDispatch } from '../store/hookTypes';

export const Addons = () => {
  const options : string[] = ['Online service', 'Larger storage', 'Customizable profile']
  const dispatch = useAppDispatch()
  return (
    <Formik
    initialValues={{
      options: '',
    }}
    onSubmit={(values) => {
      console.log(values.options);
      dispatch(setAddon(values.options));
    }}
  >
    {({ values }) => (
      <Form>
        {options.map((option) => (
          <label key={option}>
            <Field type="checkbox" name="options" value={option} checked={values.options.indexOf(option) !== -1} />
            {option}
          </label>
        ))}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
  )
}
