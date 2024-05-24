import Date from "@/components/common/major-heading/date";
import Description from "@/components/common/major-heading/description";
import Picture from "@/components/common/major-heading/picture";
import { ChildrenType, DateType } from "@/types";

type TitleType = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  text: ChildrenType
}

export default function MajorHeading({ date, title, description, picture }: { date?: DateType, title: TitleType, description?: ChildrenType, picture?: string }) {
  const HeadingTag = title.tag

  return (
    <header className="major">
      <Date date={date} />
      <HeadingTag>{title.text}</HeadingTag>
      <Description>{description}</Description>
      <Picture src={picture}/>
    </header>
  );
}
