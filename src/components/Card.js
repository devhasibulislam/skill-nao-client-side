import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetUser from "../utils/useGetUser";
import Modal from "./Modal";
import SignIn from "./SignIn";
import TrnxID from "./TrnxID";

const Card = ({ course }) => {
  const [openModal, setOpenModal] = useState(false);
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/popularPackages/${id}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure onClick={() => handleDetails(course._id)}>
        <img
          src={
            course?.thumbnail?.includes("http")
              ? course?.thumbnail
              : `http://localhost:8080/uploads/${course?.thumbnail}`
          }
          alt={course.title}
          className="h-[250px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">
          {course.title.toUpperCase()}
        </h2>
        {/* <p>{course.about.slice(0, 45)}...</p> */}
        <div className="card-actions justify-between items-center">
          <div
            className="badge bg-[#ffb96d] text-black whitespace-nowrap tooltip"
            data-tip="Price ৳"
          >
            ৳ {Number(course.price).toLocaleString("bn-BD")}
          </div>
          <button
            className="btn-sm bg-[#1A6241] rounded text-white hover:text-black hover:bg-white"
            disabled={localStorage
              .getItem("skillNaoCourseIds")
              ?.includes(course._id)}
            onClick={() => setOpenModal(true)}
          >
            অর্ডার কর
          </button>
        </div>
      </div>

      {/* open modal */}
      {openModal && user?.role === "user" && user?.role !== "admin" ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          content={<TrnxID courseId={course._id} user={user} />}
        />
      ) : (
        user?.role !== "admin" && (
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            content={<SignIn />}
          />
        )
      )}
    </div>
  );
};

export default Card;
