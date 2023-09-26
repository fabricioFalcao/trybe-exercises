// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from '../App';
import About from '../pages/About';
import { renderWithRouter } from '../utils/renderWithRouter';

it('Renderiza texto da página inicial', () => {
  renderWithRouter(<App/>)
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

it('Navega para página About', async () => {
  const {user} = renderWithRouter(<App/>)

  const aboutLink = screen.getByRole('link', {name: /sobre/i})

  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

it('Renderiza o componente About', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
