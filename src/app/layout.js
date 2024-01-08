'use client';
import { Global } from './Global.styled';
import Nav from './components/Nav/Nav';
import StyledComponentsRegistry from './lib/registry'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Global>
      {pathname !== '/' ? <Nav /> : null}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Global>
    </html>
  )
}
