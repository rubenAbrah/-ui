function ProfileSectionComponent({
  children,
  sectionTitle = null,
  sectionClassName = null,
  titleClassName = null,
}) {
  return (
    <>
      <Title titleClassName={titleClassName}>{sectionTitle}</Title>
      <section
        className={`dark-shedow position-relative mtminus-2  w-90 mx-auto 
        rounded-3 ${sectionClassName} `}
      >
        <div className="">{children}</div>
      </section>
    </>
  );
}

function Title({ children, titleClassName = null }) {
  return (
    <div
      className={`${titleClassName} object-cover h-300 d-flex 
      rounded-3 justify-content-center align-items-center w-100
     bg-red-500 text-white`}
    >
      <div>{children}</div>
    </div>
  );
}

export default ProfileSectionComponent;
