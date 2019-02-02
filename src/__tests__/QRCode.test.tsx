import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, queryByAttribute, fireEvent } from 'react-testing-library';
import { QRCode } from '../components/QRCode';

test('show and hide QR code', () => {
  const { getByText, container } = render(<QRCode />);

  const showQR = getByText(/Show QR code/i);

  fireEvent.click(showQR);

  //check QR image is present
  const img = 'qrchainsidepay.png';
  expect(queryByAttribute('src', container, img)).toBeInTheDocument();
  const hideQR = getByText(/Hide QR code/i);

  fireEvent.click(hideQR);

  getByText(/Show QR code/i);

  expect(queryByAttribute('src', container, img)).not.toBeInTheDocument();
});
