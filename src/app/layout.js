'use client';
import { Global } from './Global.styled';
import BottomNav from './components/Nav/BottomNav';
import TopNav from './components/Nav/TopNav';
import StyledComponentsRegistry from './lib/registry'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
      <Global lang="en">
        <body>
          {pathname !== '/' ? <BottomNav /> : null}
          {pathname !== '/' ? <TopNav /> : null}
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </Global>
  )
}
