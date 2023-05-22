import { Title } from "../title/Title"; 
function SectionComponent({
  children,
  sectionTitle = null,
  sectionClassName = null,
  titleStylesClassname = null,
}) {
  return (
    <section
      className={`dark-shedow position-relative p-3  mt-5 m-1 rounded-3 ${sectionClassName} `}
    >
      {sectionTitle ? (
        <Title titleClassName={titleStylesClassname}>{sectionTitle}</Title>
      ) : (
        ""
      )}
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default SectionComponent;
