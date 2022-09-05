import { useContext } from 'react';
import { Link } from "react-router-dom";
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { contactSchema } from '../../validations/contactValidation'
import { ContactContext } from '../../context/contactContext';
import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = () => {
  const { loading, groups, createContact } = useContext(ContactContext);// ,errors, contact, onContactChange

  // const formik = useFormik({
  //   initialValues: {
  //     fullname: "",
  //     photo: "",
  //     mobile: "",
  //     email: "",
  //     job: "",
  //     group: ""
  //   },
  //   validationSchema: contactSchema,
  //   onSubmit: values => {
  //     // console.log(values);
  //     createContact(values);
  //   }
  // })

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/man-taking-note.png")}
              alt=""
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  {/* {
                    errors?.map((error, index) => (
                      <p key={index} className="text-danger">{error.message}</p>
                    ))
                  } */}

                  <Formik initialValues={{
                    fullname: "",
                    photo: "",
                    mobile: "",
                    email: "",
                    job: "",
                    group: ""
                  }}
                    validationSchema={contactSchema}
                    onSubmit={values => createContact(values)}>
                    {/* { */}
                    {/* formik => ( */}
                    {/* <form onSubmit={formik.handleSubmit}>createContact */}
                    <Form>
                      <div className="mb-2">
                        {/* <input */}
                        <Field
                          // id="fullname"
                          name="fullname"
                          type="text"
                          // {...formik.getFieldProps("fullname")}
                          // name="fullname"
                          // value={formik.values.fullname} // contact.fullname
                          // onChange={formik.handleChange} // onContactChange
                          // onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        // required={true}
                        />
                        {/* {formik.touched.fullname && formik.errors.fullname ? (<div className='text-danger'>{formik.errors.fullname}</div>) : null} */}
                        <ErrorMessage name="fullname" render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        {/* <input */}
                        <Field
                          // id="photo" 
                          name="photo"
                          type="text"
                          // {...formik.getFieldProps("photo")}
                          // name="photo"
                          // value={formik.values.photo}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="آدرس تصویر"
                        // required={true}
                        />
                        {/* {formik.touched.photo && formik.errors.photo ? (<div className='text-danger'>{formik.errors.photo}</div>) : null} */}
                        <ErrorMessage name='photo' render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        {/* <input */}
                        <Field
                          // id="mobile"
                          name="mobile"
                          type="number"
                          // {...formik.getFieldProps("mobile")}
                          // name="mobile"
                          // value={formik.values.mobile}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="شماره موبایل"
                        // required={true}
                        />
                        {/* {formik.touched.mobile && formik.errors.mobile ? (<div className='text-danger'>{formik.errors.mobile}</div>) : null} */}
                        <ErrorMessage name='mobile' render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        {/* <input */}
                        <Field
                          // id="email"
                          name="email"
                          type="email"
                          // {...formik.getFieldProps("email")}
                          // name="email"
                          // value={formik.values.email}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="آدرس ایمیل"
                        // required={true}
                        />
                        {/* {formik.touched.email && formik.errors.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null} */}
                        <ErrorMessage name="email" render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        {/* <input */}
                        <Field
                          // id="job"
                          name="job"
                          type="text"
                          // {...formik.getFieldProps("job")}
                          // name="job"
                          // value={formik.values.job}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="شغل"
                        // required={true}
                        />
                        {/* {formik.touched.job && formik.errors.job ? (<div className='text-danger'>{formik.errors.job}</div>) : null} */}
                        <ErrorMessage name='job' render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mb-2">
                        {/* <select */}
                        <Field
                          // id="group"
                          name="group"
                          as="select"
                          // {...formik.getFieldProps("group")}
                          // value={formik.values.group}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          className="form-control"
                        // required={true}
                        >
                          <option value="">انتخاب گروه</option>
                          {groups.length > 0 &&
                            groups.map((group) => (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            ))}
                          {/* </select> */}
                        </Field>
                        {/* {formik.touched.group && formik.errors.group ? (<div className='text-danger'>{formik.errors.group}</div>) : null} */}
                        <ErrorMessage name='group' render={msg => <div className='text-danger'>{msg}</div>} />
                      </div>
                      <div className="mx-2">
                        <input
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: PURPLE }}
                          value="ساخت مخاطب"
                        />
                        <Link
                          to={"/contacts"}
                          className="btn mx-2"
                          style={{ backgroundColor: COMMENT }}
                        >
                          انصراف
                        </Link>
                      </div>
                      {/* </form> */}
                      {/* ) */}
                    </Form>
                    {/* } */}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </>
      )
      }
    </>
  );
};

export default AddContact;
