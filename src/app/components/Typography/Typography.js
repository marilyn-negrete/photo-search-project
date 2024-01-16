import { HeroHeading, SubHeading } from "./Typography.styled";

const Typography = (props) => {
    const { variant, label } = props;

    switch (variant) {
        case 'h1':
          return <HeroHeading>{label}</HeroHeading>;
        case 'h4':
          return <SubHeading>{label}</SubHeading>;
        default:
          return <p>{label}</p>; // Default to a paragraph if variant is not recognized
      }
}


export default Typography;