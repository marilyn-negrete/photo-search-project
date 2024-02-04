import { HeroHeading, SecondaryHeading, SubHeading} from "./Typography.styled";

const Typography = (props) => {
    const { variant, label, className } = props;
    let element;

    switch (variant) {
        case 'h1':
          element = <HeroHeading className={className}>{label}</HeroHeading>;
          break;
        case 'h3': 
          element =  <SecondaryHeading className={className}>{label}</SecondaryHeading>
          break;
        case 'h4':
          element =  <SubHeading className={className} bottomSpacing={1}>{label}</SubHeading>;
          break;
        default:
          element =  <p className={className}>{label}</p>; // Default to a paragraph if variant is not recognized
          break;
      }


      return element;
}


export default Typography;