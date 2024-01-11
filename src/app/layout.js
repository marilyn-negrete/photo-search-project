'use client';
import { Global } from './Global.styled';
import BottomNav from './components/Nav/BottomNav';
import TopNav from './components/Nav/TopNav';
import StyledComponentsRegistry from './lib/registry'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components';
import theme from './lib/theme';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <Global lang="en">
        <body>
          {pathname !== '/' ? <BottomNav /> : null}
          {pathname !== '/' ? <TopNav /> : null}
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </Global>
    </ThemeProvider>
      
  )
}
