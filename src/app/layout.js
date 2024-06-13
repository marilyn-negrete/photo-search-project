'use client';
import GlobalStyles from './Global.styled';
import BottomNav from '@/components/Nav/BottomNav';
import TopNav from '@/components/Nav/TopNav';
import StyledComponentsRegistry from './lib/registry'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from './context/AppContext';
import theme from '@/lib/theme';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body>
            <StyledComponentsRegistry>
              <GlobalStyles />
              {
                pathname !== '/' && pathname !== '/auth' ?
                <>
                  <BottomNav position="bottom" />
                  <TopNav position="top" />
                </> : null
              }
              {children}
            </StyledComponentsRegistry>
          </body>
        </html>
      </ThemeProvider>
    </ContextProvider>
  )
}
