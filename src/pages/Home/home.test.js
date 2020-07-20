import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import Home from './';

test('teste onchange busca', async () => {
  render(<Provider store={store}><Home /></Provider>);
  const linkElement = await screen.getByPlaceholderText('Procure por heróis');
  
  fireEvent.change(linkElement, { target: { value: 'Hulk' } })
  
  expect(linkElement.value).toBe('Hulk')
});


test('testando função de sort', async () => {
  const { findByText  } = render(<Provider store={store}><Home /></Provider>);
  const linkElement = await screen.getByPlaceholderText('Procure por heróis');
  
  fireEvent.change(linkElement, { target: { value: 'Ajak' } })
  
  const textBuscado = await findByText(/Ajak/);

  expect(textBuscado).toBeInTheDocument()
});