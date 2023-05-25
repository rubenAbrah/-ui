function SectionComponent({
  children,
  title = null,
  sectionClassName = null,
  titleClassName = null,
}) {
  return (
    <section
      className={`dark-shedow position-relative p-3  mt-5 m-1 rounded-3 ${sectionClassName} `}
    >
      {title ? <Title titleClassName={titleClassName}>{title}</Title> : ""}
      <div className="mt-3">{children}</div>
    </section>
  );
}


function Title({ children, titleClassName = null }) {
  return (
    <div
      className={`${titleClassName}  p-2 title d-flex 
      rounded-3 justify-content-center align-items-center
      w-100 mtminus-2 bg-red-500 text-white`}
    >
      <div>{children}</div>
    </div>
  );
}

export default SectionComponent;