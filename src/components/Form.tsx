import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

///////////////////// SCHEMA BASED VALIDATION WITH ZOD ///////////
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

type FormData = z.infer<typeof schema>;

/////////////////// USESFORM HOOK WITH ZOD SCHEMA BASED VALIDATION /////
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // React Hook Form uses reference object to get values from input fields

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

/////////////////// USESFORM HOOK ////////////////////////////////
// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm(); // React Hook Form uses reference object to get values from input fields

//   const onSubmit = (data: FieldValues) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-lable">
//           Name
//         </label>
//         <input
//           {...register("name", { required: true, minLength: 3 })}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//         {errors.name?.type === "required" && (
//           <p className="text-danger">The name field is required.</p>
//         )}
//         {errors.name?.type === "minLength" && (
//           <p className="text-danger">The name must be at least 3 characters.</p>
//         )}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-lable">
//           Age
//         </label>
//         <input
//           {...register("age")}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>

//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

/////////////////// USESTATE HOOK ////////////////////////////////
// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: 0,
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-lable">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-lable">
//           Age
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, age: parseInt(event.target.value) })
//           }
//           value={person.age}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>

//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

/////////////////// USEREF HOOK ////////////////////////////////
// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault(); // prevent this form from being posted to the server (the page will not be re-loaded)
//     if (nameRef.current !== null) person.name = nameRef.current.value; // return the DOM element/ DOM node that we are referencing
//     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

//     console.log(person);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-lable">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-lable">
//           Age
//         </label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>

//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

export default Form;
