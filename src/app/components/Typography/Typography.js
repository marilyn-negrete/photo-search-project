import { HeroHeading, SecondaryHeading, SubHeading} from "./Typography.styled";
import { Jua, Kalam } from 'next/font/google';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});
const kalam = Kalam({ subsets: ['latin'], weight: '300'});

const Typography = (props) => {
    const { variant, label, className } = props;

    switch (variant) {
        case 'h1':
          return <HeroHeading className={className}>{label}</HeroHeading>;
        case 'h3': 
          return <SecondaryHeading className={className}>{label}</SecondaryHeading>
        case 'h4':
          return <SubHeading className={className} bottomSpacing={1}>{label}</SubHeading>;
        default:
          return <p className={className}>{label}</p>; // Default to a paragraph if variant is not recognized
      }
}


export default Typography;