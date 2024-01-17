# `This is the react practice set`

---

<!-- This is the command to create and start the react app -->

> ### This is the command to create and start the react app
>   - npm init
>   - npx create-react-app appname
>   - cd appname
>   - npm start

<!-- Default export -->

> ### Default export
>   - From any module if data are imported using default export than exactly that data will be exported, at importing point only that data will be accessible using any name, by default

<!-- Named export -->

> ### Named export
>   - But if we want to export more than one data, we havr to export it separately like follows,
>   - export default a;
>   - export {b};
>   - export {c};
>   - export {d};
>   - In which a is exported default and b, c, and d are exported separately, so we can access a as any name but for exporting the data which is not exported by default we have to use same name as use in the export function
>   - This is called as named export

<!-- Props -->

> ### Props
>   - If we create the component, we can use it in any other project.
>   - For every project we have to change some properties of the component like title and so on.
>   - Props is some thing that we can pass as an argument to the component.
>   - Props are read only and it can not changed.
>   - We can set the type of the prpos and also set the default properties or values for the props.

<!-- States -->

> ### States
>   - States are react hooks.
>   - In the app we have to get the data from the user and the based on their input we have to proceed.
>   - To get the data from user we use the state.
>   - Intially value of state is define and based on the changing function value of the initial state is changed without reloading the page, so we can say that the state is changed!!
>   - State is deifferent from the props, they must be called in a React function component or a custom React Hook function.

> ### Components
>   - We can creatw the JSX component and re use that component just like the functions and can also pass the props

> ### YUP
>   - YUP is the library that work with the formik and easily handle the error for validation

> ### Formik
>   - Fomrik is the library that will manage the form validation and submition.
>>  Important Fields of Formik
>     1. Formik
>     2. Form
>     3. Field
>     4. ErrorMessage
>     5. FieldArray
>     6. FastField
>>  Important Properties of Formik
>     1. initialValues
>       - To initialize the values of form field,
>     3. validationSchema
>       - In this object we define the schema for validate the input of the form, and can use the YUP also
>     4. onSubmit
>       - This function trigger on submit and what ever functionality of this function will perform
>     5. validateOnChange
>       - It will allow us if we want validation on every change or not, typically true or false
>     6. validateOnBlur
>       - It will allow us if we want validation on blur/focus change from input field , typically true or false
